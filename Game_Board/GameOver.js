import { StyleSheet, Text, View, Modal } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Pieces({status}) {
  return <Modal visible={status} animationType='slide'>
    <View style={styles.container}>
      <Text style={styles.end}>Game Over</Text>
    </View>
  </Modal>
}

var colorTheme = '#F4C3C3';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  end: {
    fontSize: 30,
    fontWeight: '800'
  }
});