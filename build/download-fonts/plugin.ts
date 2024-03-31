import { Octokit } from "@octokit/rest";
import {
  getLatestReleaseId,
  saveLatestReleaseId,
  testRegex,
} from "./util/index";
import type {
  ReleaseRequestParam,
  ReleaseResponse,
  ReleaseResponseItem,
  ReleaseAssetResponseItem,
  PatternTester,
  FontItemOption,
  FontDownloadItem,
  FontGroupOption,
} from "./types";

const octokit: Octokit = new Octokit();

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

export const getFontAssetUrls = async (
  options: FontItemOption[],
): Promise<FontDownloadItem[]> => {
  // Step 1: Get release info
  const params: ReleaseRequestParam = {
    per_page: 1000,
    page: 0,
    owner: "SpeedyOrc-C",
    repo: "Hoyo-Glyphs",
  };
  const releases: ReleaseResponse = await octokit.repos.listReleases(params);
  const releaseData: ReleaseResponseItem[] = releases.data || [];

  // Step 2: Check latest release cache
  const latestReleaseId: number = releaseData[0]!.id!;
  const cacheReleaseId: number = getLatestReleaseId();
  if (latestReleaseId === cacheReleaseId) {
    /**
     * Cached release id is the same as current latest release id,
     * return `null` to further steps to tell there is no need to download fonts.
     */
    return [];
  }

  // Step 3: Collect release assets
  const fontDownloadList: FontDownloadItem[] = [];
  for (const option of options) {
    const releasePatterns: PatternTester[] = option.releasePattern || [];
    const assetPatterns: PatternTester[] = option.assetPattern || [];
    if (!releasePatterns || releasePatterns.length <= 0) {
      continue;
    } else if (!assetPatterns || assetPatterns.length <= 0) {
      continue;
    }

    let releaseMatched = false;
    let tagName: string = "";
    let releaseAssets: ReleaseAssetResponseItem[] = [];
    for (const releaseItem of releaseData) {
      tagName = releaseItem.tag_name;
      releaseAssets = releaseItem.assets || [];
      if (!tagName || !releaseAssets || releaseAssets.length <= 0) {
        continue;
      }
      if (testRegex(tagName, releasePatterns)) {
        releaseMatched = true;
        break;
      }
    }

    // Collect matched assets
    if (!releaseMatched) {
      continue;
    }
    const downloadUrls: string[] = [];
    for (const assetItem of releaseAssets) {
      const assetName: string = assetItem.name;
      if (testRegex(assetName, assetPatterns)) {
        const downloadUrl: string = assetItem.browser_download_url;
        downloadUrls.push(downloadUrl);
        break;
      }
    }

    if (downloadUrls.length > 0) {
      let groupConfig: FontGroupOption | undefined = undefined;
      for (const curGroupConfig of fontGroupConfig) {
        if (testRegex(option.fontTag, curGroupConfig.fontTagPattern)) {
          groupConfig = curGroupConfig;
          break;
        }
      }

      if (!groupConfig) {
        continue;
      }

      fontDownloadList.push({
        fontTag: option.fontTag,
        downloadUrls,
        group: groupConfig,
        item: option,
      });
    }
  }

  saveLatestReleaseId(latestReleaseId);

  return fontDownloadList;
};
