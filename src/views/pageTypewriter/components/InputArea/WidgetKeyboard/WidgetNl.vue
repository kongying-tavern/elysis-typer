<script setup lang="ts">
import { withDefaults } from "vue";
import type { KeyboardNlOption } from "@/shared";

interface Props {
  options?: KeyboardNlOption;
}

withDefaults(defineProps<Props>(), {
  options: () => ({}),
});
</script>

<template>
  <div class="keyboard-widget keyboard-nl clear-both"></div>
</template>
