import { StyleSheet, Text, View } from 'react-native';
import sudoku from './gameLogic';
import { useState } from 'react';

var Cell = ({cell}) => {
  return <View style={styles.cell}><Text>{cell}</Text></View>
}

var Square = ({square}) => {
  return <View style={styles.square}>
    {square.map((cell, i) => <Cell key={i} cell={cell}/>)}
  </View>
}

export default function Grid({level}) {
  var [board, updateBoard] = useState(sudoku.generate(level))
  return (
    <View>
      <View style={styles.board}>
        {board.map((square,i) => <Square key={i} square={square}/>)}
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
  square: {
    borderColor: 'black',
    borderWidth: 0.5,
    height: 120,
    width: 120,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    borderColor: 'black',
    borderWidth: 0.5,
    height: 38,
    width: 38,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
