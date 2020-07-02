import React, { useState, useContext, useRef } from "react";
import { View, Button } from "react-native";
import { Text } from "../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import { CounterState } from "../types/state";

type CounterProps = {
  initialValue: number;
};

const Counter = (props: CounterProps) => {
  //const [count, setCount] = useState<number>(props.initialValue);
  //const { state, dispatch } = useContext(StateContext);
  const dispatch = useDispatch();
  const count = useSelector<CounterState, number>((state) => state?.count || 0);

  function incrementCount() {
    dispatch(actions.incrementCounter());
  }

  function decrementCount() {
    dispatch(actions.decrementCounter());
  }

  return (
    <View>
      <Text lightColor="rgba(0,0,0,0.8)" darkColor="rgba(255,255,255,0.8)">
        Current Count: {count}
      </Text>
      <Button title="+" onPress={incrementCount}></Button>
      <Button title="-" onPress={decrementCount}></Button>
    </View>
  );
};

Counter.defaultProps = {
  initialValue: 10,
};

export const INCREMENT = "INCREMENT";

export default Counter;
