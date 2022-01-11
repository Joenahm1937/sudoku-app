import { View } from "react-native";
import { styles } from './Styles';
import { Icon_Component } from './Icon_Component/Icon_Component';
import {Pencil_Icon, Undo_Icon, Redo_Icon, Check_Icon} from './Icon_Component/Icons'
const Actions_Component = (props = {navigation}) => {
    return(
        <View style={styles.footerContainer}>
            <Icon_Component SVG={Redo_Icon}></Icon_Component>
            <Icon_Component SVG={Check_Icon}></Icon_Component>
            <Icon_Component SVG={Pencil_Icon}></Icon_Component>
            <Icon_Component SVG={Undo_Icon}></Icon_Component>
        </View>
    );

}

export { Actions_Component };