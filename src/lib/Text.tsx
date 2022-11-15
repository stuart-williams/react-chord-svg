import { FC, SVGProps } from "react";
import { baseFontSize, fontFamily } from "./config";

interface Props extends SVGProps<SVGTextElement> {
  fontSize?: number;
}

const Text: FC<Props> = ({ children, fontSize = baseFontSize, ...props }) => (
  <text
    dy="0.35em"
    textAnchor="middle"
    fontSize={fontSize}
    fontFamily={fontFamily}
    {...props}
  >
    {children}
  </text>
);

export default Text;
