import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const intialState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
  }
};

const CounterScreeen = () => {
  const [state, dispatch] = useReducer(counterReducer, intialState);
  // const [count, setCount] = useState(0);

  // const increament = () => {
  //   setCount((prev) => prev + 1);
  // };

  // const decreament = () => {
  //   setCount((prev) => prev - 1);
  // };
  return (
    <View>
      {/* <Button title="Increment" onPress={increament} />
      <Button title="Decrement" onPress={decreament} /> */}
      <Button
        title="Increment"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: "decrement" })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreeen;
