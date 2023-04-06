<script setup lang="ts">
import FontPicker from "./components/FontPicker.vue";
import TextPreview from "./components/TextPreview.vue";
import TextInput from "./components/TextInput.vue";
import InputKeyboard from "./components/InputKeyboard.vue";
</script>

<template>
  <main class="flex flex-row fixed top-0 bottom-0 left-0 right-0">
    <div class="flex-1 p-3">
      <FontPicker></FontPicker>
    </div>
    <div class="flex flex-col flex-3 p-3 pl-0 space-y-3">
      <TextPreview class="flex-auto"></TextPreview>
      <div class="flex flex-row flex-none">
        <TextInput class="flex-auto"></TextInput>
        <InputKeyboard class="flex-none"></InputKeyboard>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/style/font.scss";
@include font.fonts(true);
</style>
