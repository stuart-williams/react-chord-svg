import { FC } from "react";
import BarredNote from "./BarredNote";
import { fretHeight, fretWidth } from "./config";
import MutedNote from "./MutedNote";
import OpenNote from "./OpenNote";
import SimpleNote from "./SimpleNote";
import type { Note } from "./types";

export interface NoteFactoryProps {
  note: Note;
}

const NoteFactory: FC<NoteFactoryProps> = ({ note }) => {
  const x = (note.string - 1) * fretWidth;

  if (note.muted) {
    return <MutedNote x={x} />;
  }

  if (!note.fret) {
    return <OpenNote x={x} note={note} />;
  }

  const y = fretHeight * note.fret - fretHeight / 2;

  if (note.bar && note.bar > 1) {
    return <BarredNote x={x} y={y} note={note} bar={note.bar} />;
  }

  return <SimpleNote x={x} y={y} note={note} />;
};

export default NoteFactory;
