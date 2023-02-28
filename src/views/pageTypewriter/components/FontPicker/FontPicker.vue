<script setup lang="ts">
import type {
  TreeNode,
  TreeNodeData,
  TreeOptionProps,
} from "element-plus/es/components/tree-v2/src/types";

const emits = defineEmits<{
  (e: "change", font: string): void;
}>();

interface Tree {
  id: string;
  label: string;
  children?: Tree[];
}

const pickerProps: TreeOptionProps = {
  value: "id",
  label: "label",
  children: "children",
};

const fontVariants: Tree[] = [
  {
    id: "genshin",
    label: "原神",
    children: [{ id: "font-teyvat-regular", label: "提瓦特文字" }],
  },
  {
    id: "starrail",
    label: "崩坏·星穹铁道",
    children: [{ id: "font-starrail-regular", label: "星穹铁道文字" }],
  },
  {
    id: "zzz",
    label: "绝区零",
    children: [
      { id: "font-zzz-a", label: "变体一" },
      { id: "font-zzz-b", label: "变体二" },
    ],
  },
];

const fontExpandKeys: string[] = ["genshin", "starrail", "zzz"];

const fontSwitcher = (data: TreeNodeData, node: TreeNode): void => {
  if (node.isLeaf) {
    emits("change", data.id);
  }
};
</script>

<template>
  <el-tree-v2
    :data="fontVariants"
    :props="pickerProps"
    :default-expanded-keys="fontExpandKeys"
    :highlight-current="true"
    @current-change="fontSwitcher"
  >
  </el-tree-v2>
</template>
