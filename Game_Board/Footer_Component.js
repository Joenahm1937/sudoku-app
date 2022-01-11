import { View } from "react-native";
import { styles } from './Styles';
import { Check_Icon } from './icons/Check_Icon';
import { Pencil_Icon } from './icons/Pencil_Icon';
import { Undo_Icon } from './icons/Undo_Icon';
import { Redo_Icon } from './icons/Redo_Icon';
const Footer_Component = (props = {navigation}) => {
    return(
        <View style={styles.footerContainer}>
            <Redo_Icon></Redo_Icon>
            <Check_Icon></Check_Icon>
            <Pencil_Icon></Pencil_Icon>
            <Undo_Icon></Undo_Icon>
        </View>
    );

}

export { Footer_Component };