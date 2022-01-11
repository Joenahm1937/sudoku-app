import { View, Button } from 'react-native';
import { Header_Component } from './Header_Component';
import { Actions_Component } from './Actions_Component'
import Grid from './Grid'
import { styles } from './Styles';
import Pieces from './Pieces';
import { useState } from 'react';
import sudoku from './gameLogic';
const Game_Board_View = (props = {navigation}) => {
    var [number, setNumber] = useState();
    var [board, updateBoard] = useState(sudoku.generate('hard'));
    var [target, setTarget] = useState();
    var [errors, setErrors] = useState({});
    var [moves, setMoves] = useState([]);
    if (number && target) {
        var changedBoard = [...board];
        board[target[0]][target[1]] = number;
        var boardError = true; //hardcoded true for now, but write logic to check for errors
        if (boardError) {
            var newErrors = {...errors};
            newErrors[JSON.stringify(target)] = true;
            setErrors(newErrors);
        }
        updateBoard(changedBoard)
        setNumber(undefined);
    }
    return(
        <View>
            <View style={styles.notchBlock}></View>
            <Header_Component level={'hard'} navigation={props.navigation}></Header_Component>
            <Grid number={number} board={board} updateBoard={updateBoard} target={target} setTarget={setTarget} errors={errors}></Grid>
            <Pieces setNumber={setNumber}/>
            <Actions_Component navigation={props.navigation}></Actions_Component>
        </View>
    )
}

export { Game_Board_View };