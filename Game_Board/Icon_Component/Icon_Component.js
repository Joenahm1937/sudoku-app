import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Icon_Component = ({SVG}) => {
  return(
    <View>
      <TouchableOpacity>
          <SVG></SVG>
      </TouchableOpacity>
    </View>
  );
}

export { Icon_Component };
