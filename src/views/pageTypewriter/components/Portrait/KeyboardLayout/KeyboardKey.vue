<script setup lang="ts">
import _ from "lodash";
import { ref, computed } from "vue";
import { useMousePressed } from "@vueuse/core";
import type { MaybeElementRef } from "@vueuse/core";
import { ConfigConvertDirectionEnum } from "@/shared";
import type { KeyboardKeyOption } from "@/shared";
import { getThemeColor } from "@/assets/effects/theme";
import { useConfig, useTextInput } from "../../../hooks";
import varColor from "./color.module.scss";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

const wrapperRef = ref<HTMLDivElement | null>(null);

const props = defineProps<{
  options: KeyboardKeyOption;
}>();

const { config } = useConfig();
const { append } = useTextInput();

const widgetOptions = computed(() => {
  let defaultOptions: KeyboardKeyOption = {
    type: "key",
    keyCode: -1,
    input: undefined,
    displayMode: [],
  };
  return _.defaults({}, props.options, defaultOptions) as KeyboardKeyOption;
});

const { pressed: isActive } = useMousePressed({
  target: wrapperRef as MaybeElementRef,
  drag: false,
});

const activeClass = computed(() => {
  return {
    active: isActive.value,
  };
});

const fontStyle = computed(() => {
  if (config.value.convertDirection === ConfigConvertDirectionEnum.TO_ENG) {
    return {
      fontFamily: config.value.font.tag,
    };
  }
  return {};
});

const layoutStyle = computed(() => {
  return {
    gridArea: widgetOptions.value.area,
  };
});

const keyIconColor = computed(() =>
  isActive.value
    ? getThemeColor(varColor, "keyboard-key-icon-active-color")
    : getThemeColor(varColor, "keyboard-key-icon-default-color")
);

const keyPress = () => {
  if (widgetOptions.value.input === undefined) {
    append(widgetOptions.value.text as string);
  } else if (typeof widgetOptions.value.input === "string") {
    append(widgetOptions.value.input as string);
  } else if (typeof widgetOptions.value.input === "function") {
    widgetOptions.value.input(widgetOptions.value);
  }
};
</script>

<template>
  <div
    ref="wrapperRef"
    class="keyboard-component keyboard-widget keyboard-key cursor-pointer"
    :class="{ ...activeClass }"
    :style="{ ...fontStyle, ...layoutStyle }"
    @click="keyPress()"
  >
    <div v-if="widgetOptions.displayMode.indexOf('text') !== -1" class="text">
      {{ widgetOptions.text }}
    </div>
    <div v-if="widgetOptions.displayMode.indexOf('icon') !== -1" class="icon">
      <SvgIcon :icon-src="widgetOptions.icon!" :color="keyIconColor" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./keyboard-key.scss" as *;
</style>
