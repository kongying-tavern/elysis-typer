<script setup lang="ts">
import TransformSwitcher from "./components/Portrait/TransformSwitcher/TransformSwitcher.vue";
import TextPreview from "./components/TextPreview.vue";
import TextInput from "./components/TextInput.vue";
import KeyboardInput from "./components/KeyboardInput.vue";
import ActionBar from "./components/ActionBar.vue";
</script>

<template>
  <main class="flex flex-col fixed top-0 bottom-0 left-0 right-0 p-3 space-y-3">
    <TransformSwitcher class="flex-none"></TransformSwitcher>
    <TextPreview class="flex-auto"></TextPreview>
    <TextInput class="flex-none"></TextInput>
    <KeyboardInput class="flex-none"></KeyboardInput>
    <ActionBar class="flex-none"></ActionBar>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/effects/fonts.scss";
@include fonts.fonts(true);
</style>
