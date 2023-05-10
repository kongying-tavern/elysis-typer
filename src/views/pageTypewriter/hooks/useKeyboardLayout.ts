import { ref } from "vue";
import { Key } from "ts-keycode-enum";
import type { KeyboardLayoutOption, KeyboardKeyOption } from "@/shared";
import { useTextInput } from "./useTextInput";
import variables from "../components/Portrait/KeyboardLayout/variables.module.scss";
import ImgEnter from "../assets/key-enter.svg";
import ImgBackspace from "../assets/key-backspace.svg";

const { trimLast } = useTextInput();

const keyboardLayout: KeyboardLayoutOption = {
  colTemplate: "repeat(20, .5fr)",
  rowTemplate: "auto",
  areaTemplate: [
    "q     q     w     w     e     e     r     r     t     t     y     y     u     u     i     i     o         o         p         p",
    ".     a     a     s     s     d     d     f     f     g     g     h     h     j     j     k     k         l         l         .",
    "shift shift z     z     x     x     c     c     v     v     b     b     n     n     m     m     backspace backspace backspace backspace",
    "space space space space space space space space space space space space space space space space enter     enter     enter     enter",
  ],
};

const keyboardKeys: KeyboardKeyOption[] = [
  // 字母按键区
  {
    type: "key",
    keyCode: Key.A,
    area: "a",
    displayMode: ["text"],
    text: "A",
  },
  {
    type: "key",
    keyCode: Key.B,
    area: "b",
    displayMode: ["text"],
    text: "B",
  },
  {
    type: "key",
    keyCode: Key.C,
    area: "c",
    displayMode: ["text"],
    text: "C",
  },
  {
    type: "key",
    keyCode: Key.D,
    area: "d",
    displayMode: ["text"],
    text: "D",
  },
  {
    type: "key",
    keyCode: Key.E,
    area: "e",
    displayMode: ["text"],
    text: "E",
  },
  {
    type: "key",
    keyCode: Key.F,
    area: "f",
    displayMode: ["text"],
    text: "F",
  },
  {
    type: "key",
    keyCode: Key.G,
    area: "g",
    displayMode: ["text"],
    text: "G",
  },
  {
    type: "key",
    keyCode: Key.H,
    area: "h",
    displayMode: ["text"],
    text: "H",
  },
  {
    type: "key",
    keyCode: Key.I,
    area: "i",
    displayMode: ["text"],
    text: "I",
  },
  {
    type: "key",
    keyCode: Key.J,
    area: "j",
    displayMode: ["text"],
    text: "J",
  },
  {
    type: "key",
    keyCode: Key.K,
    area: "k",
    displayMode: ["text"],
    text: "K",
  },
  {
    type: "key",
    keyCode: Key.L,
    area: "l",
    displayMode: ["text"],
    text: "L",
  },
  {
    type: "key",
    keyCode: Key.M,
    area: "m",
    displayMode: ["text"],
    text: "M",
  },
  {
    type: "key",
    keyCode: Key.N,
    area: "n",
    displayMode: ["text"],
    text: "N",
  },
  {
    type: "key",
    keyCode: Key.O,
    area: "o",
    displayMode: ["text"],
    text: "O",
  },
  {
    type: "key",
    keyCode: Key.P,
    area: "p",
    displayMode: ["text"],
    text: "P",
  },
  {
    type: "key",
    keyCode: Key.Q,
    area: "q",
    displayMode: ["text"],
    text: "Q",
  },
  {
    type: "key",
    keyCode: Key.R,
    area: "r",
    displayMode: ["text"],
    text: "R",
  },
  {
    type: "key",
    keyCode: Key.S,
    area: "s",
    displayMode: ["text"],
    text: "S",
  },
  {
    type: "key",
    keyCode: Key.T,
    area: "t",
    displayMode: ["text"],
    text: "T",
  },
  {
    type: "key",
    keyCode: Key.U,
    area: "u",
    displayMode: ["text"],
    text: "U",
  },
  {
    type: "key",
    keyCode: Key.V,
    area: "v",
    displayMode: ["text"],
    text: "V",
  },
  {
    type: "key",
    keyCode: Key.W,
    area: "w",
    displayMode: ["text"],
    text: "W",
  },
  {
    type: "key",
    keyCode: Key.X,
    area: "x",
    displayMode: ["text"],
    text: "X",
  },
  {
    type: "key",
    keyCode: Key.Y,
    area: "y",
    displayMode: ["text"],
    text: "Y",
  },
  {
    type: "key",
    keyCode: Key.Z,
    area: "z",
    displayMode: ["text"],
    text: "Z",
  },
  // 其他按键区
  {
    type: "key",
    keyCode: Key.Space,
    area: "space",
    displayMode: ["text"],
    text: " ",
  },
  {
    type: "key",
    keyCode: Key.Enter,
    area: "enter",
    input: "\n",
    displayMode: ["icon"],
    icon: ImgEnter,
    iconColor: variables.icon_color_default,
  },
  {
    type: "key",
    keyCode: Key.Backspace,
    area: "backspace",
    input: () => {
      trimLast();
    },
    displayMode: ["icon"],
    icon: ImgBackspace,
    iconColor: variables.icon_color_default,
  },
];

const keyboardVisible = ref(false);

const openKeyboard = () => {
  keyboardVisible.value = true;
};

const closeKeyboard = () => {
  keyboardVisible.value = false;
};

const toggleKeyboard = () => {
  keyboardVisible.value = !keyboardVisible.value;
};

export const useKeyboardLayout = () => {
  return {
    keyboardLayout,
    keyboardKeys,
    keyboardVisible,
    openKeyboard,
    closeKeyboard,
    toggleKeyboard,
  };
};
