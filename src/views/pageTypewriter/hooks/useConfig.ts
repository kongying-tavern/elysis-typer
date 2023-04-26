import type { Config } from "@/shared";
import { ConfigInputMethodEnum } from "@/shared";
import { useFont } from "./useFont";

const { fontDefaultOption } = useFont();

const config: Ref<Config> = ref({
  inputMethod: ConfigInputMethodEnum.KEYBOARD,
  keyTransform: true,
  font: fontDefaultOption,
});

export const useConfig = () => {
  return { config };
};
