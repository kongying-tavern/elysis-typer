<script setup lang="ts">
import { withDefaults } from "vue";
import type { KeyboardRowOption } from "@/shared";
import WidgetKey from "./WidgetKey.vue";
import WidgetSpan from "./WidgetSpan.vue";

interface Props {
  options: KeyboardRowOption;
}

withDefaults(defineProps<Props>(), {
  options: () => ({
    type: "row",
    children: [],
  }),
});
</script>

<template>
  <div class="keyboard-component keyboard-layout keyboard-row flex flex-row">
    <template v-for="(widgetOption, index) in options.children" :key="index">
      <WidgetKey v-if="widgetOption.type === 'key'" :options="widgetOption">
      </WidgetKey>
      <WidgetSpan v-if="widgetOption.type === 'span'" :options="widgetOption">
      </WidgetSpan>
    </template>
  </div>
</template>
