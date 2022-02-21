<script setup lang="ts">
import NavBarTitle from './NavBarTitle.vue';
import NavLinks from './NavLinks.vue';
import ToggleSideBarButton from './ToggleSideBarButton.vue';

defineEmits(['toggle']);
</script>

<template>
  <header class="nav-bar">
    <ToggleSideBarButton @toggle="$emit('toggle')" />

    <NavBarTitle />

    <div class="utils">
      <span class="utils-divider" />
      <slot name="search" />
    </div>

    <div class="nav">
      <NavLinks active-color="#014fe0" color="#ffffff" />
    </div>
  </header>
</template>

<style scoped lang="less">
.nav-bar {
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 58px;
  height: var(--header-height);
  white-space: nowrap;
  background: #2b303b;
  color: #fff;
  box-shadow: 0 0px 6px 0px rgba(0, 0, 0, 0.08);

  @media only screen and (max-width: 767px) {
    justify-content: center;
    height: 50px;
  }
}

.utils {
  position: absolute;
  align-items: center;
  display: flex;
  left: 300px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
  &-divider {
    display: inline-block;
    background-color: #f4f5f7;
    width: 1px;
    height: 30px;
    border-radius: 8px;
    opacity: 0.1;
  }
}

.nav {
  display: none;
}

@media (min-width: 720px) {
  .nav {
    display: block;
  }
}
</style>
