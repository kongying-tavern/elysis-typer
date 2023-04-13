<script setup lang="ts">
const popperOptions = {
  modifiers: [
    {
      enabled: true,
      phase: "write",
      fn({ state }) {
        const { arrow } = state.elements;
        arrow.remove();
      },
    },
  ],
};
</script>

<template>
  <el-dropdown
    placement="top-start"
    trigger="click"
    :popper-options="popperOptions"
  >
    <slot></slot>
    <template #dropdown>
      <slot name="dropdown"></slot>
    </template>
  </el-dropdown>
</template>
