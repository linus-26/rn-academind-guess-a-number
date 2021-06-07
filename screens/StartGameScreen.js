import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Keyboard,
} from "react-native";
import Card from "../components/Card.js";
import Input from "../components/Input.js";
import MainButton from "../components/MainButton.js";
import NumberContainer from "../components/NumberContainer.js";
import color from "../constants/color.js";

function StartGameScreen(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (value) => {
    if (value % 1 == 0) {
      setEnteredValue(value);
    }
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const val = parseInt(enteredValue);
    if (isNaN(val) || val < 1) {
      Alert.alert(
        (title = "Invalide Number"),
        (message = "Please enter a valide Number between 1 and 99.")
      );
      resetInputHandler();
      return;
    }
    setConfirmed(true);
    setSelectedNumber(val);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={{ fontFamily: "open-sans" }}>Chosen Number</Text>
        <View style={{ height: 10 }} />
        <NumberContainer number={selectedNumber} />
        <View style={{ height: 10 }} />
        <MainButton
          title="Start Game"
          color={color.primary}
          onPress={() => {
            props.startGameHandler(selectedNumber);
          }}
        />
      </Card>
    );
  } else {
    confirmedOutput = null;
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={{ alignItems: "center", width: "80%" }}>
        <Text style={{ fontFamily: "open-sans" }}>Select a Number</Text>
        <Input
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={(value) => numberInputHandler(value)}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.inputButtons}>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color={color.secondary}
            />
          </View>
          <View style={styles.inputButtons}>
            <Button
              title="Confirm"
              onPress={confirmInputHandler}
              color={color.primary}
            />
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputButtons: {
    width: "30%",
  },
  input: {
    width: "15%",
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 30,
    alignItems: "center",
  },
});

export default StartGameScreen;
