import { StyleSheet, Text, View } from 'react-native';
import sudoku from './gameLogic';

export default function Grid() {
  return (
    <View style={styles.container}>
      <Text>{sudoku.generate('easy')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
