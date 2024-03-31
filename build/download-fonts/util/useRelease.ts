import _ from "lodash";
import FsExtra from "fs-extra";
import { latestReleaseIdPath } from "../env";

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
