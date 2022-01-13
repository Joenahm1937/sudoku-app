import { View } from "react-native";
import { styles } from './Styles';
import { Icon_Component } from './Icon_Component/Icon_Component';
import {Pencil_Icon, Undo_Icon, Restart_Icon, Check_Icon} from './Icon_Component/Icons'
const Actions_Component = (props = {navigation, moves, board, setBoard}) => {
    const Undo = () => {
        const lastMove = props.moves.pop();
        if(!lastMove){
            return;
        }
        var changedBoard = [...props.board];
        changedBoard[lastMove[0]][lastMove[1]] = '.'
        props.setBoard(changedBoard)
        return;
    }
    const Restart = () => {
        const emptyBoard = []
        props.setBoard(emptyBoard);
    }
    return(
        <View style={styles.footerContainer}>
            <Icon_Component SVG={Restart_Icon} text={"Restart"} onPressFunction={Restart}></Icon_Component>
            <Icon_Component SVG={Pencil_Icon} text={"Notes"}></Icon_Component>
            <Icon_Component SVG={Undo_Icon} text={"Undo"} onPressFunction={Undo}></Icon_Component>
        </View>
    );

}

export { Actions_Component };