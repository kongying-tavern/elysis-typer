<script setup lang="ts">
import WidgetInput from "./InputArea/WidgetInput.vue";
import WidgetKeyboard from "./InputArea/WidgetKeyboard.vue";
import { useConfig } from "../hooks";

const { config } = useConfig();
</script>

<template>
  <div>
    <WidgetInput v-if="config.inputMethod === 'text'"></WidgetInput>
    <WidgetKeyboard
      v-else-if="config.inputMethod === 'keyboard'"
    ></WidgetKeyboard>
  </div>
</template>
