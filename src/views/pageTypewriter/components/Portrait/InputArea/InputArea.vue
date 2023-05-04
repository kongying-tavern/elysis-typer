<script setup lang="ts">
import { computed } from "vue";
import { ConfigConvertDirectionEnum } from "@/shared";
import CardBasic from "@/components/CardBasic.vue";
import TextAreaBasic from "@/components/TextAreaBasic.vue";
import { useConfig, useTextInput } from "../../../hooks";

const { config } = useConfig();
const { text } = useTextInput();

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
  <CardBasic>
    <TextAreaBasic
      v-model="text"
      class="textarea"
      :class="{ ...fontClass }"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="输入内容"
    >
      {{ text }}
    </TextAreaBasic>
  </CardBasic>
</template>
