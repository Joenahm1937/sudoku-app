import React, { useState, useEffect } from 'react';
import {View, Text, Pressable} from 'react-native';
import { Audio } from "expo-av";
import styles from './styles';
import sudoku from "../../Game_Board/gameLogic";
import { TouchableOpacity } from 'react-native-gesture-handler';
const difficultyMappings = {
  EASY: 53,
  MEDIUM: 44,
  HARD: 35,
};

const LargeButton = ({
  content,
  ID,
  navigation,
  difficulty,
  gameMode,
  lives,
  colorTheme,
}) => {
    const [buttonSound, setButtonSound] = useState();

    async function playButtonSound() {
        await buttonSound.replayAsync();
    }

    async function initAudio() {
        console.log("Intializing HomePage Audio Files");
        const buttonAudioObject = new Audio.Sound();
        try {
            await buttonAudioObject.loadAsync(require("../../Game_Board/Sounds/main_buttons.mp3"));
            console.log('Button Press audio Initialized')
          } catch (err) {
            console.error(err);
          }
          setButtonSound(buttonAudioObject);
    }

    useEffect(() => {
        initAudio();
        return () => {
          buttonSound.unloadAsync();
        };
      }, []);

    const Navigate_GameBoard = () => {
        playButtonSound()
        if (ID == "1") {
          if (difficulty === "DIFFICULTY" || gameMode === "GAME MODE" || lives === "LIVES") return;
          var [unsolvedBoard, solvedBoard] = sudoku.generate(
            difficultyMappings[difficulty]
          );
          navigation.navigate("gameBoard", { difficulty, lives, gameMode, colorTheme, unsolvedBoard, solvedBoard });
        }
    }

  return (
    <View style={styles.button_container}>
      <TouchableOpacity style={[{"backgroundColor": colorTheme.tileColor}, styles.large_button]} onPress={Navigate_GameBoard}>
        <Text style={styles.button_text}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LargeButton;
