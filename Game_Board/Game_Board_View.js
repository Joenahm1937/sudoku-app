import { View } from 'react-native';
import { Header_Component } from './Header_Component';
import Grid from './Grid'
const Game_Board_View = () => {
    return(
        <View>
            <Header_Component level={'hard'}></Header_Component>
            <Grid level={'hard'}></Grid>
        </View>
    )
}

export { Game_Board_View };