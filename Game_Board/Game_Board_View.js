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
const Game_Board_View = (props = {navigation}) => {
    var [number, setNumber] = useState();
    var [board, setBoard] = useState();
    // the line below will cause the board to start empty between initial render and stateful render, but slower performance
    // otherwise, the board will render with every square pink, but faster using default values in every child component
    // var [board, setBoard] = useState([...Array(9)].map(() => [...Array(9)].fill('.')));
    var [solution, setSolution] = useState();
    var [target, setTarget] = useState();
    var [mistakes, setMistakes] = useState({});
    var [moves, setMoves] = useState([]);
    var [lives, setLives] = useState(3);
    var [modalStatus, setModalStatus] = useState(false);

    useEffect(() => {
        var [unsolvedBoard, solvedBoard] = sudoku.generate('hard');
        setBoard(unsolvedBoard);
        setSolution(solvedBoard);
    }, []);


    if (number && target) {
        var changedBoard = [...board];
        board[target[0]][target[1]] = number;
        var validMove = solution[target[0]][target[1]] === number.toString();
        if (validMove) {
            delete mistakes[JSON.stringify(target)];
            setTarget(undefined);
        } else {
            var copyMistakes = {...mistakes};
            copyMistakes[JSON.stringify(target)] = number;
            setMistakes(copyMistakes);
            setLives(lives - 1);
            if (lives === 1) setModalStatus(true);
        }
        setBoard(changedBoard)
        setNumber(undefined);
    }
    return (
        <View>
            <GameOver status={modalStatus}/>
            <View style={styles.notchBlock}></View>
            <Header_Component level={'hard'} navigation={props.navigation}></Header_Component>
            <Grid
                board={board}
                target={target}
                setTarget={setTarget}
                mistakes={mistakes}
                moves={moves}
            ></Grid>
            <Lives lives={lives}/>
            <Pieces setNumber={setNumber}/>
            <Actions_Component navigation={props.navigation}></Actions_Component>
        </View>
    )
}

export { Game_Board_View };