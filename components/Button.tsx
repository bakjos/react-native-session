import React from "react";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

import {
  ButtonProps,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  Text,
} from "react-native";

type ButtonPropsWithStyle = RectButtonProperties & {
  style?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  title?: string;
};

// class Button extends React.Component<ButtonPropsWithStyle> {
//   render() {
//     const { labelStyle, title, style, ...other } = this.props;

//     return (
//       <RectButton style={style} {...other}>
//         <Text style={labelStyle}>{title}</Text>
//       </RectButton>
//     );
//   }
// }

const Button = (props: ButtonPropsWithStyle) => {
  const { labelStyle, title, style, ...other } = props;

  return (
    <RectButton style={style} {...other}>
      <Text style={labelStyle}>{title}</Text>
    </RectButton>
  );
};

export default Button;
