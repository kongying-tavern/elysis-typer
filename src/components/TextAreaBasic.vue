<script setup lang="ts">
import { withDefaults } from "vue";

interface Props {
  modelValue: string;
}

withDefaults(defineProps<Props>(), {
  modelValue: "",
});

const emits = defineEmits<{
  (e: "update:modelValue", text: string): void;
}>();

const onChange = (e: Event) => {
  const newText = (e.target as HTMLTextAreaElement).value || "";
  emits("update:modelValue", newText);
};
</script>

<template>
  <textarea
    class="textarea-wrapper scrollbar"
    :value="modelValue"
    @input="onChange"
  >
  </textarea>
</template>

<style scoped lang="scss">
@use "@/assets/vars/color.scss" as *;
@use "@/assets/effects/scrollbar.scss";
@include scrollbar.scrollbar;

$textarea-line-height: 1.5rem;
$textarea-font-size: 1.4rem;

.textarea-wrapper {
  display: block;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  overflow: auto;
  resize: none;
  font-size: $textarea-font-size;
  line-height: $textarea-line-height;
  color: $color-gray-2;

  &::placeholder {
    color: $color-gray-3;
  }
}
</style>
