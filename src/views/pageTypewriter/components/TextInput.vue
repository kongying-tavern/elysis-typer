<script setup lang="ts">
import { useTextInput } from "../hooks";

const { text } = useTextInput();
</script>

<template>
  <div>
    <el-input
      v-model="text"
      class="text-input"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 8 }"
      :autofocus="true"
      resize="none"
      placeholder="请输入文本内容…"
    />
  </div>
</template>

<style scoped lang="scss">
.text-input {
  font-size: 1.2rem;
}
</style>
