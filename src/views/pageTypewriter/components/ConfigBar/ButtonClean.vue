<script setup lang="ts">
import { useTextInput } from "../../hooks";
import ButtonBase from "./ButtonBase.vue";
import SvgTrash from "./assets/trash.svg";

const { clear } = useTextInput();
</script>

<template>
  <ButtonBase :icon-src="SvgTrash" @click="clear()"></ButtonBase>
</template>
