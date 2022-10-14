import type { FC } from "react";
import BarredNote from "./BarredNote";
import MutedNote from "./MutedNote";
import OpenNote from "./OpenNote";
import SimpleNote from "./SimpleNote";
import type { Note } from "./types";

export interface NoteFactoryProps {
  note: Note;
  fretSpacing: number;
  stringSpacing: number;
}

const NoteFactory: FC<NoteFactoryProps> = ({
  note,
  fretSpacing,
  stringSpacing,
}) => {
  const x = (note.string - 1) * stringSpacing + "%";

  if (note.muted) {
    return <MutedNote x={x} />;
  }

  if (!note.fret) {
    return <OpenNote x={x} note={note} />;
  }

  const y = `calc(${fretSpacing * note.fret}% - ${fretSpacing / 2}%)`;

  if (note.bar && note.bar > 1) {
    return (
      <BarredNote
        x={x}
        y={y}
        note={note}
        bar={note.bar}
        stringSpacing={stringSpacing}
      />
    );
  }

  return <SimpleNote x={x} y={y} note={note} />;
};

export default NoteFactory;
