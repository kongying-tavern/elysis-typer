import type { Plugin } from "vite";
import { fontDownloadConfig } from "./config";
import { getFontAssetUrls } from "./plugin";

export default (): Plugin => {
  return {
    name: "download-fonts",
    enforce: "pre",
    configResolved: async () => {
      await getFontAssetUrls(fontDownloadConfig);
    },
  };
};
