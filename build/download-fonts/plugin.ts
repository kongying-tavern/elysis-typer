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
import { fontGroupConfig } from "./config";

const octokit: Octokit = new Octokit();

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
