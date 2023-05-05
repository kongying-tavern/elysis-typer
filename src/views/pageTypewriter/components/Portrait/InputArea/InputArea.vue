<script setup lang="ts">
import { computed } from "vue";
import { ConfigConvertDirectionEnum } from "@/shared";
import CardBasic from "@/components/CardBasic.vue";
import TextAreaBasic from "@/components/TextAreaBasic.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import ImgClose from "../../../assets/close.svg";
import { useConfig, useTextInput } from "../../../hooks";
import variables from "./variables.module.scss";

const { config } = useConfig();
const { text, clear } = useTextInput();

const fontClass = computed(() => {
  if (config.value.convertDirection === ConfigConvertDirectionEnum.TO_ENG) {
    return {
      [config.value.font.tag]: true,
    };
  }
  return {};
});
</script>

<template>
  <CardBasic class="flex flex-row gap-x-4">
    <TextAreaBasic
      v-model="text"
      class="flex-auto"
      :class="{ ...fontClass }"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="输入内容"
    >
      {{ text }}
    </TextAreaBasic>
    <div class="action-wrapper flex-none">
      <SvgIcon
        class="action-button"
        :color="variables.color_clear_btn"
        :icon-src="ImgClose"
        @click="clear()"
      >
      </SvgIcon>
    </div>
  </CardBasic>
</template>

<style scoped lang="scss">
@use "../assets/action-wrapper.scss";
@include action-wrapper.action-wrapper;
</style>
