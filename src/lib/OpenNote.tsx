import { FC } from "react";
import { openNoteRadius } from "./const";
import SimpleNote from "./SimpleNote";
import type { Note } from "./types";

export interface OpenNoteProps {
  x: number;
  note: Note;
}

const OpenNote: FC<OpenNoteProps> = ({ x, note }) => (
  <SimpleNote
    x={x}
    fill="none"
    strokeWidth="2"
    r={openNoteRadius}
    stroke={note.color || "black"}
    y={openNoteRadius - openNoteRadius * 2.5}
    note={{
      ...note,
      textColor: note.textColor || "black",
    }}
  />
);

export default OpenNote;
