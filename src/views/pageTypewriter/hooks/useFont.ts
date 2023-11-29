import { computed } from "vue";
import type { FontGroupNode, FontNode } from "@/shared";
import ImgLogoGenshin from "../assets/logo-genshin.svg";
import ImgLogoStarrail from "../assets/logo-starrail.svg";
import ImgLogoZzz from "../assets/logo-zzz.svg";
import FontGsTevat from "@/assets/font/genshin-impact/teyvat/TeyvatNeue-Regular-1.002.otf";
import FontGsKhaenriah from "@/assets/font/genshin-impact/khaenriah/KhaenriahNeue-Regular-2.000.otf";
import FontGsKhaenriahChasm from "@/assets/font/genshin-impact/khaenriah/KhaenriahNeue-Chasm-2.000.otf";
import FontGsInazuma from "@/assets/font/genshin-impact/inazuma/InazumaNeue-Regular-1.000.otf";
import FontGsSumeru from "@/assets/font/genshin-impact/sumeru/SumeruNeue-Regular-0.007.otf";
import FontGsDeshret from "@/assets/font/genshin-impact/deshret/DeshretNeue-Regular-1.002.otf";
import FontSrStarrail from "@/assets/font/honkai-star-rail/star-rail/StarRailNeue-Regular-0.200.otf";
import FontSrLuofu from "@/assets/font/honkai-star-rail/luofu/LuofuNeue-Regular-0.100.otf";
import FontZzzA from "@/assets/font/zenless-zone-zero/ZZZNeue-VariantA-0.003.otf";
import FontZzzB from "@/assets/font/zenless-zone-zero/ZZZNeue-VariantB-0.003.otf";

const fontOptions: FontGroupNode[] = [
  {
    id: "genshin",
    label: "原神",
    icon: ImgLogoGenshin,
    children: [
      {
        tag: "gs-teyvat",
        label: "提瓦特文字",
        abbr: "提瓦特文",
        url: FontGsTevat,
      },
      {
        tag: "gs-khaenriah",
        label: "坎瑞亚文字",
        abbr: "坎瑞亚文",
        url: FontGsKhaenriah,
      },
      {
        tag: "gs-khaenriah-chasm",
        label: "坎瑞亚文字 - 层岩巨渊变体",
        abbr: "坎瑞亚层岩变体",
        url: FontGsKhaenriahChasm,
      },
      {
        tag: "gs-inazuma",
        label: "稻妻文字",
        abbr: "稻妻文",
        url: FontGsInazuma,
      },
      {
        tag: "gs-sumeru",
        label: "须弥文字",
        abbr: "须弥文",
        url: FontGsSumeru,
      },
      {
        tag: "gs-deshret",
        label: "赤冠文字",
        abbr: "赤冠文",
        url: FontGsDeshret,
      },
    ],
  },
  {
    id: "starrail",
    label: "崩坏·星穹铁道",
    icon: ImgLogoStarrail,
    children: [
      {
        tag: "sr-starrail",
        label: "星穹铁道文字",
        url: FontSrStarrail,
        meta: { allowCapsLock: true },
      },
      {
        tag: "sr-luofu",
        label: "罗浮文字",
        url: FontSrLuofu,
        meta: { allowCapsLock: true },
      },
    ],
  },
  {
    id: "zzz",
    label: "绝区零",
    icon: ImgLogoZzz,
    children: [
      { tag: "zzz-a", label: "绝区零变体一", url: FontZzzA },
      { tag: "zzz-b", label: "绝区零变体二", url: FontZzzB },
    ],
  },
];

const fontDefaultOption: FontNode = fontOptions[0].children[0];

const fontGroupMap = computed(() => {
  const map: { [key: string]: string } = {};
  for (const fontGroup of fontOptions) {
    const groupId: string = fontGroup.id || "";
    for (const fontItem of fontGroup.children) {
      const fontTag = fontItem.tag;
      map[fontTag] = groupId;
    }
  }
  return map;
});

const findFontGroup = (fontTag: string): string => {
  return fontGroupMap.value[fontTag] || "";
};

const installFonts = async () => {
  for (const fontGroup of fontOptions) {
    for (const font of fontGroup.children) {
      const fontFace: FontFace = new FontFace(font.tag, `url(${font.url})`);
      await fontFace.load();
      document.fonts.add(fontFace);
    }
  }
};

export const useFont = () => {
  return {
    fontOptions,
    fontDefaultOption,
    findFontGroup,
    installFonts,
  };
};
