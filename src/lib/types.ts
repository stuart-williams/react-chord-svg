import type { SetRequired } from "type-fest";

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

export type BarNote = SetRequired<Note, "bar">;
