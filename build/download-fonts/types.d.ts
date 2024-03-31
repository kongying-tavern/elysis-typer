import type { RestEndpointMethodTypes } from "@octokit/rest";
import type { components } from "@octokit/openapi-types";
import type { FontNodeMeta } from "@/shared";

// Request and response data types local simplification
export type ReleaseRequestParam =
  RestEndpointMethodTypes["repos"]["listReleases"]["parameters"];
export type ReleaseResponse =
  RestEndpointMethodTypes["repos"]["listReleases"]["response"];
export type ReleaseResponseItem = components["schemas"]["release"];
export type ReleaseAssetResponseItem = components["schemas"]["release-asset"];

// Downloader types
export type PatternTester = string | RegExp;

export interface FontGroupOption {
  fontTagPattern: PatternTester[];
  groupKey: string;
  groupName: string;
  groupLogo: string;
}

export interface FontItemOption {
  fontTag: string;
  fontName: string;
  fontAbbr?: string;
  fontMeta?: FontNodeMeta;
  releasePattern: PatternTester[];
  assetPattern: PatternTester[];
}

export interface FontDownloadItem {
  fontTag: string;
  downloadUrls: string[];
  group: FontGroupOption;
  item: FontItemOption;
}
