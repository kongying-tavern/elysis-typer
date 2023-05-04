<script setup lang="ts">
import TransformSwitcher from "./components/Portrait/TransformSwitcher/TransformSwitcher.vue";
import InputArea from "./components/Portrait/InputArea/InputArea.vue";

import TextPreview from "./components/TextPreview.vue";
import KeyboardInput from "./components/KeyboardInput.vue";
import ActionBar from "./components/ActionBar.vue";
</script>

<template>
  <main class="main-container flex flex-col fixed inset-0 gap-y-3 px-5 py-4">
    <TransformSwitcher class="flex-none mb-3"></TransformSwitcher>
    <InputArea class="flex-1"></InputArea>

    <TextPreview class="flex-auto"></TextPreview>
    <TextInput class="flex-none"></TextInput>
    <KeyboardInput class="flex-none"></KeyboardInput>
    <ActionBar class="flex-none"></ActionBar>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/vars/color.scss" as *;
@use "@/assets/effects/fonts.scss";
@include fonts.fonts(true);

.main-container {
  background-color: $color-bg;
}
</style>
