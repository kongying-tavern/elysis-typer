<script setup lang="ts">
import { useTextInput } from "../hooks";

const { text } = useTextInput();
</script>

<template>
  <el-input
    v-model="text"
    class="text-input"
    type="textarea"
    :rows="12"
    :autofocus="true"
    resize="none"
    placeholder="请输入文本内容…"
  >
  </el-input>
</template>

<style lang="scss" scoped>
.text-input {
  font-size: 1.2rem;
}
</style>
