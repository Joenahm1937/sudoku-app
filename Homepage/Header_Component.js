import { styles } from "./Styles";
import { View, Text } from "react-native";
import { IconButton } from "./icon_button/IconButton";
import { Sound_Icon, Calendar, Pallete_Icon } from "./icon_button/Icons";
import { useState } from "react";

const colorMap = [{
  tileColor: "#F4C3C3",
  backgroundColor: "white"
}, {
  tileColor: "grey",
  backgroundColor: "rgba(0,0,0,0.7)"
}, {
  tileColor: "#B2D7AC",
  backgroundColor: "#AEA6E2"
}];

const Header_Component = ({ colorTheme, setColorTheme }) => {
  const [colorIndex, setColorIndex] = useState(1)
  return (
    <View style={styles.headerContainer}>
      <View style={styles.soundContainer}>
        <IconButton
          SVG={Sound_Icon}
          onPressFunction={() => {
            console.warn("sound pressed");
          }}
        ></IconButton>
      </View>

      <View style={[{"backgroundColor": colorTheme.tileColor},styles.calendarContainer]}>
        <IconButton
          SVG={Calendar}
          onPressFunction={() => {
            console.warn("calendar pressed");
          }}
        ></IconButton>
      </View>

      <View style={styles.palleteContainer}>
        <IconButton
          SVG={Pallete_Icon}
          onPressFunction={() => {
            setColorTheme(colorMap[colorIndex % 3])
            setColorIndex(colorIndex + 1)
          }}
        ></IconButton>
      </View>
    </View>
  );
};

export { Header_Component };
