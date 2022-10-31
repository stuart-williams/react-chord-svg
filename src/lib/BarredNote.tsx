import { FC } from "react";
import { fretWidth, noteRadius } from "./config";
import Text from "./Text";
import type { Note } from "./types";

export interface BarredNoteProps {
  x: number;
  y: number;
  note: Note;
  bar: number;
}

const BarredNote: FC<BarredNoteProps> = ({ bar, note, x: xProp, y: yProp }) => {
  const x = xProp - noteRadius;
  const y = yProp - noteRadius;
  const width = fretWidth * (bar - 1) + noteRadius * 2;

  if (note.text) {
    return (
      <svg x={x} y={y} width={width}>
        <rect
          width="100%"
          rx={noteRadius}
          ry={noteRadius}
          strokeWidth="2"
          height={noteRadius * 2}
          fillOpacity={note.opacity}
          fill={note.color || "black"}
        />
        <Text x="50%" y={noteRadius} fill={note.textColor || "white"}>
          {note.text}
        </Text>
      </svg>
    );
  }

  return (
    <rect
      x={x}
      y={y}
      width={width}
      strokeWidth="2"
      rx={noteRadius}
      ry={noteRadius}
      height={noteRadius * 2}
      fillOpacity={note.opacity}
      fill={note.color || "black"}
    />
  );
};

export default BarredNote;
