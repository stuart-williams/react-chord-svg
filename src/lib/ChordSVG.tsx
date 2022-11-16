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
  titleFontSize,
} from "./config";
import Fretboard from "./Fretboard";
import NoteFactory from "./NoteFactory";
import Text from "./Text";
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
  startAtFret,
  numberOfFrets: nfProp = defaultNumberOfFrets,
  numberOfStrings: nsProp = defaultNumberOfStrings,
  ...props
}) => {
  const nf = clamp(nfProp, minNumberOfFrets, maxNumberOfFrets);
  const ns = clamp(nsProp, minNumberOfStrings, maxNumberOfStrings);
  const hasOpenNotes = notes.find((n) => !n.fret);
  const titleH = title ? titleFontSize + padding / 2 : 0;
  const openNotesH = hasOpenNotes ? openNoteRadius + padding / 2 : 0;
  const top = openNotesH + titleH + padding;
  const watermarkH = watermark ? labelFontSize : 0;
  const labelsH = labels.length ? labelFontSize : 0;
  const bottom = watermarkH + labelsH + padding;
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
        <Text x="50%" y={padding} fontSize={titleFontSize}>
          {title}
        </Text>
      )}
      <Fretboard
        y={top}
        labels={labels}
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
          height={labelFontSize}
          y={viewBoxH - labelFontSize}
        >
          <Text fill="gray" fontSize={labelFontSize}>
            {watermark}
          </Text>
        </svg>
      )}
    </svg>
  );
};

export default ChordSVG;
