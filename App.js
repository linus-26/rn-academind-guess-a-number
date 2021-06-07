import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header.js";

import StartGameScreen from "./screens/StartGameScreen.js";
import InGameScreen from "./screens/InGameScreen.js";
import GameOverScreen from "./screens/GameOverScreen.js";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const newGameHandler = () => {
    setUserNumber();
    setNumberOfRounds(0);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const numberOfRoundsHandler = (rounds) => {
    console.log("numberOfRoundsHandler()");
    setNumberOfRounds(rounds);
  };

  screen = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber && numberOfRounds == 0) {
    screen = (
      <InGameScreen
        userNumber={userNumber}
        numberOfRoundsHandler={numberOfRoundsHandler}
      />
    );
  } else if (numberOfRounds > 0) {
    screen = (
      <GameOverScreen
        numberOfRounds={numberOfRounds}
        userNumber={userNumber}
        newGameHandler={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
});
