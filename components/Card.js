import React from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";

function SelectNumberInput(props) {
  return (
    <View style={{ ...styles.inputContainer, ...props.style }}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    elevation: 10,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default SelectNumberInput;
