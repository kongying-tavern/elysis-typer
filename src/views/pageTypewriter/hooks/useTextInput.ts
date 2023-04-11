const text = ref("");

export const useTextInput = () => {
  const clear = () => {
    text.value = "";
  };

  const update = (str: string) => {
    text.value = str;
  };

  const append = (chars: string) => {
    text.value += chars;
  };

  const trimLast = () => {
    const txt: string = text.value as string;
    text.value = txt.substring(0, txt.length - 1);
  };

  return { text, clear, update, append, trimLast };
};
