<script setup lang="ts">
import { Key } from "ts-keycode-enum";
import type {
  KeyboardLayoutOptions,
  KeyboardKeyOption,
  KeyboardSpanOption,
  KeyboardNlOption,
} from "@/shared";

import WidgetKey from "./InputKeyboard/WidgetKey.vue";
import WidgetSpan from "./InputKeyboard/WidgetSpan.vue";
import WidgetNl from "./InputKeyboard/WidgetNl.vue";

const keyboardLayout: KeyboardLayoutOptions = {
  framework: {},
  layout: [
    {
      type: "key",
      options: { keyTextMain: "Q", keyCode: Key.Q },
    },
    {
      type: "key",
      options: { keyTextMain: "W", keyCode: Key.W },
    },
    {
      type: "key",
      options: { keyTextMain: "E", keyCode: Key.E },
    },
    {
      type: "key",
      options: { keyTextMain: "R", keyCode: Key.R },
    },
    {
      type: "key",
      options: { keyTextMain: "T", keyCode: Key.T },
    },
    {
      type: "key",
      options: { keyTextMain: "Y", keyCode: Key.Y },
    },
    {
      type: "key",
      options: { keyTextMain: "U", keyCode: Key.U },
    },
    {
      type: "key",
      options: { keyTextMain: "I", keyCode: Key.I },
    },
    {
      type: "key",
      options: { keyTextMain: "O", keyCode: Key.O },
    },
    {
      type: "key",
      options: { keyTextMain: "P", keyCode: Key.P },
    },
    { type: "nl" },
    {
      type: "span",
      options: { width: "1.8rem" },
    },
    {
      type: "key",
      options: { keyTextMain: "A", keyCode: Key.A },
    },
    {
      type: "key",
      options: { keyTextMain: "S", keyCode: Key.S },
    },
    {
      type: "key",
      options: { keyTextMain: "D", keyCode: Key.D },
    },
    {
      type: "key",
      options: { keyTextMain: "F", keyCode: Key.F },
    },
    {
      type: "key",
      options: { keyTextMain: "G", keyCode: Key.G },
    },
    {
      type: "key",
      options: { keyTextMain: "H", keyCode: Key.H },
    },
    {
      type: "key",
      options: { keyTextMain: "J", keyCode: Key.J },
    },
    {
      type: "key",
      options: { keyTextMain: "K", keyCode: Key.K },
    },
    {
      type: "key",
      options: { keyTextMain: "L", keyCode: Key.L },
    },
    { type: "nl" },
    {
      type: "span",
      options: { width: "3.8rem" },
    },
    {
      type: "key",
      options: { keyTextMain: "Z", keyCode: Key.Z },
    },
    {
      type: "key",
      options: { keyTextMain: "X", keyCode: Key.X },
    },
    {
      type: "key",
      options: { keyTextMain: "C", keyCode: Key.C },
    },
    {
      type: "key",
      options: { keyTextMain: "V", keyCode: Key.V },
    },
    {
      type: "key",
      options: { keyTextMain: "B", keyCode: Key.B },
    },
    {
      type: "key",
      options: { keyTextMain: "N", keyCode: Key.N },
    },
    {
      type: "key",
      options: { keyTextMain: "M", keyCode: Key.M },
    },
    { type: "nl" },
    {
      type: "span",
      options: { width: "5rem" },
    },
    {
      type: "key",
      options: { keyTextMain: " ", keyCode: Key.Space, width: "21.5rem" },
    },
  ],
};
</script>

<template>
  <div class="position-relative">
    <div class="keyboard-wrapper">
      <template v-for="(widget, index) in keyboardLayout.layout" :key="index">
        <WidgetKey
          v-if="widget.type === 'key'"
          :options="widget.options as KeyboardKeyOption"
        >
        </WidgetKey>
        <WidgetSpan
          v-else-if="widget.type === 'span'"
          :options="widget.options as KeyboardSpanOption"
        >
        </WidgetSpan>
        <WidgetNl
          v-else-if="widget.type === 'nl'"
          :options="widget.options as KeyboardNlOption"
        >
        </WidgetNl>
      </template>
      <div class="clear-both"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.keyboard-wrapper {
  align-content: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 2rem;

  :deep(.keyboard-key),
  :deep(.keyboard-span) {
    display: inline-block;
    height: 2.2rem;
    line-height: 2.2rem;
    font-size: 1.2rem;
  }

  :deep(.keyboard-key) {
    border: 0.1rem solid #aaa;
    padding: 0.2 0.5rem;
    margin: 0.5rem;
    width: 2.5rem;
    text-align: center;
    border-radius: 0.3rem;
    &:hover {
      background-color: #eee;
    }
    &:active {
      background-color: #ccc;
    }
  }
}
</style>
