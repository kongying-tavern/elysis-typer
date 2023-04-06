const text = ref("");

export const useTextInput = () => {
  const update = (str: string) => {
    text.value = str;
  };

  const append = (chars: string) => {
    text.value += chars;
  };

  return { text, update, append };
};
