<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const { frontmatter } = useData();

const hasFeatures = computed(() => {
  return frontmatter.value.features && frontmatter.value.features.length > 0;
});

interface Feature {
  title?: string;
  details?: string;
}

const features = computed<Feature[]>(() => {
  return frontmatter.value.features ? frontmatter.value.features : [];
});
</script>

<template>
  <div v-if="hasFeatures" class="home-features">
    <div class="wrapper">
      <div class="container">
        <div class="features">
          <section v-for="(feature, index) in features" :key="index" class="feature">
            <img v-if="feature.icon" :src="feature.icon" />
            <h2 v-if="feature.title" class="title">
              {{ feature.title }}
            </h2>
            <p v-if="feature.details" class="details">
              {{ feature.details }}
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-features {
  margin: 0 auto;
  // padding: 2.5rem 0 2.75rem;
  max-width: 960px;
}

.home-hero + .home-features {
  padding-top: 0;
}

@media (min-width: 420px) {
  .home-features {
    // padding: 3.25rem 0 3.5rem;
  }

  .home-hero + .home-features {
    padding-top: 0;
  }
}

@media (min-width: 720px) {
  .home-features {
    // padding-right: 1.5rem;
    // padding-left: 1.5rem;
  }
}

.wrapper {
  // padding: 0 1.5rem;
}

.home-hero + .home-features .wrapper {
  // border-top: 1px solid var(--c-divider);
  // padding-top: 2.5rem;
}

@media (min-width: 420px) {
  .home-hero + .home-features .wrapper {
    // padding-top: 3.25rem;
  }
}

@media (min-width: 720px) {
  .wrapper {
    padding-right: 0;
    padding-left: 0;
  }
}

.container {
  margin: 0 auto;
  max-width: 392px;
}

@media (min-width: 720px) {
  .container {
    max-width: 960px;
  }
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 96px;
  grid-row-gap: 56px;
  padding: 72px 0;
}

.feature {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  img {
    height: 144px;
    margin-bottom: 16px;
  }
}

.title {
  margin: 0;
  border-bottom: 0;
  line-height: 1;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
  padding-bottom: 0;
}

@media (min-width: 420px) {
  .title {
    font-size: 20px;
  }
}

.details {
  margin: 0;
  line-height: 1.6;
  font-size: 14px;
  color: var(--c-text-light-3);
  text-align: center;
}

.title + .details {
  padding-top: 0;
}
</style>
