<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  iconSrc: string;
  color: string;
}>();

const iconStyle = computed(() => {
  return {
    maskImage: `url(${props.iconSrc})`,
    backgroundColor: props.color,
  };
});
</script>

<template>
  <div class="svg-icon" :style="{ ...iconStyle }">
    <img :src="iconSrc" />
  </div>
</template>

<style scoped lang="scss">
.svg-icon {
  display: inline-block;
  position: relative;
  overflow: hidden;
  mask-position: center;
  mask-size: 100% 100%;

  img {
    position: relative;
    width: 100%;
    height: 100%;
    visibility: hidden;
  }
}
</style>
