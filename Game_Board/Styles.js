import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  difficultyText: {
    marginLeft: 5,
  },
  timerStyle: {
    marginRight: 5,
  },
  notchBlock: {
	  height: hp('5%')
  }
});

export { styles };
