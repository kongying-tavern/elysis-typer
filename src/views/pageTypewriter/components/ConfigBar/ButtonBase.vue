<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  iconSrc: string;
}>();

const iconUrl = computed(() => new URL(props.iconSrc, import.meta.url).href);
</script>

<template>
  <div class="cursor-pointer config-button">
    <img class="icon" :src="iconUrl" />
  </div>
</template>

<style scoped lang="scss">
.config-button {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  position: relative;

  &:hover {
    background-color: #e7e8e9;
  }
  &:active {
    background-color: #ddd;
  }

  .icon {
    width: 75%;
    height: 75%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
