<script setup lang="ts">
import { computed } from "vue";
import { ConfigConvertDirectionEnum } from "@/shared";
import { useConfig, useFontSelector } from "../../../hooks";
import variables from "./variables.module.scss";
import SvgIcon from "@/components/SvgIcon.vue";
import ButtonBasic from "@/components/ButtonBasic.vue";
import ImgContentArrow from "../../../assets/convert-arrow.svg";

const { config } = useConfig();
const { selectorVisible, toggleSelector } = useFontSelector();

const directionClass = computed(() => {
  return {
    [config.value.convertDirection]: true,
  };
});

const selectorArrowClass = computed(() => {
  return {
    "dropdown-arrow": true,
    "dropdown-expanded": selectorVisible.value,
  };
});

const switchConvertDirection = () => {
  if (config.value.convertDirection === ConfigConvertDirectionEnum.FROM_ENG) {
    config.value.convertDirection = ConfigConvertDirectionEnum.TO_ENG;
  } else {
    config.value.convertDirection = ConfigConvertDirectionEnum.FROM_ENG;
  }
};
</script>

<template>
  <div class="switcher-wrapper flex" :class="{ ...directionClass }">
    <ButtonBasic
      class="font-select-btn flex-auto"
      :class="{ ...selectorArrowClass }"
      size="large"
      type="primary"
      @click="toggleSelector()"
    >
      {{ config.font.abbr || config.font.label }}
    </ButtonBasic>
    <SvgIcon
      class="arrow flex-none cursor-pointer"
      :icon-src="ImgContentArrow"
      :color="variables.arrow_color"
      @click="switchConvertDirection()"
    />
    <ButtonBasic class="flex-auto" size="large" :clickable="false">
      英语
    </ButtonBasic>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/vars/color.scss" as *;
@use "../assets/dropdown-arrow.scss";
@include dropdown-arrow.arrow;

.switcher-wrapper {
  column-gap: 1.72rem;
  justify-content: center;

  &.from-eng {
    flex-direction: row-reverse;
  }
  &.to-eng {
    flex-direction: row;
  }

  .font-select-btn {
    @include dropdown-arrow.extend(0.36rem, $color-white);
  }

  .arrow {
    width: 2.96rem;
  }
}
</style>
