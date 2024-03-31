import type { Plugin } from "vite";
import { fontDownloadConfig, getFontAssetUrls } from "./plugin";

export default (): Plugin => {
  return {
    name: "download-fonts",
    enforce: "pre",
    configResolved: async () => {
      await getFontAssetUrls(fontDownloadConfig);
    },
  };
};
