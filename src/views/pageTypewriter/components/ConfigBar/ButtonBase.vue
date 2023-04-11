<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";

defineProps<{
  active?: boolean;
  iconSrc: string;
}>();

const iconBase = import.meta.url;
</script>

<template>
  <div class="cursor-pointer config-button" :class="{ active: active }">
    <SvgIcon class="icon" :icon-base="iconBase" :icon-src="iconSrc"></SvgIcon>
  </div>
</template>

<style scoped lang="scss">
.config-button {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;

  &:hover {
    background-color: #e7e8e9;
  }
  &:active {
    background-color: #ddd;
  }
  &.active {
    background-color: #999;
    .icon {
      filter: drop-shadow(5rem 0 0 #fafafa);
      transform: translate(calc(-50% - 5rem), -50%);
    }
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
