<template>
  <el-dropdown placement="top-start" trigger="click">
    <slot></slot>
    <template #dropdown>
      <slot name="dropdown"></slot>
    </template>
  </el-dropdown>
</template>
