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
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateX(100vw);
  }
}
</style>
