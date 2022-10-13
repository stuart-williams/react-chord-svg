import type { FC, PropsWithChildren } from "react";
import { times } from "./utils";

const Border: FC = () => (
  <rect fill="none" width="100%" height="100%" strokeWidth="2" stroke="black" />
);

const Fret: FC<{ y: string }> = ({ y }) => (
  <line x1="0" x2="100%" y1={y} y2={y} stroke="black" strokeWidth="2" />
);

const String: FC<{ x: string }> = ({ x }) => (
  <line x1={x} x2={x} y1="0" y2="100%" stroke="black" strokeWidth="2" />
);

export interface FretboardProps {
  y: number;
  numberOfFrets: number;
  numberOfStrings: number;
}

const Fretboard: FC<PropsWithChildren<FretboardProps>> = ({
  y,
  numberOfFrets,
  numberOfStrings,
  children,
}) => (
  <svg
    y={y}
    x="100"
    width="300"
    overflow="visible"
    height={`calc(100% - ${y + 1}px)`}
  >
    <Border />
    {times(numberOfFrets - 1, (i) => (
      <Fret key={i} y={(i + 1) * (100 / numberOfFrets) + "%"} />
    ))}
    {times(numberOfStrings - 2, (i) => (
      <String key={i} x={(i + 1) * (100 / (numberOfStrings - 1)) + "%"} />
    ))}
    {children}
  </svg>
);

export default Fretboard;
