import React, {
  useState,
  useContext,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";
import { Text } from "../components/Themed";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import { CounterState } from "../types/state";
import styled from "styled-components/native";
import useColorScheme from "../hooks/useColorScheme";

type CounterProps = {
  onUpdated?: (increment: boolean) => void;
  visible?: boolean;
};

const StyleButton = styled(Button)`
  color: red;
  background-color: #ff0000;
  height: 50px;
  width: 50px;
  align-self: center;
  justify-content: center;
  margin: 10px;
  border-radius: 25px;
`;

const StyledText = styled(Text)`
  font-size: 20px;
  opacity: ${({ visible = true }: { visible?: boolean }) => (visible ? 1 : 0)};
  margin: 20px 30px;
`;

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

const Counter = ({ onUpdated }: CounterProps) => {
  //const [count, setCount] = useState<number>(props.initialValue);
  //const { state, dispatch } = useContext(StateContext);
  const dispatch = useDispatch();
  const count = useSelector<CounterState, number>((state) => state?.count || 0);
  const [text, setText] = useState("");
  const inputTextRef = useRef(null);
  const currentCount = useRef(0);
  const theme = useColorScheme();

  // const memoizedText = useMemo(() => {
  //   if (text === "") {
  //     return "Initial";
  //   } else {
  //     return text;
  //   }
  // }, [text]);

  const incrementCountFunction = () => {
    dispatch(actions.incrementCounter());

    if (onUpdated) {
      onUpdated(true);
    }
    currentCount.current++;
    console.log(currentCount.current);
  };

  const incrementCount = useMemo(() => {
    return incrementCountFunction;
  }, [onUpdated]);

  const decrementCount = React.useCallback(() => {
    dispatch(actions.decrementCounter());

    if (onUpdated) {
      onUpdated(false);
    }
    currentCount.current++;
  }, [onUpdated]);

  const updateText = React.useCallback((text) => {
    setText(text);
  }, []);

  useEffect(() => {
    //Focus
    //inputTextRef.current.focus();
  });

  console.log("Render Counter");

  return (
    <View style={styles.mainView}>
      <StyledText>Current Count: {count}</StyledText>
      <StyleButton
        labelStyle={styles.labelStyle}
        title="+"
        onPress={incrementCount}
      ></StyleButton>
      <StyleButton
        labelStyle={styles.labelStyle}
        title="-"
        onPress={decrementCount}
      ></StyleButton>
      {/*<Text>{memoizedText}</Text>*/}
      <StyledInputText
        dark={theme === "dark"}
        value={text}
        ref={inputTextRef}
        onChangeText={updateText}
      ></StyledInputText>
    </View>
  );
};

// const StyledCounter = styled(Counter)`
// `;

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    margin: 20,
    padding: 20,
    flex: 2,
  },
  labelStyle: {
    fontSize: 30,
    textAlign: "center",
  },
});

export const INCREMENT = "INCREMENT";

export default Counter;
