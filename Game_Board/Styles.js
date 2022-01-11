import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  timerStyle: {
    marginRight: 5,
  },
  notchBlock: {
	  height: hp('5%')
  },
  footerContainer: {
    flexDirection: "row",
    marginBottom: 36,
    position: 'absolute',
    width: wp('100%'),
    height: hp('8%'),
    bottom: hp('-20%'),
    justifyContent: 'space-evenly'
  }
});

export { styles };
