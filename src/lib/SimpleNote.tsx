import { FC, SVGProps } from "react";
import { fontFamily, noteRadius } from "./const";
import type { Note } from "./types";

export interface SimpleNoteProps extends SVGProps<SVGCircleElement> {
  note: Note;
  x: number | string;
  y: number | string;
}

const SimpleNote: FC<SimpleNoteProps> = ({ x, y, note, ...props }) => {
  if (note.text) {
    return (
      <svg x={x} y={y} overflow="visible">
        <circle r={noteRadius} fill={note.color || "black"} {...props} />
        <text
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
    <circle
      cx={x}
      cy={y}
      r={noteRadius}
      fill={note.color || "black"}
      {...props}
    />
  );
};

export default SimpleNote;
