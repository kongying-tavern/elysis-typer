<script setup lang="ts">
import TransformSwitcher from "./components/Portrait/TransformSwitcher/TransformSwitcher.vue";
import InputArea from "./components/Portrait/InputArea/InputArea.vue";
import PreviewArea from "./components/Portrait/PreviewArea/PreviewArea.vue";

import KeyboardInput from "./components/KeyboardInput.vue";
import ActionBar from "./components/ActionBar.vue";
</script>

<template>
  <main class="main-container flex flex-col fixed inset-0 gap-y-3 px-5 py-4">
    <TransformSwitcher class="flex-none mb-3" />
    <InputArea class="flex-none" />
    <PreviewArea class="flex-auto" />

    <KeyboardInput class="flex-none" />
    <ActionBar class="flex-none" />
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
