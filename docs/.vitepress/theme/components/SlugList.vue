<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute, useData, withBase } from 'vitepress';
import { useActiveSlug } from '../composables/useActiveSlug';

const { page } = useData();
const route = useRoute();

const getTarget = (slug: string) => {
  console.log(route.path);

  return route.path + '#' + slug;
};
const isHome = computed(() => {
  return route.path === withBase('/');
});
const slugList = computed(() => {
  if (!page.value.headers) return [];
  return page.value.headers.map((header) => {
    return {
      ...header,
      target: getTarget(header.slug),
    };
  });
});

const { activeSlug, manualChangeHash } = useActiveSlug({
  slugList,
});
</script>

<template>
  <ul v-if="!isHome" class="slug-list">
    <li
      v-for="item in slugList"
      :key="item.slug"
      class="slug-list-item"
      :data-depth="item.level"
      :title="item.title"
      @click="manualChangeHash(item.slug)"
    >
      <a
        :href="item.target"
        :class="{
          active: activeSlug === item.slug,
        }"
      >
        <span>{{ item.slug }}</span>
      </a>
    </li>
  </ul>
</template>

<style lang="less">
.slug-list {
  list-style: none;
  position: fixed;
  z-index: 10;
  top: 50px;
  right: 0;
  width: 136px;
  margin: 0;
  padding: 0 24px 0 0;
  background-color: #fff;
  box-shadow: 0 0 16px 16px #fff;
  box-sizing: content-box;
  overflow: auto;
  top: 114px;
  max-height: calc(90vh - 144px);

  &-item {
    position: relative;
    margin: 0;
    padding: 4px 0 4px 6px;
    text-indent: 12px;
    font-size: 13px;
    line-height: 1.40625;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &[data-depth='3'] {
      padding-left: 12px;
    }

    & a {
      color: #454d64;
      display: block;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        display: inline-block;
        width: 2px;
        background: #ebedf1;
      }

      &.active {
        color: #014bd6;
      }

      &.active::before {
        background: #014fe0;
      }

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
