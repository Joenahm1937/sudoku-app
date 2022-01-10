import { StyleSheet, Text, View } from 'react-native';
import sudoku from './gameLogic';
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var Cell = ({cell, margin}) => {
  return <View style={styles.cell}><Text>{cell}</Text></View>
}

var Square = ({square}) => {
  return <View style={styles.square}>
    <View style={styles.row}>
      <Cell cell={square[0]}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[1]}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[2]}/>
    </View>
    <View style={styles.row}>
      <View style={styles.bottomLine}></View>
      <View style={styles.bottomLine}></View>
      <View style={styles.bottomLine}></View>
    </View>
    <View style={styles.row}>
      <Cell cell={square[3]}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[4]}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[5]}/>
    </View>
    <View style={styles.row}>
      <View style={styles.bottomLine}></View>
      <View style={styles.bottomLine}></View>
      <View style={styles.bottomLine}></View>
    </View>
    <View style={styles.row}>
      <Cell cell={square[6]}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[7]}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[8]}/>
    </View>
  </View>
}

export default function Grid({level}) {
  var [board, updateBoard] = useState(sudoku.generate(level))
  return (
    <View style={styles.board}>
      <View style={styles.gridRow}>
        <Square square={board[0]}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[1]}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[2]}/>
      </View>
      <View style={styles.gridRow}>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
      </View>
      <View style={styles.gridRow}>
        <Square square={board[3]}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[4]}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[5]}/>
      </View>
      <View style={styles.gridRow}>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
      </View>
      <View style={styles.gridRow}>
        <Square square={board[6]}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[7]}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[8]}/>
      </View>
    </View>
  );
}

var marginWidth = 5;
var colorTheme = 'pink';

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
  },
  gSideLine: {
    backgroundColor: colorTheme,
    width: 5,
    height: hp('14%'),
    borderRadius: 10,
  },
  gBottomLine: {
    backgroundColor: colorTheme,
    width: wp('34%'),
    height: 5,
    borderRadius: 10
  },
  sideLine: {
    backgroundColor: 'black',
    width: 1,
    height: hp('4%'),
    marginTop: hp('0.5%')
  },
  bottomLine: {
    backgroundColor: 'black',
    width: wp('8%'),
    height: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  cell: {
    marginTop: hp('0.5%'),
    height: hp('4%'),
    width: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});


