import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Animated,
  Easing,
  TouchableOpacity,
  LogBox,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useEffect, useRef } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

const Success_Component = ({ status, setModalStatus, setGameEnded, start }) => {
  LogBox.ignoreAllLogs();
  var opacity1 = useRef(new Animated.Value(1)).current;
  var opacity2 = useRef(new Animated.Value(1)).current;
  var opacity3 = useRef(new Animated.Value(1)).current;
  const opacities = [opacity1, opacity2, opacity2];
  var scale1 = useRef(new Animated.Value(1)).current;
  var scale2 = useRef(new Animated.Value(1)).current;
  var scale3 = useRef(new Animated.Value(1)).current;
  const scales = [scale1, scale2, scale3];
  var button1 = useRef(new Animated.Value(0)).current;
  var button2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (status) {
      opacity1.setValue(1);
      opacity2.setValue(1);
      opacity3.setValue(1);
      scale1.setValue(1);
      scale2.setValue(1);
      scale3.setValue(1);
      button1.setValue(0);
      button2.setValue(0);
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity1, {
            toValue: 0,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(opacity1, {
            toValue: 1,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity2, {
            toValue: 0,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(opacity1, {
            toValue: 1,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity3, {
            toValue: 0,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(opacity1, {
            toValue: 1,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(scale1, {
            toValue: 2,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(scale1, {
            toValue: 1,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
      Animated.loop(
        Animated.sequence([
          Animated.timing(scale2, {
            toValue: 2,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(scale2, {
            toValue: 1,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
      Animated.loop(
        Animated.sequence([
          Animated.timing(scale3, {
            toValue: 2,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(scale3, {
            toValue: 1,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();

      Animated.timing(button1, {
        toValue: 1,
        duration: 2000,
        delay: 800,
        ease: Easing.linear,
        useNativeDriver: true,
      }).start();

      Animated.timing(button2, {
        toValue: 1,
        duration: 2000,
        delay: 1600,
        ease: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [status]);

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Modal visible={status} animationType="slide">
        <View style={[styles.container]}>
          <View style={[styles.inner, styles.center, { marginTop: hp("8%") }]}>
            {[...Array(3).keys()].map((i) => (
              <Animated.View
                style={[
                  StyleSheet.absoluteFillObject,
                  styles.inner,
                  {
                    backgroundColor: "green",
                    opacity: opacities[i],
                    transform: [
                      {
                        scaleX: scales[i],
                        scaleY: scales[i],
                      },
                    ],
                  },
                ]}
              ></Animated.View>
            ))}
            <Text style={styles.text}>SUCCESS!</Text>
          </View>
          <Animated.View style={{ opacity: button1 }}>
            <TouchableOpacity
              style={[styles.button, { marginTop: hp("20%") }]}
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

export { Success_Component };
var colorTheme = "#F4C3C3";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: hp("10%"),
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    height: 160,
    width: 160,
    borderRadius: 160,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
  button: {
    backgroundColor: "#79E467",
    width: wp("65%"),
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    fontFamily: "Montserrat_500Medium",
    fontSize: 23,
    letterSpacing: 5,
  },
});
