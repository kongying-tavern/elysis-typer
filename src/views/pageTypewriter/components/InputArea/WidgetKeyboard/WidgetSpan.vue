<script setup lang="ts">
import { withDefaults } from "vue";
import type { KeyboardSpanOption } from "@/shared";

interface Props {
  options?: KeyboardSpanOption;
}

withDefaults(defineProps<Props>(), {
  options: () => ({
    width: 0,
  }),
});
</script>

<template>
  <div
    class="keyboard-widget keyboard-span float-left"
    :style="{ width: options.width }"
  >
    &nbsp;
  </div>
</template>
