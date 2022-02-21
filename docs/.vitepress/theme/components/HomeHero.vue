<script setup lang="ts">
import { computed } from 'vue';
import { useData, withBase } from 'vitepress';
import NavLink from './NavLink.vue';

const { site, frontmatter } = useData();

const showHero = computed(() => {
  const { heroImage, heroText, tagline, actionLink, actionText } = frontmatter.value;
  return heroImage || heroText || tagline || (actionLink && actionText);
});

const heroText = computed(() => frontmatter.value.heroText || site.value.title);
const tagline = computed(() => frontmatter.value.tagline || site.value.description);
</script>

<template>
  <header v-if="showHero" class="home-hero">
    <figure v-if="frontmatter.heroImage" class="figure">
      <img class="image" :src="withBase(frontmatter.heroImage)" :alt="frontmatter.heroAlt" />
    </figure>

    <h1 v-if="heroText" id="main-title" class="title">
      {{ heroText }}
    </h1>
    <p v-if="tagline" class="tagline">
      {{ tagline }}
    </p>

    <NavLink
      v-if="frontmatter.actionLink && frontmatter.actionText"
      :item="{ link: frontmatter.actionLink, text: frontmatter.actionText }"
      class="action"
    />

    <NavLink
      v-if="frontmatter.altActionLink && frontmatter.altActionText"
      :item="{
        link: frontmatter.altActionLink,
        text: frontmatter.altActionText,
      }"
      class="action alt"
    />
  </header>
</template>

<style scoped>
.home-hero {
  /* margin: -1.5rem 0 0; */
  padding: 0 1.5rem;
  text-align: center;
  background-color: #f5f6f8;
}

/* @media (min-width: 420px) {
  .home-hero {
    margin: -1.5rem 0 0;
  }
} */

@media (min-width: 720px) {
  .home-hero {
    padding: 100px 0;
  }
}

.figure {
  padding: 0 1.5rem;
}

.image {
  display: block;
  margin: 0 auto;
  width: auto;
  max-width: 100%;
  max-height: 280px;
}

.title {
  margin-top: 1.5rem;
  font-size: 2rem;
}

@media (min-width: 420px) {
  .title {
    line-height: 56px;
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 3rem;
  }
}

.tagline {
  margin: 0;
  font-size: 16px;
  color: var(--c-text-light);
}

@media (min-width: 420px) {
  .tagline {
    font-size: 16px;
    margin: 16px 0 32px;
    opacity: 0.78;
  }
}

.action {
  display: inline-block;
}

.action.alt {
  margin-left: 1.5rem;
}

@media (min-width: 420px) {
  .action {
    display: inline-block;
  }
}

.action :deep(.item) {
  padding: 0 32px;
  line-height: 41px;
  font-size: 1rem;
  color: var(--c-bg);
  background-color: var(--c-brand);
  border-radius: 22px;
  border: 1px solid var(--c-brand);
  transition: all 0.3s ease;
  height: 44px;
}

.action.alt :deep(.item) {
  background-color: var(--c-bg);
  color: var(--c-brand);
}

.action :deep(.item:hover) {
  text-decoration: none;
  color: var(--c-bg);
  background-color: var(--c-brand-light);
  opacity: 0.8;
}
</style>
