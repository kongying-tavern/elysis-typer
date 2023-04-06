<script setup lang="ts">
import { withDefaults } from "vue";
import type { KeyboardKeyOption } from "@/shared";
import { useTextInput } from "../../hooks";

interface Props {
  options?: KeyboardKeyOption;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({
    keyTextMain: "",
    keyCode: -1,
  }),
});

const { append } = useTextInput();

const keyPress = () => {
  append(props.options?.keyTextMain as string);
};
</script>

<template>
  <div
    class="keyboard-widget keyboard-key cursor-pointer float-left"
    :style="{ width: options.width }"
    @click="keyPress()"
  >
    <div :style="{ width: options.width }">
      {{ options.keyTextMain }}
    </div>
  </div>
</template>
