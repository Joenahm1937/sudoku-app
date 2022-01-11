import Svg, {
    Path,
    Rect,
} from 'react-native-svg';

const Redo_Icon = () => {
    return(
        <Svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="42" height="42" rx="5" fill="#848282"/>
            <Path d="M24.1439 19.5827H36.2734C36.6747 19.5827 37 19.2573 37 18.8561V6.72656C37 6.32532 36.6747 6 36.2734 6H33.3672C32.9659 6 32.6406 6.32532 32.6406 6.72656V11.456C29.8692 8.37822 25.8436 6.45229 21.3683 6.4848C13.0791 6.54498 6.44666 13.2432 6.46428 21.5326C6.48189 29.8105 13.1978 36.5156 21.4798 36.5156C25.3602 36.5156 28.8966 35.0435 31.5615 32.6276C31.8702 32.3478 31.8845 31.8675 31.5898 31.5729L29.5332 29.5163C29.2623 29.2454 28.8271 29.2307 28.5401 29.4845C26.661 31.1473 24.1895 32.1562 21.4798 32.1562C15.5906 32.1562 10.8236 27.3902 10.8236 21.5C10.8236 15.6108 15.5896 10.8438 21.4798 10.8438C25.0216 10.8438 28.1569 12.5679 30.0941 15.2233H24.1439C23.7427 15.2233 23.4173 15.5486 23.4173 15.9498V18.8561C23.4173 19.2573 23.7427 19.5827 24.1439 19.5827Z" fill="white"/>
        </Svg>
    );
}
export {Redo_Icon};