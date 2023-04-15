<script setup lang="ts">
import TextPreview from "./components/TextPreview.vue";
import ConfigBar from "./components/ConfigBar.vue";
import InputArea from "./components/InputArea.vue";
</script>

<template>
  <main class="flex flex-col fixed top-0 bottom-0 left-0 right-0 p-3 space-y-3">
    <TextPreview class="flex-auto"></TextPreview>
    <InputArea class="flex-none"></InputArea>
    <ConfigBar class="flex-none"></ConfigBar>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/style/font.scss";
@include font.fonts(true);
</style>
