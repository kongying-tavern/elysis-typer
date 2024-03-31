import { PatternTester } from "../types";

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
