import { styles } from './Styles';
import { Text, View } from 'react-native';

const Puzzles_Solved = ({difficulty}) => {
    return(
        <View>
            <View style={styles.rowHeader}><Text>TOTAL PUZZLES SOLVED</Text></View>
            <View style={styles.rowHeader}><Text>8</Text></View>
        </View>
    );
};

export { Puzzles_Solved };