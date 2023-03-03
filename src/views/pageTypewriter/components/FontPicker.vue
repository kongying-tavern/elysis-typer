<script setup lang="ts">
import type { TreeNodeData } from "element-plus/es/components/tree/src/tree.type";
import type Node from "element-plus/es/components/tree/src/model/node";
import { useFontPicker } from "../hooks";

const { font, fontKey, fontProps, fontTree, update } = useFontPicker();

const fontExpandKeys: string[] = ["genshin", "starrail", "zzz"];

const fontSwitcher = (data: TreeNodeData, node: Node): void => {
  if (node.isLeaf) {
    update(data.id);
  }
};
</script>

<template>
  <el-tree
    :data="fontTree"
    :node-key="fontKey"
    :props="fontProps"
    :default-expanded-keys="fontExpandKeys"
    @current-change="fontSwitcher"
  >
    <template #default="{ node }">
      <span :class="{ active: node.key === font }">{{ node.label }}</span>
    </template>
  </el-tree>
</template>

<style lang="scss" scoped>
.active {
  color: #f17bd8;
  font-weight: bold;
}
</style>
