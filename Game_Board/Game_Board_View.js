import { View } from 'react-native';
import { Header_Component } from './Header_Component';
import Grid from './Grid'
import { styles } from './Styles';
const Game_Board_View = () => {
    return(
        <View>
            <View style={styles.notchBlock}></View>
            <Header_Component level={'hard'}></Header_Component>
            <Grid level={'hard'}></Grid>
        </View>
    )
}

export { Game_Board_View };