import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
const Temporary_View_Navigator = (props = {navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Temporary Navigator</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => props.navigation.navigate("gameBoard")}
        title="Navigate to Game Board"
        >
        Navigate
      </Button>
      <Button
        onPress={() => props.navigation.navigate("homepage")}
        title="Navigate to Home Page"
        >
        Navigate
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Temporary_View_Navigator };
