export interface Config {
  keyTransform: boolean;
}

const config: Ref<Config> = ref({
  keyTransform: true,
});

export const useConfig = () => {
  return { config };
};
