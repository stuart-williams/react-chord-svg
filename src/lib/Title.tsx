import { FC, SVGProps } from "react";
import { fontFamily, titleFontSize } from "./const";

interface Props extends SVGProps<SVGTextElement> {
  fontSize?: number;
}

const Title: FC<Props> = ({ children, fontSize = titleFontSize, ...props }) => (
  <text
    dy={fontSize / 2}
    textAnchor="middle"
    fontSize={fontSize}
    fontFamily={fontFamily}
    {...props}
  >
    {children}
  </text>
);

export default Title;
