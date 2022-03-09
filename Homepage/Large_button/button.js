import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const LargeButton = ({
  content,
  ID,
  navigation,
  difficulty,
  gameMode,
  lives,
  colorTheme,
}) => {
  const Navigate_GameBoard = () => {
    if (ID == "1") {
      if (
        difficulty === "DIFFICULTY" ||
        gameMode === "GAME MODE" ||
        lives === "LIVES"
      )
        return;
      navigation.navigate("gameBoard", { difficulty, lives, gameMode, colorTheme });
    }
  };

  // if (difficulty === "DIFFICULTY" || gameMode === "GAME MODE" || lives !== "LIVES") return;

  return (
    <View style={styles.button_container}>
      <Pressable style={[{"backgroundColor": colorTheme.tileColor}, styles.large_button]} onPress={Navigate_GameBoard}>
        <Text style={styles.button_text}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default LargeButton;
