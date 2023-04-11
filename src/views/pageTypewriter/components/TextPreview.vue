<script setup lang="ts">
import { useFontPicker, useTextInput } from "../hooks";

const { font } = useFontPicker();

const { text } = useTextInput();
</script>

<template>
  <div class="text-preview" :class="font">
    {{ text }}
  </div>
</template>

<style scoped lang="scss">
.text-preview {
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  border: 1px solid #ddd;
}
</style>
