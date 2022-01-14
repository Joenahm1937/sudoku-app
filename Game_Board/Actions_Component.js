import { View } from "react-native";
import { styles } from './Styles';
import { Icon_Component } from './Icon_Component/Icon_Component';
import {Pencil_Icon, Restart_Icon, Hint_Icon} from './Icon_Component/Icons'
const Actions_Component = (props = {navigation, board, setBoard, originalBoard}) => {
    const Restart = () => {
        props.setBoard(props.originalBoard);
    }
    return(
        <View style={styles.footerContainer}>
            <Icon_Component SVG={Restart_Icon} text={"Restart"} onPressFunction={Restart}></Icon_Component>
            <Icon_Component SVG={Pencil_Icon} text={"Notes"}></Icon_Component>
            <Icon_Component SVG={Hint_Icon} text={"Hint"} ></Icon_Component>
        </View>
    );

}

export { Actions_Component };