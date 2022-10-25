import { FC, SVGProps } from "react";
import { fontFamily, titleFontSize } from "./const";

const Title: FC<SVGProps<SVGTextElement>> = ({ children, ...props }) => (
  <text
    textAnchor="middle"
    fontFamily={fontFamily}
    fontSize={titleFontSize}
    alignmentBaseline="central"
    {...props}
  >
    {children}
  </text>
);

export default Title;
