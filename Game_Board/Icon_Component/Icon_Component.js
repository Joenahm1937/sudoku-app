import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Icon_Component = ({SVG, onPressFunction, text}) => {
  return(
    <View>
      <TouchableOpacity onPress={() => onPressFunction()}>
          <SVG></SVG>
      </TouchableOpacity>
      <Text>{text}</Text>
    </View>
  );
}

export { Icon_Component };
