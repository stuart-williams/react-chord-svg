import type { FC } from "react";
import { mutedNoteSize } from "./const";

export interface MutedNoteProps {
  x: string;
}

const MutedNote: FC<MutedNoteProps> = ({ x }) => (
  <svg x={`calc(${x} - ${mutedNoteSize}px)`} y={-mutedNoteSize * 2.5}>
    <line
      x1="0"
      y1="0"
      stroke="black"
      strokeWidth="2"
      y2={mutedNoteSize * 2}
      x2={mutedNoteSize * 2}
    />
    <line
      y1="0"
      x2="0"
      stroke="black"
      strokeWidth="2"
      y2={mutedNoteSize * 2}
      x1={mutedNoteSize * 2}
    />
  </svg>
);

export default MutedNote;