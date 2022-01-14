import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Pieces({status, setModalStatus, setGameEnded}) {
  return <Modal visible={status} animationType='slide'>
    <View style={styles.container}>
      <Text style={styles.end}>Game Over</Text>
      <Button
        onPress={() => {
          setModalStatus(false);
          setGameEnded(true);
        }}
        title="Return Home"
      />
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