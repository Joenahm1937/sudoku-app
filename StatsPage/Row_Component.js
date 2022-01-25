import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {scale} from './StyleUtils'

const Row_Component = ({leftText, rightText, offset=0}) => {
    return(
        <View style={styles.rowStyle}>
            <View style={styles.colStyle}>
                <Text style={styles.fontStyle}>{leftText}</Text>
            </View>
            <View style={styles.colStyle}>
                <Text style={styles.fontStyle}>{rightText}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rowStyle: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    colStyle: {
      flexDirection: "row",
      justifyContent: "center",  
      width: wp('50%')
    },
    fontStyle: {
        fontSize: scale(15)
    }
  });


export {Row_Component};