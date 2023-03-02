<script setup lang="ts">
import type {
  TreeNode,
  TreeNodeData,
} from "element-plus/es/components/tree-v2/src/types";
import { useFontPicker } from "../hooks";

const { fontVariants, fontProps, update } = useFontPicker();

const fontExpandKeys: string[] = ["genshin", "starrail", "zzz"];

const fontSwitcher = (data: TreeNodeData, node: TreeNode): void => {
  if (node.isLeaf) {
    update(data.id);
  }
};
</script>

<template>
  <el-tree-v2
    :data="fontVariants"
    :props="fontProps"
    :default-expanded-keys="fontExpandKeys"
    :highlight-current="true"
    @current-change="fontSwitcher"
  >
  </el-tree-v2>
</template>
