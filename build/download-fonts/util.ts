import _ from "lodash";
import FsExtra from "fs-extra";
import { PatternTester } from "./types";
import { latestReleaseIdPath } from "./env";

export const getLatestReleaseId = (): number => {
  let latestReleaseId: number = 0;
  if (FsExtra.existsSync(latestReleaseIdPath)) {
    const latestReleaseIdStr: string = FsExtra.readFileSync(
      latestReleaseIdPath,
      {
        encoding: "utf-8",
      },
    )!;
    latestReleaseId = _.toNumber(latestReleaseIdStr);
  }
  return latestReleaseId;
};

export const saveLatestReleaseId = (releaseId: number): void => {
  FsExtra.outputFile(latestReleaseIdPath, releaseId.toString(), {
    encoding: "utf-8",
  });
};

export const getRegex = (pattern: PatternTester): RegExp => {
  let rePattern: RegExp;
  if (typeof pattern === "string") {
    rePattern = new RegExp(pattern);
  } else {
    rePattern = pattern;
  }
  return rePattern;
};

export const testRegex = (
  resource: string,
  patterns: PatternTester[],
): boolean => {
  if (!resource) return false;

  for (const pattern of patterns) {
    const rePattern: RegExp = getRegex(pattern);
    const reMatch: boolean = rePattern.test(resource);
    if (reMatch) return true;
  }
  return false;
};
