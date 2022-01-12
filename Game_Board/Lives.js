import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Pieces({lives}) {
  return <View style={styles.container}>
    <Text style={styles.life}>Lives: {lives > 0 ? [...Array(lives)].fill('I').join('') : 0}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('8%'),
  },
  life: {
    fontSize: 20
  }
});