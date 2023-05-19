export interface KeyboardLayoutOption {
  rowTemplate: string;
  colTemplate: string;
  areaTemplate?: string[];
}

export type KeyboardKeyDisplayType = "text" | "icon";

export type KeyboardKeyType = "key";

export interface KeyboardKeyOption {
  type: KeyboardKeyType;
  keyCode: number;
  input?: string | ((opt: KeyboardKeyOption) => void);
  area?: string;
  displayMode: KeyboardKeyDisplayType[];
  text?: string;
  icon?: string;
}
