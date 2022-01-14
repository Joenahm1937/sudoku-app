import { View, Button } from 'react-native';
import { Header_Component } from './Header_Component';
import { Actions_Component } from './Actions_Component'
import { Grid } from './Grid'
import { styles } from './Styles';
import Pieces from './Pieces';
import Lives from './Lives';
import GameOver from './GameOver';
import { useState, useEffect } from 'react';
import sudoku from './gameLogic';
import * as Haptics from 'expo-haptics';
const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
};

const Game_Board_View = (props = {navigation}) => {
    var [number, setNumber] = useState();
    var [board, setBoard] = useState();
    var [solution, setSolution] = useState();
    var [target, setTarget] = useState();
    var [mistakes, setMistakes] = useState({});
    var [moves, setMoves] = useState([]);
    var [lives, setLives] = useState(3);
    var [modalStatus, setModalStatus] = useState(false);
    var [gameEnded, setGameEnded] = useState(false);
    var [notesMode, setNotesMode] = useState(true);
    var [notes, setNotes] = useState({});

    useEffect(() => {
        var [unsolvedBoard, solvedBoard] = sudoku.generate('hard');
        setBoard(unsolvedBoard);
        setSolution(solvedBoard);
    }, []);

    if (gameEnded) {
        props.navigation.navigate("Temporary_View_Navigator");
        setGameEnded(false)
    }

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
                if (lives === 1) setModalStatus(true);
            }
            setBoard(changedBoard)
            setNumber(undefined);
        }
    }

    return (
        <View>
            <GameOver status={modalStatus} setModalStatus={setModalStatus} setGameEnded={setGameEnded}/>
            <View style={styles.notchBlock}></View>
            <Header_Component level={'hard'} navigation={props.navigation}></Header_Component>
            <Grid
                board={board}
                target={target}
                setTarget={setTarget}
                mistakes={mistakes}
                notesMode={notesMode}
                notes={notes}
            ></Grid>
            <Lives lives={lives}/>
            <Pieces setNumber={setNumber}/>
            <Actions_Component navigation={props.navigation} moves={moves} board={board} setBoard={setBoard}></Actions_Component>
        </View>
    )
}

export { Game_Board_View };