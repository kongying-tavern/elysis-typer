<script setup lang="ts">
import { computed } from "vue";
import { ConfigConvertDirectionEnum } from "@/shared";
import { useConfig, useTextInput } from "../../../hooks";
import CardBasic from "@/components/CardBasic/CardBasic.vue";
import TextAreaBasic from "@/components/TextAreaBasic/TextAreaBasic.vue";

const { config } = useConfig();
const { text } = useTextInput();

const fontStyle = computed(() => {
  if (config.value.convertDirection === ConfigConvertDirectionEnum.FROM_ENG) {
    return {
      fontFamily: config.value.font.tag,
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
      :style="{ ...fontStyle }"
      readonly
    />
    <div class="action-wrapper flex-none"></div>
  </CardBasic>
</template>

<style scoped lang="scss">
@use "../assets/action-wrapper.scss";
@include action-wrapper.action-wrapper;
</style>
