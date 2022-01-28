import { View, Button } from 'react-native';
import { Header_Component } from './Header_Component';
import { Actions_Component } from './Actions_Component'
import { Grid } from './Grid'
import { styles } from './Styles';
import { Pieces_Component } from './Pieces_Component';
import Lives from './Lives';
import { GameOver_Component } from './GameOver_Component';
import { HintsModal } from './HintsModal';
import { useState, useEffect, useRef } from 'react';
import sudoku from './gameLogic';
import * as Haptics from 'expo-haptics';


const Game_Board_View = (props = {navigation}) => {
    var [number, setNumber] = useState();
    var [board, setBoard] = useState();
    var [solution, setSolution] = useState();
    var [target, setTarget] = useState();
    var [mistakes, setMistakes] = useState({});
    var [moves, setMoves] = useState([]);
    var [lives, setLives] = useState(3);
    var [endModal, setEndModal] = useState(false);
    var [hintsModal, setHintsModal] = useState(false);
    var [hint, setHint] = useState();
    var [hintLoc, setHintLoc] = useState([]);
    var [gameEnded, setGameEnded] = useState(false);
    var [notesMode, setNotesMode] = useState(false);
    var [notes, setNotes] = useState({});
    var [originalBoard, setOriginalBoard] = useState();
    var isInitialMount = useRef(true);

    useEffect(() => {
        var [unsolvedBoard, solvedBoard] = sudoku.generate('hard');
        setBoard(unsolvedBoard);
        setSolution(solvedBoard);
        setOriginalBoard(unsolvedBoard);
    }, []);

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
                var copyNotes = {...notes};
                copyNotes[JSON.stringify(target)].add(number);
                setNotes(copyNotes);
            } else {
                var copyNotes = {...notes};
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
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
                delete mistakes[JSON.stringify(target)];
                setTarget(undefined);
            } else {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
                var copyMistakes = {...mistakes};
                var updatedMoves=[...moves]
                copyMistakes[JSON.stringify(target)] = number;
                updatedMoves.push([target[0], target[1]]);
                setMistakes(copyMistakes);
                setLives(lives - 1);
                setMoves(updatedMoves);
                if (lives === 1) setEndModal(true);
            }
            setBoard(changedBoard)
            setNumber(undefined);
        }
    }

    return (
        <View>
            <GameOver_Component status={endModal} setModalStatus={setEndModal} setGameEnded={setGameEnded}/>
            <HintsModal status={hintsModal} setModalStatus={setHintsModal} hint={hint} setHintLoc={setHintLoc}/>
            <View style={styles.notchBlock}></View>
            <Header_Component level={'hard'} navigation={props.navigation}></Header_Component>
            <Grid
                board={board}
                target={target}
                setTarget={setTarget}
                mistakes={mistakes}
                notesMode={notesMode}
                notes={notes}
                hintLoc={hintLoc}
            ></Grid>
            <Lives lives={lives}/>
            <Pieces_Component setNumber={setNumber} moves={moves} board={board} setBoard={setBoard}/>
            <Actions_Component
                board={board} setBoard={setBoard}
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
    )
}

export { Game_Board_View };