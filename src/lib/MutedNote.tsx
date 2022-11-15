import { FC } from "react";
import { muteNoteSize } from "./config";

export interface MutedNoteProps {
  x: number;
}

const MutedNote: FC<MutedNoteProps> = ({ x }) => (
  <svg
    viewBox="0 0 17 17"
    width={muteNoteSize}
    height={muteNoteSize}
    x={x - muteNoteSize / 2}
    y={-(muteNoteSize + 4)}
  >
    <path d="M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z" />
  </svg>
);

export default MutedNote;
