<script setup lang="ts">
import { Key } from "ts-keycode-enum";
import type { KeyboardOption } from "@/shared";
import WidgetRow from "./KeyboardInput/WidgetRow.vue";
import WidgetKey from "./KeyboardInput/WidgetKey.vue";
import WidgetSpan from "./KeyboardInput/WidgetSpan.vue";

const keyboardLayout: KeyboardOption = {
  layout: [
    {
      type: "row",
      children: [
        {
          type: "key",
          keyCode: Key.Q,
          keyTextMain: "Q",
        },
        {
          type: "key",
          keyCode: Key.W,
          keyTextMain: "W",
        },
        {
          type: "key",
          keyCode: Key.E,
          keyTextMain: "E",
        },
        {
          type: "key",
          keyCode: Key.R,
          keyTextMain: "R",
        },
        {
          type: "key",
          keyCode: Key.T,
          keyTextMain: "T",
        },
        {
          type: "key",
          keyCode: Key.Y,
          keyTextMain: "Y",
        },
        {
          type: "key",
          keyCode: Key.U,
          keyTextMain: "U",
        },
        {
          type: "key",
          keyCode: Key.I,
          keyTextMain: "I",
        },
        {
          type: "key",
          keyCode: Key.O,
          keyTextMain: "O",
        },
        {
          type: "key",
          keyCode: Key.P,
          keyTextMain: "P",
        },
      ],
    },
    {
      type: "row",
      children: [
        {
          type: "span",
          width: 0.5,
        },
        {
          type: "key",
          keyCode: Key.A,
          keyTextMain: "A",
        },
        {
          type: "key",
          keyCode: Key.S,
          keyTextMain: "S",
        },
        {
          type: "key",
          keyCode: Key.D,
          keyTextMain: "D",
        },
        {
          type: "key",
          keyCode: Key.F,
          keyTextMain: "F",
        },
        {
          type: "key",
          keyCode: Key.G,
          keyTextMain: "G",
        },
        {
          type: "key",
          keyCode: Key.H,
          keyTextMain: "H",
        },
        {
          type: "key",
          keyCode: Key.J,
          keyTextMain: "J",
        },
        {
          type: "key",
          keyCode: Key.K,
          keyTextMain: "K",
        },
        {
          type: "key",
          keyCode: Key.L,
          keyTextMain: "L",
        },
        {
          type: "span",
          width: 0.5,
        },
      ],
    },
    {
      type: "row",
      children: [
        {
          type: "span",
          width: 1,
        },
        {
          type: "key",
          keyCode: Key.Z,
          keyTextMain: "Z",
        },
        {
          type: "key",
          keyCode: Key.X,
          keyTextMain: "X",
        },
        {
          type: "key",
          keyCode: Key.C,
          keyTextMain: "C",
        },
        {
          type: "key",
          keyCode: Key.V,
          keyTextMain: "V",
        },
        {
          type: "key",
          keyCode: Key.B,
          keyTextMain: "B",
        },
        {
          type: "key",
          keyCode: Key.N,
          keyTextMain: "N",
        },
        {
          type: "key",
          keyCode: Key.M,
          keyTextMain: "M",
        },
        {
          type: "span",
          width: 2,
        },
      ],
    },
    {
      type: "row",
      children: [
        {
          type: "span",
          width: 1,
        },
        {
          type: "key",
          width: 7,
          keyCode: Key.Space,
          keyTextMain: " ",
        },
        {
          type: "span",
          width: 2,
        },
      ],
    },
  ],
};
</script>

<template>
  <div>
    <div class="keyboard-layout">
      <template v-for="(options, index) in keyboardLayout.layout" :key="index">
        <WidgetRow v-if="options.type === 'row'" :options="options" />
        <WidgetKey v-else-if="options.type === 'key'" :options="options" />
        <WidgetSpan v-else-if="options.type === 'span'" :options="options" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./KeyboardInput/assets/vars.scss";

.keyboard-layout {
  max-width: $layout-max-width;
  margin: 0 auto;
  :deep(*) {
    box-sizing: content-box;
  }
}
</style>
