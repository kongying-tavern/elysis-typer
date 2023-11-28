import { useColorMode } from "@vueuse/core";
import type { GlobalSettings } from "@/shared";

const { system, store } = useColorMode();

const themeKey = computed(() =>
  store.value === "auto" ? system.value : store.value,
);

const globalSettings: Ref<GlobalSettings> = ref({
  theme: themeKey.value,
});

export const useGlobalSettings = () => {
  return { globalSettings };
};
