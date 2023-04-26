export type FontGroupDisplayWidget = "icon" | "label";

export interface FontGroupNode {
  id: string;
  label: string;
  icon?: string;
  displayWidgets: FontGroupDisplayWidget[];
  children: FontNode[];
}

export interface FontNode {
  tag: string;
  label: string;
  abbr?: string;
}
