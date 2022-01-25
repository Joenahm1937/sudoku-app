import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {scale, horizontalScale, verticalScale} from './StyleUtils'
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';

// relative sizes based on figma mockup:
// height 800, width 360

const headerFontSize = 50;
const difficultyFontSize = 20;
const arrowPadding = 35;

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: 'center',
      height: hp('10%'),
    },
    headerFont: {
      fontWeight: "normal",
      fontSize: scale(headerFontSize)
    },
    difficultyContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: 'center'
    },
    difficultyFont: {
      fontWeight: "normal",
      fontSize: scale(difficultyFontSize),
      paddingRight: horizontalScale(arrowPadding),
      paddingLeft: horizontalScale(arrowPadding)
    },
    rowHeader: {
      flexDirection: "row",
      justifyContent: "center"
    }

});

export { styles };