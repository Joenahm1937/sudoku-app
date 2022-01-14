import { View, Fragment } from "react-native";
import { styles } from './Styles';
import { Icon_Component } from './Icon_Component/Icon_Component';
import {Pencil_Icon, Restart_Icon, Hint_Icon} from './Icon_Component/Icons'
const Actions_Component = (props = {board, setBoard, originalBoard, setNotesMode, notesMode}) => {
    const Restart = () => {
        props.setBoard(props.originalBoard);
    }
    const Notes_Icon = (props = {notesMode, setNotesMode}) => {
        if(!props.notesMode){
            return(
                <Icon_Component SVG={Pencil_Icon} text={"Notes"} onPressFunction={() => props.setNotesMode(!props.notesMode)}></Icon_Component>
            );
        } else {
            return(
                <>
                    <Icon_Component SVG={Pencil_Icon} text={"Notes"} onPressFunction={() => props.setNotesMode(!props.notesMode)}></Icon_Component>
                    <View style={styles.dot}></View>
                </>
            )
        }
    }
    return(
        <View style={styles.footerContainer}>
            <Icon_Component SVG={Restart_Icon} text={"Restart"} onPressFunction={Restart}></Icon_Component>
            <Notes_Icon notesMode={props.notesMode} setNotesMode={props.setNotesMode}></Notes_Icon>
            <Icon_Component SVG={Hint_Icon} text={"Hint"} ></Icon_Component>
        </View>
    );

}



export { Actions_Component };