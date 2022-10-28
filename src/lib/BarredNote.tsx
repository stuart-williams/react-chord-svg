import { FC } from "react";
import { fontFamily, noteRadius } from "./const";
import type { Note } from "./types";

export interface BarredNoteProps {
  x: number;
  y: number;
  note: Note;
  bar: number;
  stringSpacing: number;
}

const BarredNote: FC<BarredNoteProps> = ({
  bar,
  note,
  x: xProp,
  y: yProp,
  stringSpacing,
}) => {
  const x = xProp - noteRadius;
  const y = yProp - noteRadius;
  const width = stringSpacing * (bar - 1) + noteRadius * 2;

  if (note.text) {
    return (
      <svg x={x} y={y} width={width}>
        <rect
          width="100%"
          rx={noteRadius}
          ry={noteRadius}
          height={noteRadius * 2}
          fillOpacity={note.opacity}
          fill={note.color || "black"}
        />
        <text
          x="50%"
          y={noteRadius}
          textAnchor="middle"
          fontFamily={fontFamily}
          alignmentBaseline="central"
          fill={note.textColor || "white"}
        >
          {note.text}
        </text>
      </svg>
    );
  }

  return (
    <rect
      x={x}
      y={y}
      width={width}
      rx={noteRadius}
      ry={noteRadius}
      height={noteRadius * 2}
      fillOpacity={note.opacity}
      fill={note.color || "black"}
    />
  );
};

export default BarredNote;
