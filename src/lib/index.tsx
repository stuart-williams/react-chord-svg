import { FC, SVGProps } from "react";
import {
  defaultNumberOfFrets,
  defaultNumberOfStrings,
  fretHeight,
  noteRadius,
  openNoteRadius,
  padding,
  titleFontSize,
} from "./const";
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
  numberOfFrets = defaultNumberOfFrets,
  numberOfStrings = defaultNumberOfStrings,
  ...props
}) => {
  const fretSpacing = 100 / numberOfFrets;
  const stringSpacing = 100 / (numberOfStrings - 1);
  const baseY = openNoteRadius * 2 + (title ? titleFontSize * 2.5 : padding);
  const viewBoxH = baseY + numberOfFrets * fretHeight;

  return (
    <svg
      viewBox={`0 0 500 ${viewBoxH}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {title && (
        <Title x="50%" y={padding} alignmentBaseline="hanging">
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
