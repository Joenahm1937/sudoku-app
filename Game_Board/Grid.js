import { StyleSheet, Text, View } from 'react-native';
import sudoku from './gameLogic';
import { useState } from 'react';

export default function Grid({level}) {
  var [board, updateBoard] = useState(sudoku.generate(level))
  return (
    <View>
      <View style={styles.board}>
        {board.map((cell,i) => <View key={i} style={styles.cell}>
          <Text>{cell}</Text>
        </View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cell: {
    borderColor: 'black',
    borderWidth: 2,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
