<script setup lang="ts">
import { withDefaults } from "vue";
import type { KeyboardSpanOption } from "@/shared";

interface Props {
  options: KeyboardSpanOption;
}

withDefaults(defineProps<Props>(), {
  options: () => ({
    type: "span",
    width: 1,
  }),
});
</script>

<template>
  <div
    class="keyboard-component keyboard-widget keyboard-span"
    :style="{ flex: options.width }"
  >
    <div class="inner">&nbsp;</div>
  </div>
</template>

<style scoped lang="scss">
@import "./assets/vars.scss";

.keyboard-widget {
  .inner {
    margin: $layout-gap-y $layout-gap-x;
    height: $button-height;
    line-height: $button-height;
    font-size: $button-font-size;
    text-align: center;
    padding: $button-padding-y $button-padding-x;
    border: transparent solid $button-norm-border-color;
    border-radius: $button-border-radius;
  }
}
</style>
