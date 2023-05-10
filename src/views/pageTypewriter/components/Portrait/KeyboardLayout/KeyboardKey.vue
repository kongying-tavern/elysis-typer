<script setup lang="ts">
import _ from "lodash";
import { computed } from "vue";
import { ConfigConvertDirectionEnum } from "@/shared";
import type { KeyboardKeyOption } from "@/shared";
import { useConfig, useTextInput } from "../../../hooks";
import SvgIcon from "@/components/SvgIcon.vue";

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
    class="keyboard-component keyboard-widget keyboard-key cursor-pointer"
    :style="{ ...fontStyle, ...layoutStyle }"
    @click="keyPress()"
  >
    <div v-if="widgetOptions.displayMode.indexOf('text') !== -1" class="text">
      {{ widgetOptions.text }}
    </div>
    <div v-if="widgetOptions.displayMode.indexOf('icon') !== -1" class="icon">
      <SvgIcon
        :icon-src="widgetOptions.icon!"
        :color="(widgetOptions.iconColor as string)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./layout.scss";
@include layout.keyboard-key;
</style>
