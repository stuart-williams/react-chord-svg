import { FC, SVGProps } from "react";
import {
  defaultNumberOfFrets,
  defaultNumberOfStrings,
  fretHeight,
  fretWidth,
  labelFontSize,
  maxNumberOfFrets,
  maxNumberOfStrings,
  minNumberOfFrets,
  minNumberOfStrings,
  noteRadius,
  openNoteRadius,
  padding,
  startAtFretFontSize,
  titleHeight,
} from "./config";
import Fretboard from "./Fretboard";
import NoteFactory from "./NoteFactory";
import Text from "./Text";
import Title from "./Title";
import { Label, Note } from "./types";
import { clamp } from "./utils";

export interface ChordProps extends SVGProps<SVGSVGElement> {
  notes: Note[];
  title?: string;
  labels?: Label[];
  watermark?: string;
  startAtFret?: number;
  numberOfFrets?: number;
  numberOfStrings?: number;
}

const ChordSVG: FC<ChordProps> = ({
  title,
  notes,
  watermark,
  labels = [],
  startAtFret = 0,
  numberOfFrets: nfProp = defaultNumberOfFrets,
  numberOfStrings: nsProp = defaultNumberOfStrings,
  ...props
}) => {
  const nf = clamp(nfProp, minNumberOfFrets, maxNumberOfFrets);
  const ns = clamp(nsProp, minNumberOfStrings, maxNumberOfStrings);
  const hasOpenNotes = notes.find((n) => !n.fret);
  const openNotesH = hasOpenNotes ? openNoteRadius + padding : 0;
  const top = openNotesH + titleHeight + padding * 2;
  const watermarkH = watermark ? labelFontSize : 0;
  const labelsH = labels.length ? labelFontSize : 0;
  const bottom = watermarkH + labelsH + padding * 2;
  const fretboardH = fretHeight * nf;
  const fretboardW = fretWidth * (ns - 1);
  const viewBoxH = top + fretboardH + bottom;
  const viewBoxW = fretboardW + 190;

  return (
    <svg
      viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {title && (
        <Title x="50%" y={padding} width={fretboardW}>
          {title}
        </Title>
      )}
      <Fretboard
        y={top}
        labels={labels}
        numberOfFrets={nf}
        width={fretboardW}
        height={fretboardH}
        numberOfStrings={ns}
        startAtFret={startAtFret}
      >
        {startAtFret && (
          <Text
            y={fretHeight / 2}
            x={-noteRadius * 3}
            fontSize={startAtFretFontSize}
          >
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
          height={labelFontSize}
          y={viewBoxH - labelFontSize}
        >
          <Text fill="silver" fontSize={labelFontSize}>
            {watermark}
          </Text>
        </svg>
      )}
    </svg>
  );
};

export default ChordSVG;
