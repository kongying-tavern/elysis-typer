<script setup lang="ts">
import { ConfigConvertDirectionEnum } from "@/shared";
import { useConfig } from "../../../hooks";
import variables from "./variables.module.scss";
import SvgIcon from "@/components/SvgIcon.vue";
import ButtonBasic from "@/components/ButtonBasic.vue";
import ImgContentArrow from "../../../assets/convert-arrow.svg";

const { config } = useConfig();

const switchConvertDirection = () => {
  if (config.value.convertDirection === ConfigConvertDirectionEnum.FROM_ENG) {
    config.value.convertDirection = ConfigConvertDirectionEnum.TO_ENG;
  } else {
    config.value.convertDirection = ConfigConvertDirectionEnum.FROM_ENG;
  }
};
</script>

<template>
  <div
    class="switcher-wrapper flex"
    :class="{
      [config.convertDirection]: true,
    }"
  >
    <ButtonBasic class="flex-1" size="large" type="primary">
      {{ config.font.label || config.font.abbr }}
    </ButtonBasic>
    <SvgIcon
      class="arrow flex-none cursor-pointer"
      :icon-src="ImgContentArrow"
      :color="variables.color_arrow"
      @click="switchConvertDirection()"
    />
    <ButtonBasic class="flex-1" size="large" :clickable="false">
      英语
    </ButtonBasic>
  </div>
</template>

<style scoped lang="scss">
.switcher-wrapper {
  column-gap: 1.72rem;
  justify-content: center;

  &.from-eng {
    flex-direction: row-reverse;
  }
  &.to-eng {
    flex-direction: row;
  }

  .arrow {
    width: 2.96rem;
  }
}
</style>
