<script setup lang="ts">
import { useTextInput } from "../../hooks";
import ButtonBase from "./ButtonBase.vue";
import ImgTrash from "./assets/trash.svg";

const { clear } = useTextInput();
</script>

<template>
  <ButtonBase :icon-src="ImgTrash" @click="clear()" />
</template>
