import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var Cell = ({cell, loc, setClicked, touch, target, errors}) => {
  var color = target && loc[0] === target[0] && loc[1] === target[1] ? styles.touched : {};
  var error = errors[JSON.stringify(loc)] ? styles.error : {};
  return <View style={styles.cell}>
    {cell === '.' ? <TouchableOpacity style={[styles.empty, color]} onPress={() => setClicked(loc)}></TouchableOpacity> : <View style={[styles.circle, error]}>
      <Text style={styles.numbers}>{cell}</Text>
    </View>}
  </View>
}

var Square = ({square, grid, setClicked, target, errors}) => {
  return <View style={styles.square}>
    <View style={styles.row}>
      <Cell cell={square[0]} loc={[grid, 0]} setClicked={setClicked} target={target} errors={errors}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[1]} loc={[grid, 1]} setClicked={setClicked} target={target} errors={errors}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[2]} loc={[grid, 2]} setClicked={setClicked} target={target} errors={errors}/>
    </View>
    <View style={styles.lineRow}>
      <View style={styles.bottomLine}></View>
      <View style={styles.bottomLine}></View>
      <View style={styles.bottomLine}></View>
    </View>
    <View style={styles.row}>
      <Cell cell={square[3]} loc={[grid, 3]} setClicked={setClicked} target={target} errors={errors}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[4]} loc={[grid, 4]} setClicked={setClicked} target={target} errors={errors}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[5]} loc={[grid, 5]} setClicked={setClicked} target={target} errors={errors}/>
    </View>
    <View style={styles.lineRow}>
      <View style={styles.bottomLine}></View>
      <View style={styles.bottomLine}></View>
      <View style={styles.bottomLine}></View>
    </View>
    <View style={styles.row}>
      <Cell cell={square[6]} loc={[grid, 6]} setClicked={setClicked} target={target} errors={errors}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[7]} loc={[grid, 7]} setClicked={setClicked} target={target} errors={errors}/>
      <View style={styles.sideLine}></View>
      <Cell cell={square[8]} loc={[grid, 8]} setClicked={setClicked} target={target} errors={errors}/>
    </View>
  </View>
}

export default function Grid({level, number, board, updateBoard, target, setTarget, errors}) {
  var setClicked = (loc) => setTarget(loc);
  console.log(errors)
  return (
    <View style={styles.board}>
      <View style={styles.gridRow}>
        <Square square={board[0]} grid={0} setClicked={setClicked} target={target} errors={errors}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[1]} grid={1} setClicked={setClicked} target={target} errors={errors}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[2]} grid={2} setClicked={setClicked} target={target} errors={errors}/>
      </View>
      <View style={styles.gridRow}>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
      </View>
      <View style={styles.gridRow}>
        <Square square={board[3]} grid={3} setClicked={setClicked} target={target} errors={errors}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[4]} grid={4} setClicked={setClicked} target={target} errors={errors}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[5]} grid={5} setClicked={setClicked} target={target} errors={errors}/>
      </View>
      <View style={styles.gridRow}>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
      </View>
      <View style={styles.gridRow}>
        <Square square={board[6]} grid={6} setClicked={setClicked} target={target} errors={errors}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[7]} grid={7} setClicked={setClicked} target={target} errors={errors}/>
        <View style={styles.gSideLine}></View>
        <Square square={board[8]} grid={8} setClicked={setClicked} target={target} errors={errors}/>
      </View>
    </View>
  );
}


var marginWidth = 5;
var colorTheme = 'pink';

const styles = StyleSheet.create({
  board: {
    paddingRight: 10,
    paddingLeft: 10,
  },
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
  lineRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cell: {
    marginTop: hp('0.4%'),
    height: hp('4%'),
    width: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    marginBottom: 1
  },
  numbers: {
    fontWeight: "300"
  },
  circle: {
    backgroundColor: colorTheme,
    height: hp('4%'),
    width: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  empty: {
    height: hp('4%'),
    width: wp('8%'),
  },
  touched: {
    marginBottom: hp('0.4%'),
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    justifyContent: 'center',
    height: hp('3.5%'),
    width: wp('8%'),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20
  },
  error: {
    backgroundColor: 'red'
  }
});


