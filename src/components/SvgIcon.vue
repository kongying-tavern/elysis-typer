<script setup lang="ts">
defineProps<{
  iconSrc: string;
}>();
</script>

<template>
  <img :src="iconSrc" />
</template>
