import { FC, SVGProps } from "react";
import {
  defaultNumberOfFrets,
  defaultNumberOfStrings,
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
  const fretSpacing = 100 / numberOfFrets;
  const stringSpacing = 100 / (numberOfStrings - 1);
  const bottom = (watermark ? watermarkFontSize : 0) + padding;
  const top = openNoteRadius * 2 + (title ? titleFontSize : 0) + padding * 2;
  const viewBoxH = top + numberOfFrets * fretHeight;

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
        numberOfFrets={numberOfFrets}
        numberOfStrings={numberOfStrings}
        height={`calc(100% - ${top + bottom}px)`}
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
      {watermark && (
        <svg
          x="50%"
          overflow="visible"
          height={watermarkFontSize}
          y={`calc(100% - ${padding}px)`}
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
