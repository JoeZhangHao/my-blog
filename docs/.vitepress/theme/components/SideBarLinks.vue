<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useData, withBase } from 'vitepress';
import NavLink from './NavLink.vue';

const route = useRoute();

const { theme } = useData();

const sideBar = computed(() => theme.value.sidebar);

const categoryWithChildren = (item: any) => {
  const hasChildren = item.children && item.children.length !== 0;
  return hasChildren;
};
const isActiveItem = (item: string) => {
  const { path } = route;
  return path.startsWith(withBase(item));
};
</script>

<template>
  <ul class="sidebar-links">
    <li v-for="item in sideBar" :key="item.path" class="sidebar-links-item">
      <NavLink
        :item="{
          link: item.path,
          ...item,
        }"
      >
        <template #default="{ linkProps }">
          <a v-bind="linkProps" class="category">{{ item.title }}</a>
        </template>
      </NavLink>

      <ul v-if="categoryWithChildren(item) && isActiveItem(item.path)" class="sub">
        <template v-for="child in item.children">
          <li v-if="child.children && child.children.length !== 0" class="sub-item" :key="child.title">
            <div class="sub-item-type">
              {{ child.title }}
            </div>
            <template v-for="sub in child.children" :key="sub.path">
              <NavLink
                :item="{
                  link: sub.path,
                  ...sub,
                }"
              >
                <template #default="{ linkProps }">
                  <a v-bind="linkProps">
                    <span>{{ sub.title }}</span>
                  </a>
                </template>
              </NavLink>
            </template>
          </li>
          <li v-else class="sub-item" :key="child.path">
            <NavLink
              :item="{
                link: child.path,
                ...child,
              }"
            >
              <template #default="{ linkProps }">
                <a v-bind="linkProps">
                  <span>{{ child.title }}</span>
                </a>
              </template>
            </NavLink>
          </li>
        </template>
      </ul>
    </li>
  </ul>
</template>

<style lang="less" scope>
.sidebar-links {
  margin-bottom: 40px;
  font-size: 16px;

  .category {
    position: relative;
    display: block;
    padding-right: 24px;
    color: #454d64;
    line-height: 2.4;
    text-decoration: none;
    outline: none;
    transition: color 0.3s, background 0.3s;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
    word-break: keep-all;
    padding-left: 28px;

    &.active {
      z-index: 1;
      background: linear-gradient(270deg, #f8faff, rgb(248 250 255 / 0%));
      font-weight: 500;
      color: #222;
    }

    &:hover {
      font-weight: 500;
      color: #222;
    }
    @media only screen and (min-width: 768px) {
      padding-left: 58px;
    }
  }

  &:empty {
    display: none;
  }

  .sub {
    border-bottom: 1px solid #eff1f4;
    margin: 20px 0;
    padding-bottom: 20px;
    margin-top: 8px;
    font-size: 0.9em;
    padding-left: 1em;
    list-style: none;
    @media only screen and (min-width: 768px) {
      margin-left: 58px;
    }

    &:empty {
      display: none;
    }

    &-item {
      &-type {
        color: #8f9eb3;
        width: 85%;
        padding: 10px 0;
        margin-left: -10px;
        border-bottom: 1px solid #eff1f4;
      }

      & a {
        position: relative;
        display: block;
        padding-right: 24px;
        line-height: 2.4;
        text-decoration: none;
        outline: none;
        transition: color 0.3s, background 0.3s;
        color: #717484;

        &.active {
          font-weight: 500;
          color: #014fe0 !important;

          &::before {
            background-color: #014fe0;
          }
        }

        &:hover {
          font-weight: 500;
          color: #222;
        }

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -10px;
          margin-top: -1.5px;
          display: inline-block;
          width: 3px;
          height: 3px;
          background-color: #8f9eb3;
          border-radius: 50%;
          transform: scale(1);
          transition: background-color 0.2s, transform 0.2;
        }
      }
    }
  }
}
</style>
