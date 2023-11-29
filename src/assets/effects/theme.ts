import { get } from "lodash";
import { useGlobalSettings } from "@/hooks";

const { globalSettings } = useGlobalSettings();

type ThemeColorExportMap = { [key: string]: string };

export const getThemeColor = (
  colorMap: ThemeColorExportMap,
  colorKey: string,
) => {
  const themeColorKey = `${globalSettings.value.theme || ""}--${colorKey}`;
  const themeColorVal: string = get(colorMap, themeColorKey);
  return themeColorVal;
};
