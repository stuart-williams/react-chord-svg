export interface Note {
  bar?: number;
  fret?: number;
  text?: string;
  string: number;
  color?: string;
  muted?: boolean;
  opacity?: number;
  textColor?: string;
}

export interface Label {
  text: string;
  string: number;
}
