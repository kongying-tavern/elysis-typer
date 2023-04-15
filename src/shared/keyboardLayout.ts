export interface KeyboardOption {
  layout: KeyboardComponentOption[];
}

export type KeyboardLayoutOption = KeyboardRowOption;
export type KeyboardWidgetOption = KeyboardKeyOption | KeyboardSpanOption;

export type KeyboardComponentOption =
  | KeyboardLayoutOption
  | KeyboardWidgetOption;

export interface KeyboardRowOption {
  type: "row";
  children: KeyboardWidgetOption[];
}

export interface KeyboardKeyOption {
  type: "key";
  width?: string | number;
  keyCode: number;
  keyTextMain: string;
}

export interface KeyboardSpanOption {
  type: "span";
  width: string | number;
}
