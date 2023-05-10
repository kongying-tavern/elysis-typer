<script setup lang="ts">
import { computed } from "vue";
import { useKeyboardLayout } from "../../../hooks";
import variables from "./variables.module.scss";
import CardBasic from "@/components/CardBasic.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import ImgKeyboard from "../../../assets/keyboard.svg";

const { keyboardVisible, toggleKeyboard } = useKeyboardLayout();

const keyboardClass = computed(() =>
  keyboardVisible.value ? { active: true } : {}
);

const keyboardColor = computed(() =>
  keyboardVisible.value
    ? variables.btn_color_active
    : variables.btn_color_default
);
</script>

<template>
  <CardBasic class="action-bar-card cursor-pointer" @click="toggleKeyboard()">
    <div class="action-bar-wrapper flex flex-row" :class="{ ...keyboardClass }">
      <SvgIcon class="icon" :color="keyboardColor" :icon-src="ImgKeyboard" />
      <i class="arrow dropdown-arrow"></i>
    </div>
  </CardBasic>
</template>

<style scoped lang="scss">
@use "@/assets/vars/color.scss" as *;
@use "../assets/dropdown-arrow.scss";
@include dropdown-arrow.arrow;

$card-padding-y: 1.4rem;
$icon-width: 3.2rem;
$arrow-gap: 0.72rem;
$arrow-color-default: $color-gray-5;
$arrow-color-active: $color-primary-1;

.action-bar-card {
  padding-top: $card-padding-y !important;
  padding-bottom: $card-padding-y !important;
}

.action-bar-wrapper {
  width: auto;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  .icon {
    width: $icon-width;
  }
  .arrow {
    font-size: 0;
    line-height: 0;
    @include dropdown-arrow.extend($arrow-gap, $arrow-color-default);
    transform: scaleY(-1);
  }

  &.active {
    .arrow {
      @include dropdown-arrow.extend($arrow-gap, $arrow-color-active);
      transform: scaleY(1);
    }
  }
}
</style>
