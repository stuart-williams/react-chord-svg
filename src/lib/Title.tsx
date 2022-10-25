import { FC, SVGProps } from "react";
import { fontFamily, titleFontSize } from "./const";

const Title: FC<SVGProps<SVGTextElement>> = ({
  children,
  fontSize = titleFontSize,
  ...props
}) => (
  <text
    textAnchor="middle"
    fontSize={fontSize}
    fontFamily={fontFamily}
    alignmentBaseline="central"
    {...props}
  >
    {children}
  </text>
);

export default Title;
