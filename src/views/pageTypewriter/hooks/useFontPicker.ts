import type { TreeOptionProps } from "element-plus/es/components/tree-v2/src/types";

interface Tree {
  id: string;
  label: string;
  children?: Tree[];
}

const fontProps: TreeOptionProps = {
  value: "id",
  label: "label",
  children: "children",
};

const fontTree: Tree[] = [
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

const font = ref("font-teyvat-regular");

export const useFontPicker = () => {
  const update = (fontKey: string) => {
    font.value = fontKey;
  };

  return { fontPickerProps: fontProps, fontVariants: fontTree, font, update };
};
