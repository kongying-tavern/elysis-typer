export interface Config {
  inputMethod: "text" | "keyboard";
  keyTransform: boolean;
}

const config: Ref<Config> = ref({
  inputMethod: "keyboard",
  keyTransform: true,
});

export const useConfig = () => {
  return { config };
};
