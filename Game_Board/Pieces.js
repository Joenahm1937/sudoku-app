import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var Piece = ({choice, setNumber}) => {
  return <View style={styles.piece}>
    <TouchableOpacity style={styles.touchable} onPress={() => setNumber(choice)}>
      <Text style={styles.number}>{choice}</Text>
    </TouchableOpacity>
  </View>
}

export default function Pieces({setNumber}) {
  return <View style={styles.container}>
    {[...Array(9)].map((piece, i) => <Piece key={i} choice={i + 1} setNumber={setNumber}/>)}
    <View style={styles.piece}>
      <Text>Erase</Text>
    </View>
  </View>
}

var colorTheme = '#F4C3C3';

const styles = StyleSheet.create({
  container: {
    marginRight: wp('6%'),
    marginLeft: wp('6%'),
    height: hp('10%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  piece: {
    width: wp('13%'),
    height: hp('6%'),
    margin: wp('1%'),
    backgroundColor: colorTheme,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 30,
    color: 'white'
  },
  touchable: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});