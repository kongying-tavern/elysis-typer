<script setup lang="ts">
import { computed } from "vue";
import { ConfigConvertDirectionEnum } from "@/shared";
import { useConfig, useTextInput } from "../../../hooks";
import variables from "./variables.module.scss";
import CardBasic from "@/components/CardBasic/CardBasic.vue";
import TextAreaBasic from "@/components/TextAreaBasic/TextAreaBasic.vue";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import ImgClose from "../../../assets/close.svg";

const { config } = useConfig();
const { text, clear } = useTextInput();

const fontStyle = computed(() => {
  if (config.value.convertDirection === ConfigConvertDirectionEnum.TO_ENG) {
    return {
      fontFamily: config.value.font.tag,
    };
  }
  return {};
});
</script>

<template>
  <CardBasic class="textarea flex flex-row gap-x-4">
    <TextAreaBasic
      v-model="text"
      class="flex-auto"
      :style="{ ...fontStyle }"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="输入内容"
    />
    <div class="action-wrapper flex-none">
      <SvgIcon
        class="action-button"
        :color="variables.clear_btn_color"
        :icon-src="ImgClose"
        @click="clear()"
      />
    </div>
  </CardBasic>
</template>

<style scoped lang="scss">
@use "@/assets/effects/theme.scss";
@use "../assets/action-wrapper.scss";
@use "./color.scss" as *;
@include action-wrapper.action-wrapper;

@include theme.themeify($colors) {
  .textarea {
    &:focus-within {
      outline: 0.1rem solid theme.t("focus-outline-color");
    }
  }
}
</style>
