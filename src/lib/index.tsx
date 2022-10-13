import type { FC, SVGProps } from "react";
import { noteRadius, openNoteRadius, titleFontSize } from "./const";
import Fretboard from "./Fretboard";
import NoteFactory from "./NoteFactory";
import Title from "./Title";
import type { Note } from "./types";

export interface DiagramProps extends SVGProps<SVGSVGElement> {
  notes: Note[];
  title?: string;
  startAtFret?: number;
  numberOfFrets?: number;
  numberOfStrings?: number;
}

const ChordSVG: FC<DiagramProps> = ({
  title,
  notes,
  startAtFret,
  numberOfFrets = 5,
  numberOfStrings = 6,
  ...props
}) => {
  const topPad = 10;
  const fretSpacing = 100 / numberOfFrets;
  const stringSpacing = 100 / (numberOfStrings - 1);
  const baseY = openNoteRadius * 2 + (title ? titleFontSize * 2.5 : topPad);

  return (
    <svg
      viewBox="0 0 500 550"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {title && (
        <Title x="50%" y={topPad} alignmentBaseline="hanging">
          {title}
        </Title>
      )}
      <Fretboard
        y={baseY}
        numberOfFrets={numberOfFrets}
        numberOfStrings={numberOfStrings}
      >
        {startAtFret && (
          <Title x={-noteRadius * 2.5} y={fretSpacing / 2 + "%"}>
            {startAtFret + "fr"}
          </Title>
        )}
        {notes.map((note, i) => (
          <NoteFactory
            key={i}
            note={note}
            fretSpacing={fretSpacing}
            stringSpacing={stringSpacing}
          />
        ))}
      </Fretboard>
    </svg>
  );
};

export default ChordSVG;
