import { View } from 'react-native';
import { Header_Component } from './Header_Component';
import Grid from './Grid'
const Game_Board_View = () => {
    return(
        <View>
            <Header_Component></Header_Component>
            <Grid></Grid>
        </View>
    )
}

export { Game_Board_View };