import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import color from "../constants/color";

function Header(props) {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  headerAndroid: {
    backgroundColor: color.primary,
  },
  headerIOS: {
    backgroundColor: color.secondary,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
