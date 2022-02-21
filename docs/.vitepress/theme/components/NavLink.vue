<script setup lang="ts">
import { toRefs, useAttrs } from 'vue';
import type { DefaultTheme } from '../config';
import { useNavLink } from '../composables/navLink';
import OutboundLink from './icons/OutboundLink.vue';

const attrs = useAttrs();
const props = defineProps<{
  item: DefaultTheme.NavItemWithLink;
}>();

const propsRefs = toRefs(props);

const { props: linkProps, isExternal } = useNavLink(propsRefs.item);
</script>

<template>
  <div class="nav-link">
    <slot
      v-bind="{
        linkProps,
        isExternal,
      }"
    >
      <a class="item" v-bind="linkProps">
        {{ item.text }}
        <OutboundLink v-if="isExternal" />
      </a>
    </slot>
  </div>
</template>

<style scoped>
.item {
  display: block;
  padding: 0 1.5rem;
  line-height: 36px;
  font-size: 1rem;
  color: v-bind('attrs.color');
  white-space: nowrap;
  text-align: center;
}

.item:hover,
.item.active {
  text-decoration: none;
  color: v-bind(attrs.activecolor);
}

.item.external:hover {
  border-bottom-color: transparent;
  color: v-bind(attrs.activecolor);
}

@media (min-width: 720px) {
  .item {
    padding: 0;
    line-height: 24px;
    font-size: 0.9rem;
  }

  .item:hover,
  .item.active {
    color: v-bind(attrs.activecolor);
  }
}
</style>
