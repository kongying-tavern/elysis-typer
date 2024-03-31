import Path from "node:path";

// Paths used in downloading
export const srcBasePath: string = Path.resolve(__dirname, "../../src/");
export const latestReleaseIdPath: string = Path.resolve(
  __dirname,
  "./.cache/release-id.txt",
);
export const fontCacheBasePath: string = Path.resolve(__dirname, "./.cache/");
export const fontDownloadBasePath: string = Path.resolve(
  srcBasePath,
  "./assets/fonts/",
);
