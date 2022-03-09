import { styles } from "./Styles";
import Large_button from "./Large_button/button";
import { View } from "react-native";

const Button_Component = (
  props = {
    navigation,
    difficulty,
    gameMode,
    lives,
    colorTheme
  }
) => {
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
      <Large_button
        content="r e s u m e"
        ID="0"
        navigation={props.navigation}
        colorTheme={props.colorTheme}
      />
    </View>
  );
};

export { Button_Component };
