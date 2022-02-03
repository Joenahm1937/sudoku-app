import { StyleSheet, Text, View, Modal, Button } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import { Icon_Component } from "./Icon_Component/Icon_Component";
import { Exit_Icon } from "./Icon_Component/Icons";

const HintsModal = ({
  setTarget,
  status,
  setModalStatus,
  hint,
  setHintLoc,
  colorTheme,
}) => {
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Modal transparent visible={status} animationType="fade">
        <View style={styles.container}>
          <View style={[styles.content, colorTheme]}>
            <View style={styles.header}>
              <Icon_Component
                SVG={Exit_Icon}
                onPressFunction={() => {
                  setModalStatus(false);
                  setHintLoc([]);
                  setTarget([hint[1], hint[2]]);
                }}
              ></Icon_Component>
            </View>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Possible</Text>
              <Text style={styles.title}>Values:</Text>
            </View>
            <View style={styles.values}>
              <Text style={styles.nums}>
                {hint ? hint[0].split("").join(" ") : null}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
};

export { HintsModal };
var colorTheme = "#F4C3C3";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    marginBottom: hp("10%"),
    height: hp("30%"),
    width: wp("90%"),
    padding: 20,
    borderRadius: 20,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 3, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  header: {
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 30,
    color: "white",
    letterSpacing: 2,
    fontFamily: "Montserrat_800ExtraBold",
  },
  titleWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  values: {
    height: hp("10%"),
    width: wp("70%"),
    backgroundColor: "white",
    marginVertical: hp("2%"),
    borderRadius: 10,
    shadowColor: "rgba(0,0,0, .6)", // IOS
    shadowOffset: { height: 3, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    justifyContent: "center",
    alignItems: "center",
  },
  nums: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
  },
});
