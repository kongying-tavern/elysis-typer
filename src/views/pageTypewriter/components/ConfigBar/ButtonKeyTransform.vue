<script setup lang="ts">
import { useConfig } from "../../hooks";
import ButtonBase from "./ButtonBase.vue";

const { config } = useConfig();

const toggle = () => {
  config.value.keyTransform = !config.value.keyTransform;
};
</script>

<template>
  <ButtonBase
    icon-src="./assets/transform-char.svg"
    :active="config.keyTransform"
    @click="toggle()"
  >
  </ButtonBase>
</template>
