import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import color from "../constants/color";
import BodyText from "./BodyText";

function MainButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={{ ...styles.viewstyle, backgroundColor: props.color }}>
        <BodyText style={styles.textstyle}>{props.title}</BodyText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textstyle: {
    marginHorizontal: 30,
    marginVertical: 12,
    color: "white",
    fontSize: 17,
  },
  viewstyle: {
    borderRadius: 20,
    color: color.primary,
  },
});
export default MainButton;
