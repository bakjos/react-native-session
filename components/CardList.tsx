import React from "react";
import { ScrollView, View, StyleSheet, Image, FlatList } from "react-native";

const images = Array.from(new Array(10)).map(
  (_, i) => `https://picsum.photos/400/200?random=${i}`
);

type CardListProps = {};

const CardList = () => {
  return (
    <ScrollView style={[styles.mainScroll]}>
      <View>
        <FlatList
          style={{ padding: 10 }}
          data={images}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Image style={styles.imageStyle} source={{ uri: item }} />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainScroll: {
    flex: 1,
    width: "100%",
  },
  imageStyle: {
    width: "100%",
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default CardList;
