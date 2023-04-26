import type { FontGroupNode, FontNode } from "@/shared";
import ImgLogoGenshin from "../assets/logo-genshin.svg";
import ImgLogoStarrail from "../assets/logo-starrail.svg";
import ImgLogoZzz from "../assets/logo-zzz.svg";

const fontOptions: FontGroupNode[] = [
  {
    id: "genshin",
    label: "原神",
    icon: ImgLogoGenshin,
    displayWidgets: ["icon"],
    children: [
      { tag: "font-teyvat-regular", label: "提瓦特文字", abbr: "提瓦特文" },
      { tag: "font-khaenriah-regular", label: "坎瑞亚文字", abbr: "坎瑞亚文" },
      {
        tag: "font-khaenriah-chasm",
        label: "坎瑞亚文字 - 层岩巨渊变体",
        abbr: "坎瑞亚文（层岩变体）",
      },
      { tag: "font-inazuma-regular", label: "稻妻文字", abbr: "稻妻文" },
      { tag: "font-sumeru-regular", label: "须弥文字", abbr: "须弥文" },
      { tag: "font-deshret-regular", label: "赤冠文字", abbr: "赤冠文" },
    ],
  },
  {
    id: "starrail",
    label: "崩坏·星穹铁道",
    icon: ImgLogoStarrail,
    displayWidgets: ["icon", "label"],
    children: [
      { tag: "font-starrail-regular", label: "常规" },
      { tag: "font-starrail-thin", label: "细体" },
      { tag: "font-starrail-bold", label: "粗体" },
    ],
  },
  {
    id: "zzz",
    label: "绝区零",
    icon: ImgLogoZzz,
    displayWidgets: ["icon"],
    children: [
      { tag: "font-zzz-a", label: "变体一" },
      { tag: "font-zzz-b", label: "变体二" },
    ],
  },
];

const fontDefaultOption: FontNode = {
  tag: "font-teyvat-regular",
  label: "提瓦特文字",
  abbr: "提瓦特文",
};

export const useFont = () => {
  return { fontOptions, fontDefaultOption };
};
