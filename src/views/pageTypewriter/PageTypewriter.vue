<script setup lang="ts">
import { useFont } from "./hooks";
import PortraitLayout from "./components/Portrait/PortraitLayout/PortraitLayout.vue";

const { installFonts } = useFont();

installFonts();
</script>

<template>
  <PortraitLayout />
</template>
