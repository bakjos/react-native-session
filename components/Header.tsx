import React from "react";
import { View, StyleSheet, Text, Animated } from "react-native";

type HeaderProps = {};

const Header = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.text}>Header</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    height: 200,
    width: "100%",
    padding: 10,
  },
  header: {
    flex: 1,
    width: "100%",
    height: 200,
    backgroundColor: "purple",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
});

export default Header;
