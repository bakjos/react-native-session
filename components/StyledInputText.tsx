import { TextInput, TextInputProps } from "react-native";
import styled from "styled-components/native";

type StyledInputTextProps = TextInputProps & {
  dark?: boolean;
};

const StyledInputText = styled(TextInput)`
  height: 40px;
  border-color: ${({ dark }: StyledInputTextProps) =>
    dark ? "white" : "black"};
  border-width: 2px;
  color: ${({ dark }: StyledInputTextProps) => (dark ? "white" : "black")};
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  border-style: dashed;
`;

export default StyledInputText;
