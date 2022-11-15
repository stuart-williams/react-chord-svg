import { FC, SVGProps } from "react";
import {
  defaultNumberOfFrets,
  defaultNumberOfStrings,
  fretHeight,
  fretWidth,
  maxNumberOfFrets,
  maxNumberOfStrings,
  minNumberOfFrets,
  minNumberOfStrings,
  noteRadius,
  padding,
  titleFontSize,
  watermarkFontSize,
} from "./config";
import Fretboard from "./Fretboard";
import NoteFactory from "./NoteFactory";
import Text from "./Text";
import type { Note } from "./types";
import { clamp } from "./utils";

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
  numberOfFrets: nfProp = defaultNumberOfFrets,
  numberOfStrings: nsProp = defaultNumberOfStrings,
  ...props
}) => {
  const nf = clamp(nfProp, minNumberOfFrets, maxNumberOfFrets);
  const ns = clamp(nsProp, minNumberOfStrings, maxNumberOfStrings);
  const hasOpenNotes = notes.find((n) => !n.fret);
  const openNotesH = hasOpenNotes ? noteRadius * 2 + padding / 2 : 0;
  const top = openNotesH + (title ? titleFontSize : 0) + padding;
  const bottom = (watermark ? watermarkFontSize : 0) + padding;
  const fretboardH = fretHeight * nf;
  const fretboardW = fretWidth * (ns - 1);
  const viewBoxH = top + fretboardH + bottom;

  return (
    <svg
      viewBox={`0 0 440 ${viewBoxH}`}
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
        x="50%"
        y={top}
        numberOfFrets={nf}
        width={fretboardW}
        height={fretboardH}
        numberOfStrings={ns}
      >
        {startAtFret && (
          <Text x={-noteRadius * 3} y={fretHeight / 2} fontSize={titleFontSize}>
            {startAtFret + "fr"}
          </Text>
        )}
        {notes.map((note, i) => (
          <NoteFactory key={i} note={note} />
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
