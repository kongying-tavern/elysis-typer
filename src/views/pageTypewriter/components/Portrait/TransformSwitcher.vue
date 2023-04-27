<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon.vue";
import ButtonBasic from "@/components/ButtonBasic.vue";
import { useConfig } from "../../hooks";
import ImgContentArrow from "../../assets/convert-arrow.svg";

const { config } = useConfig();
</script>

<template>
  <div
    class="switcher-wrapper flex"
    :class="{
      [config.convertDirection]: true,
    }"
  >
    <ButtonBasic class="flex-1" size="large">
      {{ config.font.label || config.font.abbr }}
    </ButtonBasic>
    <SvgIcon class="arrow flex-none" :icon-src="ImgContentArrow"></SvgIcon>
    <ButtonBasic class="flex-1" size="large">英语</ButtonBasic>
  </div>
</template>

<style scoped lang="scss">
.switcher-wrapper {
  column-gap: 4.3rem;

  &.from-eng {
    flex-direction: row-reverse;
  }
  &.to-eng {
    flex-direction: row;
  }

  .arrow {
    width: 2.96rem;
    :deep(svg *) {
      fill: red;
    }
  }
}
</style>
