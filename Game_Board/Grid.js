import { StyleSheet, Text, View } from 'react-native';
import sudoku from './gameLogic';
import { useState } from 'react';

var Cell = ({cell}) => {
  return <View style={styles.cell}><Text>{cell}</Text></View>
}

var Square = ({square, margin}) => {
  var margins = margin ? margin.map(dir => styles[dir]) : [];
  return <View style={[styles.square, ...margins]}>
    {/* {square.map((cell, i) => <Cell key={i} cell={cell}/>)} */}
  </View>
}

export default function Grid({level}) {
  var [board, updateBoard] = useState(sudoku.generate(level))
  return (
    <View style={styles.board}>
      {/* {board.map((square,i) => <Square key={i} square={square}/>)} */}
      <Square square={board[0]} margin={['right', 'bottom']}/>
      <Square square={board[1]} margin={['right', 'bottom', 'left']}/>
      <Square square={board[2]} margin={['left', 'bottom']}/>
      <Square square={board[3]} margin={['top', 'right', 'bottom']}/>
      <Square square={board[4]} margin={['top', 'right', 'bottom', 'left']}/>
      <Square square={board[5]} margin={['top', 'left', 'bottom']}/>
      <Square square={board[6]} margin={['right', 'bottom']}/>
      <Square square={board[7]} margin={['right', 'bottom']}/>
      <Square square={board[8]} margin={['right', 'bottom']}/>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'pink',
  },
  right: {
    marginRight: 4
  },
  left: {
    marginLeft: 4
  },
  bottom: {
    marginBottom: 4
  },
  top: {
    marginTop: 4
  },
  square: {
    height: 120,
    width: 120,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2

    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cell: {
    // borderColor: 'black',
    // borderWidth: 0.5,
    // height: 38,
    // width: 38,
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
