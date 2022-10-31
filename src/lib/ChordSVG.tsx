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
} from "./config";
import Fretboard from "./Fretboard";
import NoteFactory from "./NoteFactory";
import Text from "./Text";
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
  const hasOpen = notes.find((n) => !n.fret);
  const openNotesH = hasOpen ? openNoteRadius * 2 + padding : 0;
  const top = openNotesH + (title ? titleFontSize : 0) + padding;
  const bottom = (watermark ? watermarkFontSize : 0) + padding;
  console.log(fretHeight);
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
        <Text x="50%" y={padding} fontSize={titleFontSize}>
          {title}
        </Text>
      )}
      <Fretboard
        x="100"
        y={top}
        height={fretboardH}
        numberOfFrets={numberOfFrets}
        numberOfStrings={numberOfStrings}
      >
        {startAtFret && (
          <Text
            x={-noteRadius * 3}
            y={fretSpacing / 2}
            fontSize={titleFontSize}
          >
            {startAtFret + "fr"}
          </Text>
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
          <Text fill="gray" fontSize={watermarkFontSize}>
            {watermark}
          </Text>
        </svg>
      )}
    </svg>
  );
};

export default ChordSVG;
