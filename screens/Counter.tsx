import React, { useState, useRef, useMemo, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../components/Themed";
import Button from "../components/Button";
import StyledInputText from "../components/StyledInputText";
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

  const incrementCount = useMemo(() => {
    const incrementCountFunction = () => {
      dispatch(actions.incrementCounter());

      if (onUpdated) {
        onUpdated(true);
      }
      currentCount.current++;
      console.log(currentCount.current);
    };
    return incrementCountFunction;
  }, [dispatch, onUpdated]);

  const decrementCount = React.useCallback(() => {
    dispatch(actions.decrementCounter());

    if (onUpdated) {
      onUpdated(false);
    }
    currentCount.current--;
  }, [dispatch, onUpdated]);

  const updateText = React.useCallback((t: string) => {
    setText(t);
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
      />
      <StyleButton
        labelStyle={styles.labelStyle}
        title="-"
        onPress={decrementCount}
      />
      {/*<Text>{memoizedText}</Text>*/}
      <StyledInputText
        dark={theme === "dark"}
        value={text}
        ref={inputTextRef}
        onChangeText={updateText}
      />
    </View>
  );
};

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

export default React.memo(Counter);
