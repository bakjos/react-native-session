import React from "react";

import { View } from "react-native";

import Header from "../components/Header";
import CardList from "../components/CardList";

const Scrollable = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header />
      <CardList />
    </View>
  );
};

export default Scrollable;
