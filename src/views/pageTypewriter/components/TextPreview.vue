<script setup lang="ts">
import { useConfig, useTextInput } from "../hooks";

const { config } = useConfig();
const { text } = useTextInput();
</script>

<template>
  <div class="relative text-preview">
    <el-scroll>
      <div class="inner" :class="config.font">
        {{ text }}
      </div>
    </el-scroll>
  </div>
</template>

<style scoped lang="scss">
$box-padding-x: 0.2rem;
$box-padding-y: 0.2rem;

.text-preview {
  border: 1px solid #ddd;
  border-radius: 0.3rem;

  .inner {
    position: absolute;
    top: $box-padding-y;
    bottom: $box-padding-y;
    left: $box-padding-x;
    right: $box-padding-x;
    font-size: 1.2rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: auto;
  }
}
</style>
