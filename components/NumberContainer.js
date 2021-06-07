import React from "react";
import { Text } from "react-native";

import Card from "../components/Card.js";
import color from "../constants/color.js";

function NumberContainer(props) {
  return (
    <Card style={{ width: "20%", backgroundColor: color.accent2 }}>
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          fontFamily: "open-sans-bold",
        }}
      >
        {props.number}
      </Text>
    </Card>
  );
}

export default NumberContainer;
