import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useEffect, useRef } from "react";
var Cell = ({
  cell = [],
  loc,
  setClicked,
  touch,
  target,
  mistakes,
  notesMode,
  notes,
  hintLoc,
  colorTheme,
  hintsModal,
}) => {
  const opacity = useRef(new Animated.Value(1)).current;
  var note = notes[JSON.stringify(loc)];
  var color =
    target && loc[0] === target[0] && loc[1] === target[1]
      ? styles.touched
      : {};
  var mistake = mistakes[JSON.stringify(loc)] ? styles.mistake : {};
  var hinted = JSON.stringify(loc) === JSON.stringify(hintLoc);

  useEffect(() => {
    if (hintsModal) {
      var breathe = Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            ease: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      );
      breathe.start();
    }
  }, [hintsModal]);

  return (
    <View style={styles.cell}>
      {cell === "." ? (
        hinted ? (
          <Animated.View style={[styles.hinted, { opacity }]}>
            <Text style={styles.numbers}>{cell}</Text>
          </Animated.View>
        ) : (
          <TouchableOpacity
            style={[styles.empty, color]}
            onPress={() => setClicked(loc)}
          >
            <Text style={styles.notes}>
              {note ? Array.from(note).sort() : null}
            </Text>
          </TouchableOpacity>
        )
      ) : (
        <View style={[colorTheme, styles.circle, mistake]}>
          <Text style={styles.numbers}>{cell}</Text>
        </View>
      )}
    </View>
  );
};

const SquareRowView = ({
  rowNumber,
  square,
  grid,
  setClicked,
  target,
  mistakes,
  notesMode,
  notes,
  hintLoc,
  colorTheme,
  hintsModal,
}) => {
  const square_index1 = rowNumber * 3;
  const square_index2 = rowNumber * 3 + 1;
  const square_index3 = rowNumber * 3 + 2;
  return (
    <View style={styles.row}>
      <Cell
        colorTheme={colorTheme}
        cell={square[square_index1]}
        loc={[grid, square_index1]}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      />
      <View style={styles.sideLine}></View>
      <Cell
        colorTheme={colorTheme}
        cell={square[square_index2]}
        loc={[grid, square_index2]}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      />
      <View style={styles.sideLine}></View>
      <Cell
        colorTheme={colorTheme}
        cell={square[square_index3]}
        loc={[grid, square_index3]}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      />
    </View>
  );
};

var Square = ({
  square = [],
  grid,
  setClicked,
  target,
  mistakes,
  notesMode,
  notes,
  hintLoc,
  colorTheme,
  hintsModal,
}) => {
  return (
    <View style={styles.square}>
      <SquareRowView
        colorTheme={colorTheme}
        rowNumber={0}
        square={square}
        grid={grid}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      />
      <View style={styles.lineRow}>
        <View style={styles.bottomLine}></View>
        <View style={styles.bottomLine}></View>
        <View style={styles.bottomLine}></View>
      </View>
      <SquareRowView
        colorTheme={colorTheme}
        rowNumber={1}
        square={square}
        grid={grid}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      />
      <View style={styles.lineRow}>
        <View style={styles.bottomLine}></View>
        <View style={styles.bottomLine}></View>
        <View style={styles.bottomLine}></View>
      </View>
      <SquareRowView
        colorTheme={colorTheme}
        rowNumber={2}
        square={square}
        grid={grid}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      />
    </View>
  );
};

const GridRowView = ({
  rowNumber,
  board,
  setClicked,
  target,
  mistakes,
  notesMode,
  notes,
  hintLoc,
  colorTheme,
  hintsModal,
}) => {
  const board_and_grid_index1 = rowNumber * 3;
  const board_and_grid_index2 = rowNumber * 3 + 1;
  const board_and_grid_index3 = rowNumber * 3 + 2;
  return (
    <View style={styles.gridRow}>
      <Square
        colorTheme={colorTheme}
        square={board[board_and_grid_index1]}
        grid={board_and_grid_index1}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      />
      <View style={[styles.gSideLine, colorTheme]}></View>
      <Square
        colorTheme={colorTheme}
        square={board[board_and_grid_index2]}
        grid={board_and_grid_index2}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      />
      <View style={[styles.gSideLine, colorTheme]}></View>
      <Square
        colorTheme={colorTheme}
        square={board[board_and_grid_index3]}
        grid={board_and_grid_index3}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      />
    </View>
  );
};

const Grid = ({
  board = [],
  target,
  setTarget,
  mistakes,
  moves,
  notesMode,
  notes,
  hintLoc,
  colorTheme,
  hintsModal,
}) => {
  var setClicked = (loc) => setTarget(loc);
  return (
    <View style={styles.board}>
      <GridRowView
        colorTheme={colorTheme}
        rowNumber={0}
        board={board}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        moves={moves}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      ></GridRowView>
      <View style={styles.gridRow}>
        <View style={[styles.gBottomLine, colorTheme]}></View>
        <View style={[styles.gBottomLine, colorTheme]}></View>
        <View style={[styles.gBottomLine, colorTheme]}></View>
      </View>
      <GridRowView
        colorTheme={colorTheme}
        rowNumber={1}
        board={board}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        moves={moves}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      ></GridRowView>
      <View style={styles.gridRow}>
        <View style={[styles.gBottomLine, colorTheme]}></View>
        <View style={[styles.gBottomLine, colorTheme]}></View>
        <View style={[styles.gBottomLine, colorTheme]}></View>
      </View>
      <GridRowView
        colorTheme={colorTheme}
        rowNumber={2}
        board={board}
        setClicked={setClicked}
        target={target}
        mistakes={mistakes}
        moves={moves}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        hintsModal={hintsModal}
      ></GridRowView>
    </View>
  );
};

export { Grid };

var marginWidth = 5;
// var colorTheme = "#F4C3C3";

const styles = StyleSheet.create({
  board: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  gridRow: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
  },
  gSideLine: {
    // backgroundColor: colorTheme,
    width: 5,
    height: hp("15%"),
    borderRadius: 10,
  },
  gBottomLine: {
    // backgroundColor: colorTheme,
    width: wp("34%"),
    height: 5,
    borderRadius: 10,
  },
  sideLine: {
    backgroundColor: "black",
    width: 1,
    height: hp("4%"),
    marginTop: hp("0.5%"),
  },
  bottomLine: {
    backgroundColor: "black",
    width: wp("8%"),
    height: 1,
    marginTop: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  lineRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cell: {
    marginTop: hp("0.4%"),
    height: hp("4%"),
    width: wp("10%"),
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    marginBottom: 1,
  },
  numbers: {
    fontWeight: "300",
  },
  circle: {
    // backgroundColor: colorTheme,
    height: hp("4%"),
    width: wp("8%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  empty: {
    height: hp("4%"),
    width: wp("8%"),
  },
  touched: {
    marginBottom: hp("0.4%"),
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 2, // Android
    justifyContent: "center",
    height: hp("3.5%"),
    width: wp("8%"),
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
  },
  mistake: {
    backgroundColor: "red",
  },
  notes: {
    fontSize: 10,
  },
  hinted: {
    marginBottom: hp("0.4%"),
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#87CEFA",
    elevation: 2, // Android
    justifyContent: "center",
    height: hp("3.5%"),
    width: wp("8%"),
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
});
