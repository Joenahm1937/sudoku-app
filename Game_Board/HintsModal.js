import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HintsModal = ({status, setModalStatus, hint, setHintLoc}) => {
  return (
    <Modal transparent visible={status} animationType='fade'>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.end}>{hint ? hint[0] : null}</Text>
          <Button
            onPress={() => {
              setModalStatus(false);
              setHintLoc([]);
            }}
            title="Return Home"
          />
        </View>
      </View>
    </Modal>
  );
}

export {HintsModal};
var colorTheme = '#F4C3C3';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  content: {
    backgroundColor: "white",
    marginBottom: hp('10%'),
    height: hp('30%'),
    width: wp('90%'),
    padding: 20,
    borderRadius: 20,
    elevation: 20
  },
  end: {
    fontSize: 30,
    fontWeight: '800'
  }
});