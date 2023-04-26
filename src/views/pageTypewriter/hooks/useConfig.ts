import type { Config, ConfigInputMethod } from "@/shared";
import { useFont } from "./useFont";

const { fontDefaultOption } = useFont();

const config: Ref<Config> = ref({
  inputMethod: "keyboard" as ConfigInputMethod,
  keyTransform: true,
  font: fontDefaultOption,
});

export const useConfig = () => {
  return { config };
};
