import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on our figma mockups
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 800;

const horizontalScale = (size) => width / guidelineBaseWidth * size;
const verticalScale = (size) => height / guidelineBaseHeight * size;
const scale = (size) =>  (horizontalScale(size) * verticalScale(size)) / size;
const moderateScale = (size, factor = 0.5) => size + ( horizontalScale(size) - size ) * factor;

export {scale, horizontalScale, verticalScale, moderateScale};