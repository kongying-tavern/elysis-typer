<script setup lang="ts">
import FontPicker from "./components/FontPicker/FontPicker.vue";
</script>

<template>
  <main class="fixed top-0 bottom-0 left-0 right-0 flex flex-row">
    <div class="flex-1">
      <FontPicker></FontPicker>
    </div>
    <div class="flex-3 flex flex-col">
      <div class="flex-1" style="background-color: orange">text-preview</div>
      <div class="flex-1" style="background-color: green">text-input</div>
    </div>
    <div class="flex-2">character-picker</div>
  </main>
</template>
