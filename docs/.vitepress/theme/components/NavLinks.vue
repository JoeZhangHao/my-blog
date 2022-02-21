<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import { useLanguageLinks } from '../composables/nav';
import NavLink from './NavLink.vue';
import NavDropdownLink from './NavDropdownLink.vue';

const { theme } = useData();

const localeLinks = useLanguageLinks();

// const repo = useRepo()
const show = computed(() => theme.value.nav || localeLinks.value);
</script>

<template>
  <nav v-if="show" class="nav-links">
    <template v-if="theme.nav">
      <div v-for="item in theme.nav" :key="item.text" class="item">
        <NavDropdownLink v-if="item.items" :item="item" />
        <NavLink v-else :item="item" v-bind="$attrs" />
      </div>
    </template>

    <div v-if="localeLinks" class="item">
      <NavDropdownLink :item="localeLinks" />
    </div>

    <!-- <div v-if="repo" class="item">
      <NavLink :item="repo" />
    </div>-->
  </nav>
</template>

<style scoped>
.nav-links {
  padding: 16px 0;
  border-bottom: 1px solid var(--c-divider);
}

@media (min-width: 720px) {
  .nav-links {
    display: flex;
    padding: 6px 0 0;
    align-items: center;
    border-bottom: 0;
  }

  .item + .item {
    padding-left: 40px;
  }
}
</style>
