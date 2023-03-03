<script setup lang="ts">
import FontPicker from "./components/FontPicker.vue";
import TextPreview from "./components/TextPreview.vue";
import TextInput from "./components/TextInput.vue";
</script>

<template>
  <main class="fixed top-0 bottom-0 left-0 right-0 flex flex-row">
    <div class="flex-1">
      <FontPicker></FontPicker>
    </div>
    <div class="flex-3 flex flex-col">
      <div class="flex-auto">
        <TextPreview></TextPreview>
      </div>
      <div class="flex-none">
        <TextInput></TextInput>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/style/font.scss";
@include font.fonts(true);
</style>
