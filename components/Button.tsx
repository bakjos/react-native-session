import React from "react";

import {
  ButtonProps,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  Text,
} from "react-native";

type ButtonPropsWithStyle = ButtonProps & {
  style?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

const Button = (props: ButtonPropsWithStyle) => {
  const { labelStyle, title, style, ...other } = props;

  return (
    <TouchableOpacity style={style} {...other}>
      <Text style={labelStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
