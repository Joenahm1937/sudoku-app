import { View, Text } from "react-native";
import { useState } from "react";
import { styles } from "./Styles.js";
import { Left_Arrow, Right_Arrow } from "./icon_button/Icons";
import { IconButton } from "./icon_button/IconButton";

const Selections_Component = ({
  difficulty,
  setDifficulty,
  gameMode,
  setGameMode,
  lives,
  setLives,
}) => {
  const [diffIdx, setDiffIdx] = useState(-1);
  const [modeIdx, setModeIdx] = useState(-1);
  const [livesIdx, setLivesIdx] = useState(-1);

  const diff = ["EASY", "MEDIUM", "HARD"];
  const mode = ["CLASSIC", "CLOCK RACE"];
  const live = ["LIVES: I", "LIVES: II", "LIVES: III", "LIVES: ∞"];

  const cycle = (flag, index, setIndex, setSelection, selection) => {
    let newIndex;
    if (flag == "left") {
      if (index === 0) {
        newIndex = selection.length - 1;
      } else if (index < 0) {
        newIndex = selection.length - 1;
      } else {
        newIndex = index - 1;
      }
    } else if (flag == "right") {
      if (index === selection.length - 1) {
        newIndex = 0;
      } else if (index < 0) {
        newIndex = 0;
      } else {
        newIndex = index + 1;
      }
    }
    setIndex(newIndex);
    setSelection(selection[newIndex]);
  };

  const cycleDifficulty = (flag) =>
    cycle(flag, diffIdx, setDiffIdx, setDifficulty, diff);
  const cycleMode = (flag) =>
    cycle(flag, modeIdx, setModeIdx, setGameMode, mode);
  const cycleLives = (flag) =>
    cycle(flag, livesIdx, setLivesIdx, setLives, live);

  return (
    <View style={styles.selectionsContainer}>
      <View style={styles.selectButton}>
        <View style={styles.leftArrow}>
          <IconButton
            SVG={Left_Arrow}
            onPressFunction={() => cycleDifficulty("left")}
          ></IconButton>
        </View>
        <View style={styles.selectText}>
          <Text>{difficulty}</Text>
        </View>
        <View style={styles.rightArrow}>
          <IconButton
            SVG={Right_Arrow}
            onPressFunction={() => cycleDifficulty("right")}
          ></IconButton>
        </View>
      </View>

      <View style={styles.selectButton}>
        <View style={styles.leftArrow}>
          <IconButton
            SVG={Left_Arrow}
            onPressFunction={() => cycleMode("left")}
          ></IconButton>
        </View>
        <View style={styles.selectText}>
          <Text>{gameMode}</Text>
        </View>
        <View style={styles.rightArrow}>
          <IconButton
            SVG={Right_Arrow}
            onPressFunction={() => cycleMode("right")}
          ></IconButton>
        </View>
      </View>

      <View style={styles.selectButton}>
        <View style={styles.leftArrow}>
          <IconButton
            SVG={Left_Arrow}
            onPressFunction={() => cycleLives("left")}
          ></IconButton>
        </View>
        <View style={styles.selectText}>
          <Text>{lives}</Text>
        </View>
        <View style={styles.rightArrow}>
          <IconButton
            SVG={Right_Arrow}
            onPressFunction={() => cycleLives("right")}
          ></IconButton>
        </View>
      </View>
    </View>
  );
};

export { Selections_Component };
