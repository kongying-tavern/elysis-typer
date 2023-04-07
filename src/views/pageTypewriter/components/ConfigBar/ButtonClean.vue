<script setup lang="ts">
import { useTextInput } from "../../hooks";
import ButtonBase from "./ButtonBase.vue";

const { clear } = useTextInput();
</script>

<template>
  <ButtonBase icon-src="./assets/trash.svg" @click="clear()"></ButtonBase>
</template>
