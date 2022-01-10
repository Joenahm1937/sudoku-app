import { StyleSheet, Text, View } from 'react-native';
import sudoku from './gameLogic';
import { useState } from 'react';

var Cell = ({cell}) => {
  return <View style={styles.cell}><Text>{cell}</Text></View>
}

var Square = ({square, margin}) => {
  var margins = margin ? margin.map(dir => styles[dir]) : [];
  return <View style={[styles.square, ...margins]}>
    {square.map((cell, i) => <Cell key={i} cell={cell}/>)}
  </View>
}

export default function Grid({level}) {
  var [board, updateBoard] = useState(sudoku.generate(level))
  return (
    <View style={styles.board}>
      {/* {board.map((square,i) => <Square key={i} square={square}/>)} */}
      <Square square={board[0]} margin={['right', 'bottom']}/>
      <Square square={board[1]} margin={['right', 'bottom']}/>
      <Square square={board[2]} margin={['bottom']}/>
      <Square square={board[3]} margin={['right', 'bottom']}/>
      <Square square={board[4]} margin={['right', 'bottom']}/>
      <Square square={board[5]} margin={['bottom']}/>
      <Square square={board[6]} margin={['right']}/>
      <Square square={board[7]} margin={['right']}/>
      <Square square={board[8]}/>
    </View>
  );
}

var marginWidth = 5;

const styles = StyleSheet.create({
  board: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'pink',
  },
  right: {
    marginRight: marginWidth
  },
  left: {
    marginLeft: marginWidth
  },
  bottom: {
    marginBottom: marginWidth
  },
  top: {
    marginTop: marginWidth
  },
  square: {
    height: 126,
    width: 126,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    height: 38,
    width: 38,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
