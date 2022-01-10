import { View } from 'react-native';
import { Header_Component } from './Header_Component';
import { Footer_Component } from './Footer_Component'
import Grid from './Grid'
import { styles } from './Styles';
import Pieces from './Pieces';
import { useState } from 'react';
const Game_Board_View = (props = {navigation}) => {
    var [number, setNumber] = useState()
    return(
        <View>
            <View style={styles.notchBlock}></View>
            <Header_Component level={'hard'}></Header_Component>
            <Grid level={'hard'}></Grid>
            <Pieces setNumber={setNumber}/>
            <Footer_Component navigation={props.navigation}></Footer_Component>
        </View>
    )
}

export { Game_Board_View };