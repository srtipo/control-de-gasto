import Svg, { SvgProps, G, Circle, Path } from "react-native-svg";
const AddSvg = ({ color, ...props }: SvgProps & { color: string }) => (
  <Svg width={20} height={20} fill="none" viewBox="0 0 24 24" {...props}>
    <G stroke={color} strokeWidth={1.5}>
      <Circle cx={12} cy={12} r={10} />
      <Path strokeLinecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3" />
    </G>
  </Svg>
);
export default AddSvg;
