import React from "react";
import { View, StyleSheet, Text } from "react-native";
import color from "../constants/color";

function Header(props) {
  return (
    <View style={{ ...styles.header }}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 8,
    backgroundColor: color.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
