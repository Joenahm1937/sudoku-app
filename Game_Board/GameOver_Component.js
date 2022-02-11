import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { useRef, useEffect } from "react";
import AppLoading from "expo-app-loading";

const Line = (props) => {
  var shift = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.status) {
      if (props.rev) {
        Animated.loop(
          Animated.sequence([
            Animated.timing(shift, {
              toValue: -10,
              duration: 3000,
              ease: Easing.ease,
              useNativeDriver: true,
            }),
            Animated.timing(shift, {
              toValue: 10,
              duration: 3000,
              ease: Easing.ease,
              useNativeDriver: true,
            }),
          ])
        ).start();
      } else {
        Animated.loop(
          Animated.sequence([
            Animated.timing(shift, {
              toValue: 10,
              duration: 2000,
              ease: Easing.ease,
              useNativeDriver: true,
            }),
            Animated.timing(shift, {
              toValue: 0,
              duration: 2000,
              ease: Easing.ease,
              useNativeDriver: true,
            }),
          ])
        ).start();
      }
    }
  }, []);

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          top: props.top,
          height: props.height,
          left: props.left,
          width: "110%",
        },
        { transform: [{ translateX: shift }] },
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
    </Animated.View>
  );
};

const LineGroup = ({ offset = 0, status }) => {
  return (
    <>
      <Line
        strokeWidth={2}
        left={-40}
        top={105 + offset}
        height={110}
        color={"#FF1515"}
        rev={true}
        status={status}
      ></Line>
      <Line
        strokeWidth={2}
        left={-15}
        top={80 + offset}
        height={110}
        color={"#F49740"}
        rev={true}
        status={status}
      ></Line>
      <Line
        strokeWidth={2}
        left={-20}
        top={85 + offset}
        height={110}
        color={"black"}
        status={status}
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

const GameOver_Component = ({
  status,
  setModalStatus,
  setGameEnded,
  start,
}) => {
  var button1 = useRef(new Animated.Value(0)).current;
  var button2 = useRef(new Animated.Value(0)).current;
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  useEffect(() => {
    if (status) {
      button1.setValue(0);
      button2.setValue(0);

      Animated.timing(button1, {
        toValue: 1,
        duration: 2000,
        delay: 1000,
        ease: Easing.linear,
        useNativeDriver: true,
      }).start();

      Animated.timing(button2, {
        toValue: 1,
        duration: 2000,
        delay: 2000,
        ease: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [status]);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Modal visible={status} animationType="fade">
        <View style={styles.container}>
          <FillRectangle height={50} />
          <FillRectangle height={500} top={400} />
          <Line
            strokeWidth={38}
            top={0}
            height={120}
            color={"#DD4545"}
            status={status}
          ></Line>
          <Line
            strokeWidth={32}
            top={368}
            height={120}
            color={"#DD4545"}
            status={status}
          ></Line>
          <Line
            strokeWidth={28}
            top={30}
            height={110}
            color={"#FB7979"}
            status={status}
          ></Line>
          <Line
            strokeWidth={28}
            top={340}
            height={110}
            color={"#FB7979"}
            status={status}
          ></Line>
          <LineGroup status={status} />
          <LineGroup offset={200} status={status} />
          <View style={[styles.center, { marginTop: 220 }]}>
            <Text style={styles.text}>Game Over</Text>
          </View>
          <Animated.View style={{ opacity: button1 }}>
            <TouchableOpacity
              style={[styles.button, { marginTop: 210 }]}
              onPress={() => {
                setModalStatus(false);
                setGameEnded(true);
              }}
            >
              <Text style={styles.buttonText}>MainMenu</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ opacity: button2 }}>
            <TouchableOpacity
              style={[styles.button, { marginTop: hp("6%") }]}
              onPress={() => {
                setModalStatus(false);
                start();
              }}
            >
              <Text style={styles.buttonText}>Restart</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    );
  }
};

export { GameOver_Component };
var colorTheme = "#F4C3C3";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "Montserrat_600SemiBold",
    color: "#F80E0E",
  },
  button: {
    backgroundColor: "black",
    width: wp("65%"),
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "Montserrat_500Medium",
    fontSize: 23,
    letterSpacing: 5,
  },
});
