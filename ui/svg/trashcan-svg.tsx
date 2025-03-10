import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const TrashcanSvg = ({ color, ...props }: SvgProps & { color: string }) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <G
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Path d="M10 11v6M14 11v6M4 7h16M6 7h12v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7ZM9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V5Z" />
    </G>
  </Svg>
);
export default TrashcanSvg;
