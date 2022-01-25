import { styles } from './Styles';
import { Text, View } from 'react-native';
import { Row_Component } from './Row_Component'

const Best_Times = ({difficulty}) => {
    return( 
        <View>
            <Row_Component leftText={"DATE COMPLETED"} rightText={"TIME ELAPSED"}></Row_Component>

            <View style={styles.rowHeader}><Text>BEST TIME</Text></View>
            <Row_Component leftText={"01/12/22"} rightText={"05:24"}></Row_Component>

            <View style={styles.rowHeader}><Text>RECENT HISTORY:</Text></View>
            <Row_Component leftText={"01/18/22"} rightText={"14:57"}></Row_Component>
            <Row_Component leftText={"01/11/22"} rightText={"12:00"}></Row_Component>
            <Row_Component leftText={"01/12/22"} rightText={"10:08"}></Row_Component>
            <Row_Component leftText={"01/12/22"} rightText={"05:24"}></Row_Component>
        </View>
    );
};

export { Best_Times };