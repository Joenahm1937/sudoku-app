import { StyleSheet, Text, View } from 'react-native';
import sudoku from './gameLogic';
import { useState } from 'react';

var Cell = ({cell}) => {
  return <View style={styles.cell}><Text>{cell}</Text></View>
}

var Square = ({square, margin}) => {
  var margins = margin ? margin.map(dir => styles[dir]) : [];
  return <View style={[styles.square, ...margins]}>
    <Cell cell={square[0]} margin={['cellTop', 'left']}/>
    <View style={styles.sideLine}></View>
    <Cell cell={square[1]}/>
    <View style={styles.sideLine}></View>
    <Cell cell={square[2]}/>
    <View style={styles.bottomLine}></View>
    <View style={styles.bottomLine}></View>
    <View style={styles.bottomLine}></View>
    <Cell cell={square[3]} margin={['left']}/>
    <View style={styles.sideLine}></View>
    <Cell cell={square[4]}/>
    <View style={styles.sideLine}></View>
    <Cell cell={square[5]}/>
    <View style={styles.bottomLine}></View>
    <View style={styles.bottomLine}></View>
    <View style={styles.bottomLine}></View>
    <Cell cell={square[6]} margin={['left']}/>
    <View style={styles.sideLine}></View>
    <Cell cell={square[7]}/>
    <View style={styles.sideLine}></View>
    <Cell cell={square[8]}/>
  </View>
}

export default function Grid({level}) {
  var [board, updateBoard] = useState(sudoku.generate(level))
  return (
    <View style={styles.board}>
      <Square square={board[0]} margin={['right', 'bottom']}/>
      <View style={styles.gSideLine}></View>
      <Square square={board[1]} margin={['right', 'bottom']}/>
      <View style={styles.gSideLine}></View>
      <Square square={board[2]} margin={['bottom']}/>
      <View style={styles.gBottomLine}></View>
      <View style={styles.gBottomLine}></View>
      <View style={styles.gBottomLine}></View>
      <Square square={board[3]} margin={['right', 'bottom']}/>
      <View style={styles.gSideLine}></View>
      <Square square={board[4]} margin={['right', 'bottom']}/>
      <View style={styles.gSideLine}></View>
      <Square square={board[5]} margin={['bottom']}/>
      <View style={styles.gBottomLine}></View>
      <View style={styles.gBottomLine}></View>
      <View style={styles.gBottomLine}></View>
      <Square square={board[6]} margin={['right']}/>
      <View style={styles.gSideLine}></View>
      <Square square={board[7]} margin={['right']}/>
      <View style={styles.gSideLine}></View>
      <Square square={board[8]}/>
    </View>
  );
}

var marginWidth = 5;
var colorTheme = 'pink';

const styles = StyleSheet.create({
  board: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gSideLine: {
    backgroundColor: 'pink',
    width: 5,
    height: 130,
    borderRadius: 10
  },
  gBottomLine: {
    backgroundColor: 'pink',
    width: 130,
    height: 5,
    borderRadius: 10
  },
  square: {
    height: 124,
    width: 124,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sideLine: {
    backgroundColor: 'black',
    width: 1,
    height: 27
  },
  bottomLine: {
    backgroundColor: 'black',
    width: 30,
    height: 1,
    marginRight: 3,
    marginLeft: 3
  },
  cell: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
