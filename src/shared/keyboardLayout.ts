export interface KeyboardLayoutOptions {
  framework: KeyboardFrameworkOptions;
  layout: KeyboardWidgetOption[];
}

export interface KeyboardFrameworkOptions {
  // TODO
}

export type KeyboardKeyType = "key" | "span" | "nl";

export interface KeyboardKeyOption {
  width?: string | number;
  keyTextMain: string;
  keyCode: number;
}

export interface KeyboardSpanOption {
  width: string | number;
}

export interface KeyboardNlOption {}

export type KeyboardWidgetOptions =
  | KeyboardKeyOption
  | KeyboardSpanOption
  | KeyboardNlOption;

export interface KeyboardWidgetOption {
  type: KeyboardKeyType;
  options?: KeyboardWidgetOptions;
}
