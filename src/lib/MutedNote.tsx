import { FC } from "react";
import { noteRadius } from "./config";

export interface MutedNoteProps {
  x: number;
}

const MutedNote: FC<MutedNoteProps> = ({ x }) => {
  const radius = noteRadius * 0.9;

  return (
    <svg x={x - radius} y={-(radius * 2.5 + 1)} overflow="visible">
      <line
        x1="0"
        y1="0"
        stroke="black"
        y2={radius * 2}
        x2={radius * 2}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        y1="0"
        x2="0"
        stroke="black"
        y2={radius * 2}
        x1={radius * 2}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MutedNote;
