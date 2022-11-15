import { FC, SVGProps } from "react";
import { fontFamily, noteRadius } from "./config";
import Text from "./Text";
import { Note } from "./types";

export interface SimpleNoteProps extends SVGProps<SVGCircleElement> {
  x: number;
  y: number;
  note: Note;
}

const SimpleNote: FC<SimpleNoteProps> = ({ x, y, note, ...props }) => {
  if (note.text) {
    return (
      <svg x={x} y={y} overflow="visible">
        <circle
          r={noteRadius}
          strokeWidth="2"
          fill={note.color || "black"}
          {...props}
        />
        <Text fontFamily={fontFamily} fill={note.textColor || "white"}>
          {note.text}
        </Text>
      </svg>
    );
  }

  return (
    <circle
      cx={x}
      cy={y}
      r={noteRadius}
      strokeWidth="2"
      fill={note.color || "black"}
      {...props}
    />
  );
};

export default SimpleNote;
