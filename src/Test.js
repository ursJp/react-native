import React from "react";
import { View, Button, Text } from "react-native";

const Test = (props) => {
  console.log(props.age);
  return (
    <View>
      <Text>Name:{props.name}</Text>
      <Text>Age: {props.age}</Text>
    </View>
  );
};

export default Test;
