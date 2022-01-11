import Svg, {
  Path,
  Rect,
} from 'react-native-svg';

const Undo_Icon = () => {
  return(
    <Svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect width="42" height="42" rx="5" fill="#848282"/>
        <Path d="M17.8561 19.5827H5.72656C5.32532 19.5827 5 19.2573 5 18.8561V6.72656C5 6.32532 5.32532 6 5.72656 6H8.63281C9.03406 6 9.35938 6.32532 9.35938 6.72656V11.456C12.1308 8.37822 16.1564 6.45229 20.6317 6.4848C28.9209 6.54498 35.5533 13.2432 35.5357 21.5326C35.5181 29.8105 28.8022 36.5156 20.5202 36.5156C16.6398 36.5156 13.1034 35.0435 10.4385 32.6276C10.1298 32.3478 10.1155 31.8675 10.4102 31.5729L12.4668 29.5163C12.7377 29.2454 13.1729 29.2307 13.4599 29.4845C15.339 31.1473 17.8105 32.1562 20.5202 32.1562C26.4094 32.1562 31.1764 27.3902 31.1764 21.5C31.1764 15.6108 26.4104 10.8438 20.5202 10.8438C16.9784 10.8438 13.8431 12.5679 11.9059 15.2233H17.8561C18.2573 15.2233 18.5827 15.5486 18.5827 15.9498V18.8561C18.5827 19.2573 18.2573 19.5827 17.8561 19.5827Z" fill="white"/>
    </Svg>
  );
}

export {Undo_Icon};
