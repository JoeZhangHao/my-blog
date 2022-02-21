<script lang="ts" setup>
import { watchEffect, ref, computed } from 'vue';
import { withBase, useData } from 'vitepress';
const items = ref([]);
const keyword = ref('');
const { lang } = useData();
const search = () => {
  if (keyword.value) {
    items.value = [
      {
        title: '测试',
        path: '/test',
        parent: {
          title: 'parent[测试]',
          path: '/parent',
        },
      },
      {
        title: '测试2',
        path: '/test2',
      },
    ];
  }
};
watchEffect(search);

const placeholder = computed(() => {
  return lang.value === 'zh-CN' ? '搜索' : 'search';
});
</script>

<template>
  <div class="search-bar">
    <input
      v-model.trim="keyword"
      :style="{
        background: `url(${withBase('/icon_search.svg')}) no-repeat 0/16px`,
      }"
      class="search-bar-input"
      type="search"
      :placeholder="placeholder"
    />
    <ul class="search-result">
      <li v-for="meta in items" :key="meta.path">
        <a class="anchor-link">
          <span v-if="!!meta.parent">{{ meta.parent.title }}</span>
          {{ meta.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scope>
.search-bar {
  margin-left: 30px;
  align-items: center;
  display: flex;

  &-input {
    width: 200px;
    height: 32px;
    padding: 0 38px 0 26px;
    color: #fff;
    font-size: 14px;
    border: 0;
    outline: none;
    transition: all 0.2s;
    appearance: none;
    background-color: transparent;
    transition: background-position 0.4s ease;

    &:not(:focus) {
      padding-right: 0;
      box-shadow: none;
      cursor: pointer;
    }

    &:not(:focus) + ul {
      transition: 0.1s visibility;
      visibility: hidden;
    }

    &:focus {
      background-position: right 8px center !important;
      padding-left: 0;
    }
  }
}

.search-result {
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  margin: 8px 0 0;
  min-width: 280px;
  max-width: 400px;
  padding: 6px 0;
  background-color: #fff;
  border: 1px solid #ebedf1;
  border-radius: 1px;
  box-shadow: 0 2px 20px 0 rgb(0 0 0 / 5%);
  box-sizing: border-box;

  .anchor-link {
    display: block;
    padding: 6px 20px;
    color: #717484;
    text-decoration: none;
    transition: background-color 0.3s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      color: #014fe0;
      background-color: #f9fafb;
    }

    & span:first-child {
      position: relative;
      display: inline-block;
      max-width: 50%;
      padding-right: 26px;
      vertical-align: -0.37em;
      overflow: hidden;
      text-overflow: ellipsis;
      opacity: 0.8;

      &::after {
        content: '>';
        position: absolute;
        top: 50%;
        right: 6px;
        opacity: 0.6;
        transform: translateY(-54%);
      }
    }
  }

  &:empty {
    display: none;
  }
}
</style>
