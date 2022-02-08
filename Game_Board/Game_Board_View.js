import { View, Button } from "react-native";
import { Header_Component } from "./Header_Component";
import { Actions_Component } from "./Actions_Component";
import { Grid } from "./Grid";
import { styles } from "./Styles";
import { Pieces_Component } from "./Pieces_Component";
import Lives from "./Lives";
import { GameOver_Component } from "./GameOver_Component";
import { Success_Component } from "./Success_Component";
import { HintsModal } from "./HintsModal";
import { useState, useEffect, useRef } from "react";
import sudoku from "./gameLogic";
import * as Haptics from "expo-haptics";
import { Audio } from 'expo-av';

const UNDEFINED_BOARD = [
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".","."]
]

const Game_Board_View = (props = { navigation }) => {
  var [number, setNumber] = useState();
  var [board, setBoard] = useState(UNDEFINED_BOARD);
  var [solution, setSolution] = useState();
  var [target, setTarget] = useState();
  var [mistakes, setMistakes] = useState({});
  var [moves, setMoves] = useState([]);
  var [lives, setLives] = useState(3);
  var [endModal, setEndModal] = useState(false);
  var [hintsModal, setHintsModal] = useState(false);
  var [successModal, setSuccessModal] = useState(false);
  var [hint, setHint] = useState();
  var [hintLoc, setHintLoc] = useState([]);
  var [gameEnded, setGameEnded] = useState(false);
  var [notesMode, setNotesMode] = useState(false);
  var [notes, setNotes] = useState({});
  var [originalBoard, setOriginalBoard] = useState();
  var isInitialMount = useRef(true);
  var [tileSound, setTileSound] = useState();
  var colorTheme = { backgroundColor: "#F4C3C3" };
  //   var colorTheme = { backgroundColor: "grey" };

  async function playTileSound(){
    const { sound } = await Audio.Sound.createAsync(
      require('./Sounds/tile_press.mp3')
    );
    setTileSound(sound);
    await sound.playAsync();
  }
  function start() {
    var [unsolvedBoard, solvedBoard] = sudoku.generate("hard");
    setBoard(unsolvedBoard);
    setSolution(solvedBoard);
    setOriginalBoard(unsolvedBoard);
    setMistakes({});
    setMoves([]);
    setLives(3);
  }

  useEffect(() => {
    start();
  }, []);

  //Cleanup I think? lol
  useEffect(() => {
    return tileSound
      ? () => {
          console.log('Unloading Sound');
          tileSound.unloadAsync(); }
      : undefined;
  }, [tileSound]);

  //This allows us to navigate back to home screen when user clicks out of game over modal
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      props.navigation.navigate("Temporary_View_Navigator");
    }
  }, [gameEnded]);

  if (notesMode) {
    if (number && target) {
      if (notes[JSON.stringify(target)]) {
        var copyNotes = { ...notes };
        copyNotes[JSON.stringify(target)].add(number);
        setNotes(copyNotes);
      } else {
        var copyNotes = { ...notes };
        copyNotes[JSON.stringify(target)] = new Set([number]);
        setNotes(copyNotes);
      }
      setNumber(undefined);
    }
  } else {
    if (number && target) {
      var changedBoard = [...board];
      board[target[0]][target[1]] = number;
      var validMove = solution[target[0]][target[1]] === number.toString();
      if (validMove) {
        playTileSound();
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        delete mistakes[JSON.stringify(target)];
        setTarget(undefined);
        if (board.flat().join("") === solution.flat().join("")) {
          setSuccessModal(true);
        }
        //to test success modal comment out all above
        // setSuccessModal(true);
      } else {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        var copyMistakes = { ...mistakes };
        var updatedMoves = [...moves];
        copyMistakes[JSON.stringify(target)] = number;
        updatedMoves.push([target[0], target[1]]);
        setMistakes(copyMistakes);
        setLives(lives - 1);
        setMoves(updatedMoves);
        if (lives === 1) setEndModal(true);
      }
      setBoard(changedBoard);
      setNumber(undefined);
    }
  }
  return (
    <View>
      <Success_Component
        status={successModal}
        setModalStatus={setSuccessModal}
        setGameEnded={setGameEnded}
        start={start}
      />
      <GameOver_Component
        status={endModal}
        setModalStatus={setEndModal}
        setGameEnded={setGameEnded}
      />
      <HintsModal
        status={hintsModal}
        setModalStatus={setHintsModal}
        hint={hint}
        setHintLoc={setHintLoc}
        setTarget={setTarget}
        colorTheme={colorTheme}
      />
      <View style={styles.notchBlock}></View>
      <Header_Component
        level={"hard"}
        navigation={props.navigation}
      ></Header_Component>
      <Grid
        board={board}
        target={target}
        setTarget={setTarget}
        mistakes={mistakes}
        notesMode={notesMode}
        notes={notes}
        hintLoc={hintLoc}
        colorTheme={colorTheme}
      ></Grid>
      <Lives lives={lives} />
      <Pieces_Component
        setNumber={setNumber}
        target={target}
        moves={moves}
        board={board}
        setBoard={setBoard}
        colorTheme={colorTheme}
      />
      <Actions_Component
        board={board}
        setBoard={setBoard}
        originalBoard={originalBoard}
        setNotesMode={setNotesMode}
        notesMode={notesMode}
        getCandidates={sudoku.getCandidates}
        setHintsModal={setHintsModal}
        setHint={setHint}
        mistakes={mistakes}
        setHintLoc={setHintLoc}
      ></Actions_Component>
    </View>
  );
};

export { Game_Board_View };
