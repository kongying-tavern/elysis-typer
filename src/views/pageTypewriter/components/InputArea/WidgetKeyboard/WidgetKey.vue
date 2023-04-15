<script setup lang="ts">
import { withDefaults } from "vue";
import type { KeyboardKeyOption } from "@/shared";
import { useConfig, useTextInput } from "../../../hooks";

interface Props {
  options: KeyboardKeyOption;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({
    type: "key",
    width: 1,
    keyCode: -1,
    keyTextMain: "",
  }),
});

const { config } = useConfig();
const { append } = useTextInput();

const keyPress = () => {
  append(props.options?.keyTextMain as string);
};
</script>

<template>
  <div
    class="keyboard-component keyboard-widget keyboard-key cursor-pointer"
    :class="{
      [config.font]: config.keyTransform,
    }"
    :style="{ flex: options.width }"
    @click="keyPress()"
  >
    <div class="inner">
      <span class="char-main">
        {{ options.keyTextMain }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./assets/vars.scss";

.keyboard-key {
  flex: 1;
  .inner {
    margin: $layout-gap-y $layout-gap-x;
    background-color: $button-norm-bg-color;
    color: $button-norm-text-color;
    height: $button-height;
    line-height: $button-height;
    overflow: visible;
    font-size: $button-font-size;
    text-align: center;
    padding: $button-padding-y $button-padding-x;
    border: $button-border-width solid $button-norm-border-color;
    border-radius: $button-border-radius;
    position: relative;

    .char-main {
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 50%;
      transform-origin: center;
      transform: translate(-50%, -50%) scaleX(.8);
    }
  }
  .inner:hover {
    background-color: $button-hover-bg-color;
    color: $button-hover-text-color;
    border-color: $button-hover-border-color;
  }
  .inner:active {
    background-color: $button-click-bg-color;
    color: $button-click-text-color;
    border-color: $button-click-border-color;
  }
}
</style>
