import { FC, SVGProps } from "react";
import { fontFamily } from "./const";

interface Props extends SVGProps<SVGTextElement> {
  fontSize?: number;
}

const Text: FC<Props> = ({ children, fontSize = 18, ...props }) => (
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
