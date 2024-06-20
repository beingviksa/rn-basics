import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
  },
});

export default BoxScreen;
