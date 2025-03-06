import Svg, { SvgProps, G, Circle, Path } from "react-native-svg";
import { useColor } from "@/theme/hooks/useColor";
const UserSVG = (props: SvgProps) => {
  const { primary: colorPrimary } = useColor();
  return (
    <Svg width={64} height={64} fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={colorPrimary} strokeWidth={1.5}>
        <Circle cx={12} cy={6} r={4} />
        <Path
          strokeLinecap="round"
          d="M19.997 18c.003-.164.003-.331.003-.5 0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"
        />
      </G>
    </Svg>
  );
};
export default UserSVG;
