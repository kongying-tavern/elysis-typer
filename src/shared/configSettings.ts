import type { FontNode } from "./fontOptions";

export enum ConfigInputMethodEnum {
  TEXT = "text",
  KEYBOARD = "keyboard",
}

export type ConfigInputMethod =
  | ConfigInputMethodEnum.TEXT
  | ConfigInputMethodEnum.KEYBOARD;

export interface Config {
  inputMethod: ConfigInputMethod;
  keyTransform: boolean;
  font: FontNode;
}
