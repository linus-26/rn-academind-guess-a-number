import React from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import color from "../constants/color";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOverTitle}>Game Over</Text>
      <Image
        style={styles.imageStyle}
        source={require("../assets/images/success.png")}
        //oder source={{uri: "Link vom Bild"}}
        resizeMode="cover"
      />
      <View style={styles.bodyTextContainer}>
        <BodyText style={styles.bodyText}>
          Number device needed{" "}
          <Text style={styles.highlight}>{props.numberOfRounds}</Text> rounds to
          guess your number{" "}
          <Text style={styles.highlight}>{props.userNumber}.</Text>
        </BodyText>
      </View>
      <MainButton
        title="New Game"
        onPress={props.newGameHandler}
        color={color.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  gameOverTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  imageStyle: {
    marginVertical: 20,
    width: "80%",
    height: 300,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 3,
  },
  highlight: {
    color: color.accent,
  },
  bodyTextContainer: {
    width: "80%",
  },
  bodyText: {
    textAlign: "center",
    color: color.mainfontcolor,
    fontSize: 20,
    marginBottom: 20,
  },
});

export default GameOverScreen;
