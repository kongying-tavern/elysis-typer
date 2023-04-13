import type { Config, ConfigInputMethod } from "@/shared";

const config: Ref<Config> = ref({
  inputMethod: "keyboard" as ConfigInputMethod,
  keyTransform: true,
  font: "font-teyvat-regular",
});

export const useConfig = () => {
  return { config };
};
