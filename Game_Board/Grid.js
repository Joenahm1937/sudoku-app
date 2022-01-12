import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var Cell = ({cell=[], loc, setClicked, touch, target, mistakes}) => {
  var color = target && loc[0] === target[0] && loc[1] === target[1] ? styles.touched : {};
  var mistake = mistakes[JSON.stringify(loc)] ? styles.mistake : {};
  return <View style={styles.cell}>
    {cell === '.' ? <TouchableOpacity style={[styles.empty, color]} onPress={() => setClicked(loc)}></TouchableOpacity> : <View style={[styles.circle, mistake]}>
      <Text style={styles.numbers}>{cell}</Text>
    </View>}
  </View>
}

const SquareRowView = ({rowNumber, square, grid, setClicked, target, mistakes, moves}) => {
  const square_index1 = rowNumber * 3;
  const square_index2 = (rowNumber * 3) + 1;
  const square_index3 = (rowNumber * 3) + 2;
  return(
    <View style={styles.row}>
      <Cell
        cell={square[square_index1]}
        loc={[grid, square_index1]}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
      />
      <View style={styles.sideLine}></View>
      <Cell
        cell={square[square_index2]}
        loc={[grid, square_index2]}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
      />
      <View style={styles.sideLine}></View>
      <Cell
        cell={square[square_index3]}
        loc={[grid, square_index3]}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
      />
    </View>
  );
}

var Square = ({square=[], grid, setClicked, target, mistakes, moves}) => {
  return (
    <View style={styles.square}>
      <SquareRowView
        rowNumber={0}
        square={square}
        grid={grid}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        moves={moves}
      />
      <View style={styles.lineRow}>
        <View style={styles.bottomLine}></View>
        <View style={styles.bottomLine}></View>
        <View style={styles.bottomLine}></View>
      </View>
      <SquareRowView
        rowNumber={1}
        square={square}
        grid={grid}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        moves={moves}
      />
      <View style={styles.lineRow}>
        <View style={styles.bottomLine}></View>
        <View style={styles.bottomLine}></View>
        <View style={styles.bottomLine}></View>
      </View>
      <SquareRowView
        rowNumber={2}
        square={square}
        grid={grid}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        moves={moves}
      />
    </View>
  );
}

const GridRowView = ({rowNumber, board, setClicked, target, mistakes, moves}) => {
  const board_and_grid_index1 = rowNumber * 3;
  const board_and_grid_index2 = (rowNumber * 3) + 1;
  const board_and_grid_index3 = (rowNumber * 3) + 2;
  return (
    <View style={styles.gridRow}>
      <Square
        square={board[board_and_grid_index1]}
        grid={board_and_grid_index1}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        moves={moves}
      />
      <View style={styles.gSideLine}></View>
      <Square
        square={board[board_and_grid_index2]}
        grid={board_and_grid_index2}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        moves={moves}
      />
      <View style={styles.gSideLine}></View>
      <Square
        square={board[board_and_grid_index3]}
        grid={board_and_grid_index3}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        moves={moves}
      />
    </View>
  );
}

const Grid = ({board=[], target, setTarget, mistakes, moves}) => {
  var setClicked = (loc) => setTarget(loc);
  return (
    <View style={styles.board}>
        <GridRowView
          rowNumber={0}
          board={board}
          setClicked={setClicked}
          target={target}
          mistakes={mistakes}
          moves={moves}
        ></GridRowView>
      <View style={styles.gridRow}>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
      </View>
      <GridRowView
          rowNumber={1}
          board={board}
          setClicked={setClicked}
          target={target}
          mistakes={mistakes}
          moves={moves}
      ></GridRowView>
      <View style={styles.gridRow}>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
        <View style={styles.gBottomLine}></View>
      </View>
      <GridRowView
          rowNumber={2}
          board={board}
          setClicked={setClicked}
          target={target}
          mistakes={mistakes}
          moves={moves}
      ></GridRowView>
    </View>
  );
}

export { Grid };

var marginWidth = 5;
var colorTheme = '#F4C3C3';

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
  mistake: {
    backgroundColor: 'red'
  }
});


