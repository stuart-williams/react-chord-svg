import type { FC } from "react";
import { fontFamily, noteRadius } from "./const";
import type { BarNote } from "./types";

export interface BarredNoteProps {
  x: string;
  y: string;
  note: BarNote;
  stringSpacing: number;
}

const BarredNote: FC<BarredNoteProps> = ({
  note,
  x: xProp,
  y: yProp,
  stringSpacing,
}) => {
  const x = `calc(${xProp} - ${noteRadius}px)`;
  const y = `calc(${yProp} - ${noteRadius}px)`;
  const width = `calc(${stringSpacing * (note.bar - 1)}% + ${noteRadius * 2}px`;

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
