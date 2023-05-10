const selectorVisible = ref(false);

const openSelector = () => {
  selectorVisible.value = true;
};

const closeSelector = () => {
  selectorVisible.value = false;
};

const toggleSelector = () => {
  selectorVisible.value = !selectorVisible.value;
};

export const useFontSelector = () => {
  return { selectorVisible, openSelector, closeSelector, toggleSelector };
};
