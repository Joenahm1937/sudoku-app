import { styles } from "./Styles";
import { View, Text } from "react-native";
import { IconButton } from "./icon_button/IconButton";
import { Sound_Icon, Calendar, Pallete_Icon } from "./icon_button/Icons";
import { useState } from "react";
import Pallete from "./Pallete";

const colorMap = [{
  //OG
  tileColor: "#F4C3C3",
  backgroundColor: "white"
}, {
  //black
  tileColor: "grey",
  backgroundColor: "rgba(0,0,0,0.7)"
}, {
  //lavender
  tileColor: "#B2D7AC",
  backgroundColor: "#AEA6E2"
}];

const Header_Component = ({ colorTheme, setColorTheme }) => {
  const [colorIndex, setColorIndex] = useState(1)
  return (
    <View style={styles.headerContainer}>
      <View style={{left:30, top:10}}>
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
      
      <Pallete style={{top:10, right:50}}
       setColorTheme={setColorTheme}>
       </Pallete>

      {/*<View style={styles.palleteContainer}>
        <IconButton
          SVG={Pallete_Icon}
          onPressFunction={() => {
            setColorTheme(colorMap[colorIndex % 3])
            setColorIndex(colorIndex + 1)
          }}
        ></IconButton>
        </View> */}
    </View>
  );
};

export { Header_Component };
