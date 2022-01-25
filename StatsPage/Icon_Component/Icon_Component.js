import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Icon_Component = ({SVG, onPressFunction}) => {
  return(
    <View>
      <TouchableOpacity onPress={() => onPressFunction()}>
          <SVG></SVG>
      </TouchableOpacity>
    </View>
  );
}

export { Icon_Component };