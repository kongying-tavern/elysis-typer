import { FontItemOption, FontGroupOption } from "./types";

export const fontDownloadConfig: FontItemOption[] = [
  // Genshin Impact
  {
    fontTag: "gs-teyvat",
    fontName: "提瓦特文字",
    fontAbbr: "提瓦特文",
    releasePattern: [/Teyvat-/i],
    assetPattern: [/\.zip$/i],
  },
  {
    fontTag: "gs-khaenriah",
    fontName: "坎瑞亚文字",
    fontAbbr: "坎瑞亚文",
    releasePattern: [],
    assetPattern: [/\.zip$/i],
  },
  {
    fontTag: "gs-khaenriah",
    fontName: "坎瑞亚文字 - 层岩巨渊变体",
    fontAbbr: "坎瑞亚层岩变体",
    releasePattern: [],
    assetPattern: [/\.zip$/i],
  },
  {
    fontTag: "gs-inazuma",
    fontName: "稻妻文字",
    fontAbbr: "稻妻文",
    releasePattern: [],
    assetPattern: [/\.zip$/i],
  },
  {
    fontTag: "gs-sumeru",
    fontName: "须弥文字",
    fontAbbr: "须弥文",
    releasePattern: [],
    assetPattern: [/\.zip$/i],
  },
  {
    fontTag: "gs-deshret",
    fontName: "赤冠文字",
    fontAbbr: "赤冠文",
    releasePattern: [],
    assetPattern: [/\.zip$/i],
  },
  {
    fontTag: "gs-ainee",
    fontName: "枫丹文字",
    fontAbbr: "枫丹文",
    releasePattern: [/^fonte?-ainee-/i],
    assetPattern: [/\.zip$/i],
  },
  // Star Rail
  {
    fontTag: "sr-starrail",
    fontName: "星穹铁道文字",
    fontMeta: { allowCapsLock: true },
    releasePattern: [/^star-rail-/i],
    assetPattern: [/\.zip$/i],
  },
  {
    fontTag: "sr-luofu",
    fontName: "罗浮文字",
    fontMeta: { allowCapsLock: true },
    releasePattern: [/^xianzhou-/i],
    assetPattern: [/\.zip$/i],
  },
  // Zenless Zone Zero
  {
    fontTag: "zzz-a",
    fontName: "绝区零变体一",
    releasePattern: [],
    assetPattern: [/\.zip$/i],
  },
  {
    fontTag: "zzz-b",
    fontName: "绝区零变体二",
    releasePattern: [],
    assetPattern: [/\.zip$/i],
  },
];

export const fontGroupConfig: FontGroupOption[] = [
  {
    fontTagPattern: [/^gs-/i],
    groupKey: "genshin",
    groupName: "原神",
    groupLogo: "logo-genshin.svg",
  },
  {
    fontTagPattern: [/^sr-/i],
    groupKey: "starrail",
    groupName: "星穹铁道文字",
    groupLogo: "logo-starrail.svg",
  },
  {
    fontTagPattern: [/^zzz-/i],
    groupKey: "zzz",
    groupName: "绝区零",
    groupLogo: "logo-zzz.svg",
  },
];
