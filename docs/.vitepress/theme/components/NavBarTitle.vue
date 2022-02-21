<script setup lang="ts">
import { withBase, useData } from 'vitepress';
const { site, localePath } = useData();
const [txtLogo, logo] = ['/weroad@2x.png', '/logo_white.png'].map(withBase);
</script>

<template>
  <a
    class="nav-bar-title"
    :href="localePath"
    :aria-label="`${site.title}, back to home`"
    :style="{
      background: `url(${logo}) no-repeat 0 / contain`,
    }"
  >
    <span
      class="logo-text"
      :style="{
        background: `url(${txtLogo}) no-repeat 0 / contain`,
      }"
    />
  </a>
</template>

<style scoped lang="less">
.nav-bar-title {
  display: inline-block;
  height: 40px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  font-size: 24px;
  line-height: 40px;
  padding-left: 48px;
  @media only screen and (max-width: 767px) {
    height: 28px;
    line-height: 28px;
    padding-left: 36px;
  }
}

.nav-bar-title:hover {
  text-decoration: none;
}

.logo-text {
  background-size: 100%;
  height: 100%;
  width: 130px;
  margin-top: -5px;
  display: inline-block;
}
</style>
