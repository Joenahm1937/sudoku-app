import { styles } from "./Styles";
import { View, Text } from 'react-native';
import { IconButton } from './icon_button/IconButton';
import { Sound_Icon, Calendar, Pallete_Icon} from './icon_button/Icons';

const Header_Component = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.soundContainer}>
                <IconButton 
                    SVG={Sound_Icon} 
                    onPressFunction={() => {
                        console.warn("sound pressed")
                    }}>
                </IconButton>
            </View>
            
            <View style={styles.calendarContainer}>
                <IconButton
                    SVG={Calendar}
                    onPressFunction={() => {
                        console.warn("calendar pressed")
                    }}>
                </IconButton>
            </View>
            
            <View style={styles.palleteContainer}>
                <IconButton
                    SVG={Pallete_Icon}
                    onPressFunction={() => {
                        console.warn("pallete pressed")
                    }}>
                </IconButton>
            </View>
        </View>
    );
}

export { Header_Component };