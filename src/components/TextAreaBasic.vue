<script setup lang="ts">
import { withDefaults } from "vue";
import type { InputAutoSize } from "element-plus";

interface Props {
  modelValue: string;
  rows?: number;
  autosize?: InputAutoSize;
}

withDefaults(defineProps<Props>(), {
  modelValue: "",
});

const emits = defineEmits<{
  (e: "update:modelValue", text: string): void;
}>();

const onChange = (newText: string) => {
  emits("update:modelValue", newText);
};
</script>

<template>
  <el-input
    class="textarea-wrapper scrollbar"
    :model-value="modelValue"
    :rows="rows"
    :autosize="autosize"
    type="textarea"
    @input="onChange"
  >
  </el-input>
</template>

<style scoped lang="scss">
@use "@/assets/vars/color.scss" as *;
@use "@/assets/effects/scrollbar.scss";
@include scrollbar.scrollbar;

$textarea-line-height: 1.5;
$textarea-font-size: 1.6rem;

.textarea-wrapper {
  & :deep(.el-textarea__inner) {
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    overflow: auto;
    box-shadow: none;
    resize: none;
    font-size: $textarea-font-size;
    line-height: $textarea-line-height;
    color: $color-gray-2;

    &::placeholder {
      font-size: $textarea-font-size;
      line-height: $textarea-line-height;
      color: $color-gray-3;
    }
  }
}
</style>
