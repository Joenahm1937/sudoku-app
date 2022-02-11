import { StyleSheet, Text, View, Modal, Button } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";

const Line = (props) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        {
          top: props.top,
          height: props.height,
          left: props.left,
          width: "110%",
        },
      ]}
    >
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 360 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
      >
        <G {...props}>
          <Path
            d="M0 51L61.8596 17L138.545 51L190.18 17L236.702 70L267.888 36L316.966 51L364 2"
            stroke={props.color}
            // stroke-width="3"
          />
        </G>
      </Svg>
    </View>
  );
};

const LineGroup = ({ offset = 0 }) => {
  return (
    <>
      <Line
        strokeWidth={2}
        left={-40}
        top={105 + offset}
        height={110}
        color={"#FF1515"}
      ></Line>
      <Line
        strokeWidth={2}
        left={-15}
        top={80 + offset}
        height={110}
        color={"#F49740"}
      ></Line>
      <Line
        strokeWidth={2}
        left={-20}
        top={85 + offset}
        height={110}
        color={"black"}
      ></Line>
    </>
  );
};

const FillRectangle = ({ top = 0, height }) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        { backgroundColor: "#DD4545", height, top },
      ]}
    ></View>
  );
};

const GameOver_Component = ({ status, setModalStatus, setGameEnded }) => {
  return (
    <Modal visible={status} animationType="slide">
      <View style={styles.container}>
        <FillRectangle height={50} />
        <FillRectangle height={500} top={400} />
        <Line strokeWidth={38} top={0} height={120} color={"#DD4545"}></Line>
        <Line strokeWidth={32} top={368} height={120} color={"#DD4545"}></Line>
        <Line strokeWidth={28} top={30} height={110} color={"#FB7979"}></Line>
        <Line strokeWidth={28} top={340} height={110} color={"#FB7979"}></Line>
        <LineGroup />
        <LineGroup offset={200} />

        {/* <Text style={styles.end}>Game Over</Text>
        <Button
          onPress={() => {
            setModalStatus(false);
            setGameEnded(true);
          }}
          title="Return Home"
        /> */}
      </View>
    </Modal>
  );
};

export { GameOver_Component };
var colorTheme = "#F4C3C3";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  end: {
    fontSize: 30,
    fontWeight: "800",
  },
});
