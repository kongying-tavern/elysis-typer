import type { Config } from "@/shared";
import { ConfigInputMethodEnum, ConfigConvertDirectionEnum } from "@/shared";
import { useFont } from "./useFont";

const { fontDefaultOption } = useFont();

const config = ref<Config>({
  inputMethod: ConfigInputMethodEnum.KEYBOARD,
  keyTransform: true,
  convertDirection: ConfigConvertDirectionEnum.FROM_ENG,
  font: fontDefaultOption,
});

export const useConfig = () => {
  return { config };
};
