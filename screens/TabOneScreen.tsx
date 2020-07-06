import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import CounterTest from "./Counter";

export default function TabOneScreen() {
  const [toggle, setToggle] = React.useState(false);

  const onUpdated = React.useCallback((increment) => {
    console.log("Increment", increment);
    setToggle(!toggle);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Toggle: {toggle ? "true" : "false"}</Text>
      <CounterTest onUpdated={onUpdated} />
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
