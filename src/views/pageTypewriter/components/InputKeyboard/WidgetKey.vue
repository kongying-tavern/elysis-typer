<script setup lang="ts">
import { withDefaults } from "vue";
import type { KeyboardKeyOption } from "@/shared";

interface Props {
  options?: KeyboardKeyOption;
}

withDefaults(defineProps<Props>(), {
  options: () => ({
    keyTextMain: "",
    keyCode: -1,
  }),
});
</script>

<template>
  <div
    class="keyboard-widget keyboard-key cursor-pointer float-left"
    :style="{ width: options.width }"
  >
    <div :style="{ width: options.width }">
      {{ options.keyTextMain }}
    </div>
  </div>
</template>
