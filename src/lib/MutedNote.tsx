import { FC } from "react";
import { noteRadius } from "./config";

export interface MutedNoteProps {
  x: number;
}

const MutedNote: FC<MutedNoteProps> = ({ x }) => (
  <svg x={x - noteRadius} y={-(noteRadius * 2.5 + 1)} overflow="visible">
    <line
      x1="0"
      y1="0"
      stroke="black"
      y2={noteRadius * 2}
      x2={noteRadius * 2}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      y1="0"
      x2="0"
      stroke="black"
      y2={noteRadius * 2}
      x1={noteRadius * 2}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default MutedNote;
