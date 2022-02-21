import { onMounted, onUnmounted, ref, ComputedRef, computed } from 'vue';
import { debounce } from 'lodash';

interface Slug {
  level: number;
  title: string;
  slug: string;
}
interface Options {
  slugList: ComputedRef<Slug[]>;
}
export function useActiveSlug({ slugList }: Options) {
  const activeHash = ref('');
  const activeSlug = computed(() => {
    return activeHash.value.slice(1);
  });
  const onScroll = debounce(setActiveLink, 10);
  function setActiveLink(): void {
    const anchors = getAnchors(slugList.value);
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive && hash) {
        manualChangeHash(hash);
        return;
      }
    }
  }

  const manualChangeHash = (maybeHash: string) => {
    let hash = '';
    if (maybeHash.startsWith('#')) {
      hash = maybeHash;
    } else {
      hash = '#' + maybeHash;
    }
    history.replaceState(null, document.title, hash || ' ');
    activeHash.value = hash;
  };

  onMounted(() => {
    manualChangeHash(decodeURIComponent(location.hash));
    window.addEventListener('scroll', onScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });

  return {
    activeHash,
    manualChangeHash,
    activeSlug,
  };
}

function getAnchors(slugList: Slug[]): HTMLAnchorElement[] {
  const anchors: HTMLAnchorElement[] = Array.from(document.querySelectorAll('.header-anchor'));
  return anchors.filter((anchor) => {
    return slugList.some((item) => {
      return decodeURIComponent(anchor.hash.slice(1)) === item.slug;
    });
  });
}

function getPageOffset(): number {
  return (document.querySelector('.nav-bar') as HTMLElement).offsetHeight;
}

function getAnchorTop(anchor: HTMLAnchorElement): number {
  const pageOffset = getPageOffset();
  return anchor.parentElement!.offsetTop - pageOffset - 15;
}

function isAnchorActive(
  index: number,
  anchor: HTMLAnchorElement,
  nextAnchor: HTMLAnchorElement,
): [boolean, string | null] {
  const scrollTop = window.scrollY;
  if (index === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }

  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, decodeURIComponent(anchor.hash)];
  }

  return [false, null];
}
