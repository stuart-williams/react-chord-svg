import { FC, SVGProps } from "react";
import {
  defaultNumberOfFrets,
  defaultNumberOfStrings,
  fretboardWidth,
  fretHeight,
  noteRadius,
  openNoteRadius,
  padding,
  titleFontSize,
  watermarkFontSize,
} from "./const";
import Fretboard from "./Fretboard";
import NoteFactory from "./NoteFactory";
import Title from "./Title";
import type { Note } from "./types";

export interface ChordProps extends SVGProps<SVGSVGElement> {
  notes: Note[];
  title?: string;
  watermark?: string;
  startAtFret?: number;
  numberOfFrets?: number;
  numberOfStrings?: number;
}

const ChordSVG: FC<ChordProps> = ({
  title,
  notes,
  watermark,
  startAtFret,
  numberOfFrets = defaultNumberOfFrets,
  numberOfStrings = defaultNumberOfStrings,
  ...props
}) => {
  const top = openNoteRadius * 2.5 + (title ? titleFontSize : 0) + padding * 2;
  const bottom = (watermark ? watermarkFontSize : 0) + padding;
  const fretboardH = fretHeight * numberOfFrets;
  const fretSpacing = fretboardH / numberOfFrets;
  const stringSpacing = fretboardWidth / (numberOfStrings - 1);
  const viewBoxH = top + fretboardH + bottom;

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
        x="100"
        y={top}
        height={fretboardH}
        numberOfFrets={numberOfFrets}
        numberOfStrings={numberOfStrings}
      >
        {startAtFret && (
          <Title x={-noteRadius * 3} y={fretSpacing / 2}>
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
      {watermark && (
        <svg
          x="50%"
          overflow="visible"
          height={watermarkFontSize}
          y={top + fretboardH + watermarkFontSize}
        >
          <Title fill="gray" fontSize={watermarkFontSize}>
            {watermark}
          </Title>
        </svg>
      )}
    </svg>
  );
};

export default ChordSVG;
