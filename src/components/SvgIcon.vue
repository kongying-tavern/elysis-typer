<script setup lang="ts">
interface Props {
  iconSrc: string;
  color?: string;
}

withDefaults(defineProps<Props>(), {
  color: "#000",
});
</script>

<template>
  <div class="svg-icon">
    <img
      :src="iconSrc"
      :style="{
        filter: `drop-shadow(-100vw 0px 0px ${color})`,
      }"
    />
  </div>
</template>

<style scoped lang="scss">
.svg-icon {
  display: inline-block;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: translateX(100vw);
  }
}
</style>
