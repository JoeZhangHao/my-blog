<template>
  <client-only>
    <div class="vitepress-demo">
      <div :id="id" class="vitepress-demo-content">
        <slot name="default" />
      </div>
      <div v-if="title || desc" class="vitepress-demo-info">
        <div class="vitepress-demo-info-title">
          {{ title }}
        </div>
        <div class="vitepress-demo-info-description" v-html="decodeDesc" />
      </div>
      <div class="vitepress-demo-actions">
        <div class="vitepress-demo-actions-left" />
        <div class="vitepress-demo-actions-right">
          <wau-space size="small">
            <button v-if="visible" class="vitepress-demo-actions-btn" @click="handleCopyBtnClick">
              <check-outlined v-if="copied" />
              <copy-outlined v-else />
            </button>
            <button class="vitepress-demo-actions-btn" @click="toggleSourceCodeVisible">
              <code-expand v-if="visible" />
              <code-collapsed v-else />
            </button>
          </wau-space>
        </div>
      </div>
      <div v-show="visible" class="vitepress-demo-source">
        <slot name="source">
          <div :class="`language-${lang}`">
            <pre>
            <code>{{ decodedSource }}</code>
          </pre>
          </div>
        </slot>
      </div>
    </div>
  </client-only>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { message } from 'ant-design-vue';
import { CopyOutlined, CheckOutlined } from '@wii/icons-vue';
import CodeExpand from './code-expand.vue';
import CodeCollapsed from './code-collapsed.vue';

export default defineComponent({
  name: 'DemoBlock',
  components: {
    CodeExpand,
    CodeCollapsed,
    CopyOutlined,
    CheckOutlined,
  },
  props: {
    source: {
      type: String,
    },
    title: { type: String },
    desc: {
      type: String,
    },
    lang: {
      type: String,
      default: 'js',
    },
    id: {
      type: String,
    },
  },
  setup(props) {
    const visible = ref(false);
    const copied = ref(false);

    return {
      visible,
      copied,
      toggleSourceCodeVisible: () => {
        visible.value = !visible.value;
      },
      handleCopyBtnClick: async () => {
        try {
          await navigator.clipboard.writeText(decodedSource);
          copied.value = true;
          message.success('代码已复制', 1);
          setTimeout(() => {
            copied.value = false;
          }, 1000);
        } catch (error) {}
      },
      decodedSource: decodeURIComponent(props.source),
      decodeDesc: decodeURIComponent(props.desc),
    };
  },
});
</script>

<style lang="less">
.vitepress-demo {
  border: 1px solid #ebedf1;
  border-radius: 4px;
  margin: 16px 0;

  &-content {
    padding: 16px;
  }

  &-info {
    position: relative;
    padding: 16px;
    border-top: 1px solid #ebedf1;

    &-title {
      position: absolute;
      font-weight: bold;
      background: linear-gradient(0deg, #fff, #fff 50%, hsl(0deg 0% 100% / 0%)) 100%;
      transform: translateY(-50%);
      top: 0;
      padding: 0 8px;
    }
  }

  &-actions {
    padding: 0 1em;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px dashed #ebedf1;

    &-btn {
      cursor: pointer;
      background: transparent;
      width: 16px;
      height: 16px;
      border: none;
      font-size: 16px;
    }
  }

  &-source {
    & > div[class*='language-'] {
      margin: 0;
      border-radius: 0;
    }
  }
}
</style>
