import React, { useState, useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const colorReducer = (state, action) => {
  switch (action.type) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => {
          dispatch({ type: "red", amount: 15 });
        }}
        onDecrease={() => {
          dispatch({ type: "red", amount: -15 });
        }}
      />
      <ColorCounter
        color="green"
        onIncrease={() => {
          dispatch({ type: "green", amount: 15 });
        }}
        onDecrease={() => {
          dispatch({ type: "green", amount: -15 });
        }}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => {
          dispatch({ type: "blue", amount: 15 });
        }}
        onDecrease={() => {
          dispatch({ type: "blue", amount: -15 });
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
