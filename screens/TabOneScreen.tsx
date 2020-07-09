import * as React from "react";
import { StyleSheet, Button } from "react-native";

import { Text, View } from "../components/Themed";

import CounterTest from "./CounterClass";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type RootNavigationProp = StackNavigationProp<RootStackParamList, "Root">;

export default function TabOneScreen() {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const navigation = useNavigation<RootNavigationProp>();

  // const onUpdated = () => {
  //   setToggle((toggle) => !toggle);
  // };

  const onUpdated = React.useCallback(() => {
    setToggle((prevToggle) => !prevToggle);
  }, [setToggle]);

  const onNextScreen = React.useCallback(() => {
    navigation.push("Scrollable");
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Toggle: {toggle ? "True" : "False"}</Text>
      <CounterTest onUpdated={onUpdated} />
      <Button title=">" onPress={onNextScreen} />
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
