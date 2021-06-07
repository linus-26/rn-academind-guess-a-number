import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import Card from "../components/Card.js";
import MainButton from "../components/MainButton.js";
import NumberContainer from "../components/NumberContainer.js";
import color from "../constants/color.js";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../components/BodyText.js";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (guess, numOfRound) => (
  <View key={guess} style={styles.listItem}>
    <BodyText>#{numOfRound}: </BodyText>
    <BodyText>{guess}</BodyText>
  </View>
);

function InGameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      console.log("GameOver");
      props.numberOfRoundsHandler(pastGuesses.length);
    }
  }, [currentGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction == "lower" && currentGuess < props.userNumber) ||
      (direction == "greater" && currentGuess > props.userNumber)
    ) {
      Alert.alert(
        "Don't lie!",
        "You pressed the wrong Button. That's cheating!"
      );
      return;
    }

    if (direction == "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses((curPastGuess) => [nextNumber, ...curPastGuess]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.oppGuessText}>Opponent's guess</Text>
      <NumberContainer number={currentGuess} />
      <Card style={styles.buttoncard}>
        <View style={styles.buttons}>
          <MainButton
            title={<Ionicons name="md-remove" size={24} color="white" />}
            color={color.accent}
            onPress={() => {
              nextGuessHandler("lower");
            }}
          />
        </View>
        <View style={styles.button}>
          <MainButton
            title={<Ionicons name="md-add" size={24} color="white" />}
            color={color.accent}
            onPress={() => {
              nextGuessHandler("greater");
            }}
          />
        </View>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    flex: 1,
  },
  oppGuessText: {
    marginVertical: 10,
    fontFamily: "open-sans",
    fontSize: 16,
  },
  buttoncard: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    borderWidth: 1,
    borderColor: color.primary,
  },
  buttons: {
    //width: "50%",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    backgroundColor: color.secondary,
    borderRadius: 20,
    width: "30%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  list: {
    flex: 1,
    width: "80%",
  },
});

export default InGameScreen;
