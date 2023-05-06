<script setup lang="ts">
import { useConfig } from "../../hooks";
import ButtonBase from "./ButtonBase.vue";
import ImgTransformChar from "./assets/transform-char.svg";

const { config } = useConfig();

const toggle = () => {
  config.value.keyTransform = !config.value.keyTransform;
};
</script>

<template>
  <ButtonBase
    :icon-src="ImgTransformChar"
    :active="config.keyTransform"
    @click="toggle()"
  />
</template>
