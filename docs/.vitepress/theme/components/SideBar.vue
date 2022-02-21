<script setup lang="ts">
import NavLinks from './NavLinks.vue';
import SideBarLinks from './SideBarLinks.vue';

defineProps<{ open: boolean }>();
</script>

<template>
  <aside class="sidebar" :class="{ open }">
    <NavLinks class="nav" activeColor="#222" color="#454d64" />

    <slot name="sidebar-top" />

    <SideBarLinks />

    <slot name="sidebar-bottom" />
  </aside>
</template>

<style scoped lang="less">
.sidebar {
  position: fixed;
  top: var(--header-height);
  bottom: 0;
  left: 0;
  z-index: var(--z-index-sidebar);
  border-right: 1px solid var(--c-divider);
  width: 240px;
  background-color: var(--c-bg);
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  @media (min-width: 720px) {
    transform: translateX(0);
  }
  @media (min-width: 960px) {
    width: 300px;
  }
  &.open {
    transform: translateX(0);
    --header-height: 50px;
  }
}
.nav {
  display: block;
  @media (min-width: 720px) {
    display: none;
  }
}
</style>
