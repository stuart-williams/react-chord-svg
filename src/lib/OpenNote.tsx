import { FC } from "react";
import { noteRadius } from "./config";
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
    r={noteRadius}
    strokeWidth="2"
    stroke={note.color || "black"}
    y={noteRadius - noteRadius * 2.5}
    note={{
      ...note,
      textColor: note.textColor || "black",
    }}
  />
);

export default OpenNote;
