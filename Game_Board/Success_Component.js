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
  var index = useRef(new Animated.Value(0)).current;
  var button1 = useRef(new Animated.Value(0)).current;
  var button2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (status) {
      index.setValue(0);
      button1.setValue(0);
      button2.setValue(0);
      Animated.timing(index, {
        toValue: 1,
        duration: 2000,
        ease: Easing.linear,
        useNativeDriver: true,
      }).start();

      Animated.timing(button1, {
        toValue: 1,
        duration: 2000,
        delay: 3000,
        ease: Easing.linear,
        useNativeDriver: true,
      }).start();

      Animated.timing(button2, {
        toValue: 1,
        duration: 2000,
        delay: 4000,
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
          <Animated.View
            style={[
              styles.outer,
              styles.center,
              {
                opacity: index,
                transform: [
                  {
                    scaleX: index.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.25, 1],
                    }),
                  },
                  {
                    scaleY: index.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.25, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            <Animated.View
              style={[styles.midOuter, styles.center, { opacity: index }]}
            >
              <Animated.View
                style={[styles.midInner, styles.center, { opacity: index }]}
              >
                <View style={[styles.inner, styles.center]}>
                  <Text style={styles.text}>SUCCESS!</Text>
                </View>
              </Animated.View>
            </Animated.View>
          </Animated.View>
          <Animated.View style={{ opacity: button1 }}>
            <TouchableOpacity
              style={styles.button}
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
              style={styles.button}
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
  outer: {
    height: 360,
    width: 360,
    borderRadius: 340,
    backgroundColor: "#337D19",
  },
  midOuter: {
    height: 320,
    width: 320,
    borderRadius: 240,
    backgroundColor: "#16F22C",
  },
  midInner: {
    height: 280,
    width: 280,
    borderRadius: 220,
    backgroundColor: "#CAF3C3",
  },
  inner: {
    height: 240,
    width: 240,
    borderRadius: 160,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 35,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
  button: {
    marginTop: hp("6%"),
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
