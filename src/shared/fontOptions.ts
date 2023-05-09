export interface FontGroupNode {
  id: string;
  label: string;
  icon?: string;
  children: FontNode[];
}

export interface FontNode {
  tag: string;
  label: string;
  abbr?: string;
  url: string;
  meta: { [key: string]: string };
}
