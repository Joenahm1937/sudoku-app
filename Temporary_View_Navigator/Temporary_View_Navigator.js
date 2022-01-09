import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
const Temporary_View_Navigator = (props = {navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Temporary Navigator</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => props.navigation.navigate("boardGrid")}
        title="Navigate to Grid"
        >
        Navigate
      </Button>
    </View>
  );
};

const Test_Component2 = () => {
  return (
    <View style={styles.container}>
      <Text>View 2!</Text>
      <StatusBar style="auto" />
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

export { Temporary_View_Navigator, Test_Component2 };
