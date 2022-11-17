import { FC, PropsWithChildren, SVGProps } from "react";
import { fretHeight, fretWidth, labelFontSize, nutHeight } from "./config";
import Text from "./Text";
import { Label } from "./types";
import { times } from "./utils";

const Border: FC<SVGProps<SVGRectElement>> = (props) => (
  <rect fill="none" stroke="black" strokeWidth="2" {...props} />
);

const Fret: FC<{ y: number; width: number }> = ({ y, width }) => (
  <line x1="0" x2={width} y1={y} y2={y} stroke="black" strokeWidth="2" />
);

const String: FC<{ x: number; height: number }> = ({ x, height }) => (
  <line x1={x} x2={x} y1="0" y2={height} stroke="black" strokeWidth="2" />
);

export interface FretboardProps extends SVGProps<SVGSVGElement> {
  y: number;
  width: number;
  height: number;
  labels: Label[];
  startAtFret: number;
  numberOfFrets: number;
  numberOfStrings: number;
}

const Fretboard: FC<PropsWithChildren<FretboardProps>> = ({
  width,
  height,
  children,
  startAtFret,
  numberOfFrets,
  numberOfStrings,
  labels,
  ...props
}) => (
  <svg x="50%" width={width} height={height} overflow="visible" {...props}>
    <svg x={-(width / 2)} overflow="visible">
      {!startAtFret && (
        <line
          x1={-1}
          stroke="black"
          x2={width + 1}
          y1={nutHeight - 2}
          y2={nutHeight - 2}
          strokeWidth={nutHeight}
        />
      )}
      <Border width={width} height={height} />
      {times(numberOfFrets - 1, (i) => (
        <Fret key={i} width={width} y={(i + 1) * fretHeight} />
      ))}
      {times(numberOfStrings - 2, (i) => (
        <String key={i} height={height} x={(i + 1) * fretWidth} />
      ))}
      {labels &&
        labels.map(({ string, text }, i) => (
          <Text
            key={i}
            fontSize={labelFontSize}
            y={height + labelFontSize}
            x={fretWidth * (string - 1)}
          >
            {text}
          </Text>
        ))}
      {children}
    </svg>
  </svg>
);

export default Fretboard;
