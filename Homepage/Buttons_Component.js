import { styles } from "./Styles";
import Large_button from "./Large_button/button";
import { View } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Button_Component = (
  props = {
    navigation,
    difficulty,
    gameMode,
    lives,
    colorTheme,
    prevGame
  }
) => {
  const [storedGame, setStoredGame] = useState();
  const getGame = async () => {
    try {
      const gameState = await AsyncStorage.getItem("currentGame");
      if (gameState !== null) {
        setStoredGame(gameState);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(async () => {
    await getGame()
  }, []);

  return (
    <View style={styles.buttonContainer}>
      <Large_button
        content="n e w g a m e"
        ID="1"
        navigation={props.navigation}
        difficulty={props.difficulty}
        gameMode={props.gameMode}
        lives={props.lives}
        colorTheme={props.colorTheme}
      />
      {storedGame && <Large_button
        gameState={props.prevGame ? props.prevGame : storedGame}
        content="r e s u m e"
        ID="0"
        navigation={props.navigation}
        colorTheme={props.colorTheme}
      />}
    </View>
  );
};

export { Button_Component };
