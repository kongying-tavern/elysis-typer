export interface KeyboardOption {
  layout: KeyboardComponentOption[];
}

export type KeyboardLayoutOption = KeyboardRowOption;
export type KeyboardWidgetOption = KeyboardKeyOption | KeyboardSpanOption;

export type KeyboardRowType = "row";
export type KeyboardKeyType = "key";
export type KeyboardSpanType = "span";

export type KeyboardComponentOption =
  | KeyboardLayoutOption
  | KeyboardWidgetOption;

export interface KeyboardRowOption {
  type: KeyboardRowType;
  children: KeyboardWidgetOption[];
}

export interface KeyboardKeyOption {
  type: KeyboardKeyType;
  width?: string | number;
  keyCode: number;
  keyTextMain: string;
}

export interface KeyboardSpanOption {
  type: KeyboardSpanType;
  width: string | number;
}
