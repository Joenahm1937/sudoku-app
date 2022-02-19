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
import { Audio } from "expo-av";

const UNDEFINED_BOARD = [
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];
var tileSound = null;
const Game_Board_View = (props = { navigation }) => {
  const [number, setNumber] = useState();
  const [board, setBoard] = useState(UNDEFINED_BOARD);
  const [solution, setSolution] = useState();
  const [target, setTarget] = useState();
  const [mistakes, setMistakes] = useState({});
  const [moves, setMoves] = useState([]);
  const [lives, setLives] = useState(3);
  const [endModal, setEndModal] = useState(false);
  const [hintsModal, setHintsModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [hint, setHint] = useState();
  const [hintLoc, setHintLoc] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [notesMode, setNotesMode] = useState(false);
  const [notes, setNotes] = useState({});
  const [originalBoard, setOriginalBoard] = useState();
  const isInitialMount = useRef(true);
  // AUDIO STATES
  const [tileSound, setTileSound] = useState();
  const [invalidTileSound, setInvalidTileSound] = useState();
  const [victorySound, setVictorySound] = useState();
  const [defeatSound, setDefeatSound] = useState();
  var colorTheme = { backgroundColor: "#F4C3C3" };
  //   var colorTheme = { backgroundColor: "grey" };

  async function playTileSound() {
    await tileSound.replayAsync();
  }
  async function playVictorySound() {
    await victorySound.replayAsync();
  }

  async function playDefeatSound(){
    await defeatSound.replayAsync();
  }

  async function playInvalidTileSound() {
    await invalidTileSound.replayAsync();
  }
  async function initializeAudio() {
    console.log("Intializing Audio Files");
    const tileAudioObject = new Audio.Sound();
    const invalidTileAudioObject = new Audio.Sound();
    const victoryAudioObject = new Audio.Sound();
    const defeatAudioObject = new Audio.Sound();
    try {
      await tileAudioObject.loadAsync(require("./Sounds/tile_press1.mp3"));
      console.log('Tile Press audio Initialized')
    } catch (err) {
      console.error(err);
    }
    try{
      await invalidTileAudioObject.loadAsync(require("./Sounds/invalid_press.mp3"));
      console.log('Invalid Tile audio Press Initialized')
    } catch (err){
      console.error(err);
    }
    try{
      await victoryAudioObject.loadAsync(require("./Sounds/victory2.mp3"));
      console.log('Victory audio Initialized')
    } catch (err){
      console.error(err);
    }
    try{
      await defeatAudioObject.loadAsync(require("./Sounds/defeat.mp3"));
      console.log('Defeat audio Initialized')
    } catch (err){
      console.error(err);
    }
    setTileSound(tileAudioObject);
    setInvalidTileSound(invalidTileAudioObject);
    setVictorySound(victoryAudioObject);
    setDefeatSound(defeatAudioObject);
  }

  function start() {
    var [unsolvedBoard, solvedBoard] = sudoku.generate(props.route.params.difficulty);
    setBoard(unsolvedBoard);
    setSolution(solvedBoard);
    setOriginalBoard(unsolvedBoard);
    setMistakes({});
    setMoves([]);
    setLives(props.route.params.lives);
    setTarget(undefined);
  }

  useEffect(() => {
    initializeAudio();
    start();
    return () => {
      tileSound.unloadAsync();
      victorySound.unloadAsync();
      invalidTileSound.unloadAsync();
      defeatSound.unloadAsync();
    };
  }, []);

  function eraseNotes() {
    if (notes[JSON.stringify(target)]) {
      var copyNotes = { ...notes };
      copyNotes[JSON.stringify(target)].clear();
      setNotes(copyNotes);
    }
  }

  //This allows us to navigate back to home screen when user clicks out of game over modal
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      props.navigation.navigate("homepage");
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
        //setSuccessModal(true);
        //setEndModal(true);
      } else {
        playInvalidTileSound()
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
        playVictorySound={playVictorySound}
      />
      <GameOver_Component
        status={endModal}
        setModalStatus={setEndModal}
        setGameEnded={setGameEnded}
        start={start}
        playDefeatSound={playDefeatSound}
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
        isTimed={true}
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
        hintsModal={hintsModal}
      ></Grid>
      <Lives lives={lives} isLifeMode={false} />
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
        eraseNotes={eraseNotes}
      ></Actions_Component>
    </View>
  );
};

export { Game_Board_View };
