<script setup lang="ts">
import { useFont } from "./hooks";
import TransformSwitcher from "./components/Portrait/TransformSwitcher/TransformSwitcher.vue";
import FontSelector from "./components/Portrait/FontSelector/FontSelector.vue";
import InputArea from "./components/Portrait/InputArea/InputArea.vue";
import PreviewArea from "./components/Portrait/PreviewArea/PreviewArea.vue";
import KeyboardLayout from "./components/Portrait/KeyboardLayout/KeyboardLayout.vue";
import ActionBar from "./components/Portrait/ActionBar/ActionBar.vue";

const { installFonts } = useFont();

installFonts();
</script>

<template>
  <main class="main-container flex flex-col fixed inset-0 gap-y-3 px-5 py-4">
    <TransformSwitcher class="flex-none" />
    <FontSelector class="flex-none" />
    <InputArea class="flex-none" />
    <PreviewArea class="flex-auto" />
    <KeyboardLayout class="flex-none" />
    <ActionBar class="flex-none" />
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/vars/color.scss" as *;

.main-container {
  background-color: $color-bg;
}
</style>
