import type { TreeOptionProps } from "element-plus/es/components/tree/src/tree.type";

interface Tree {
  id: string;
  label: string;
  children?: Tree[];
}

const font = ref("font-teyvat-regular");

const fontKey: string = "id";

const fontProps: TreeOptionProps = {
  label: "label",
  children: "children",
};

const fontTree: Tree[] = [
  {
    id: "genshin",
    label: "原神",
    children: [
      { id: "font-teyvat-regular", label: "提瓦特文字" },
      { id: "font-khaenriah-regular", label: "坎瑞亚文字" },
      { id: "font-khaenriah-chasm", label: "坎瑞亚文字 - 层岩巨渊变体" },
      { id: "font-inazuma-regular", label: "稻妻文字" },
      { id: "font-sumeru-regular", label: "须弥文字" },
      { id: "font-deshret-regular", label: "赤冠文字" },
    ],
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

export const useFontPicker = () => {
  const update = (fontKey: string) => {
    font.value = fontKey;
  };

  return { font, fontKey, fontProps, fontTree, update };
};
