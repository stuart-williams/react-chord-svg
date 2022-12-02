import { FC, SVGProps } from "react";
import { titleFontSize, titleHeight } from "./config";
import Text from "./Text";

interface Props extends SVGProps<SVGSVGElement> {
  width: number;
}

const Title: FC<Props> = ({ children, width, ...props }) => (
  <svg {...props} width={width} height={titleHeight} overflow="visible">
    <svg x={-(width / 2)} overflow="visible">
      <rect
        rx={5}
        width="100%"
        height="100%"
        strokeWidth="2"
        fill="darkorange"
      />
      <Text x="50%" y="50%" fontSize={titleFontSize} fill="white">
        {children}
      </Text>
    </svg>
  </svg>
);

export default Title;
