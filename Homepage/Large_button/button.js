import React, { useState, useEffect } from 'react';
import {View, Text, Pressable} from 'react-native';
import { Audio } from "expo-av";
import styles from './styles';

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
          navigation.navigate("gameBoard", { difficulty, lives, gameMode, colorTheme });
        }
    }

  return (
    <View style={styles.button_container}>
      <Pressable style={[{"backgroundColor": colorTheme.tileColor}, styles.large_button]} onPress={Navigate_GameBoard}>
        <Text style={styles.button_text}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default LargeButton;
