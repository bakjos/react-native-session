import * as React from "react";
import { StyleSheet, Button } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import CounterTest from "./Counter";

export default function TabOneScreen() {
  const [toggle, setToggle] = React.useState<boolean>(false);

  // const onUpdated = () => {
  //   setToggle((toggle) => !toggle);
  // };

  const onUpdated = React.useCallback(() => {
    setToggle((toggle) => !toggle);
  }, [setToggle]);

  return (
    <View style={styles.container}>
      <Text>Toggle: {toggle ? "True" : "False"}</Text>
      <CounterTest onUpdated={onUpdated}></CounterTest>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
