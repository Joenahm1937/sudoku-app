import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useEffect } from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

export default function Pieces({ lives }) {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    // return <AppLoading />;
    return (
      <View style={styles.container}>
        <Text style={styles.size}>
          Lives: {lives > 0 ? [...Array(lives)].fill("I").join("") : 0}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={[styles.size, styles.family]}>
          Lives: {lives > 0 ? [...Array(lives)].fill("I").join("") : 0}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: hp("8%"),
  },
  size: {
    fontSize: 20,
  },
  family: {
    fontFamily: "Montserrat_400Regular",
  },
});
