import { styles } from './Styles';
import { Text, View } from 'react-native';
import { Arrow_Right, Arrow_Left } from './Icon_Component/Icons';
import { Icon_Component } from './Icon_Component/Icon_Component';

const cycleDifficulty = (difficulty, direction) => {
    const difficulties = ['EASY', 'MEDIUM', 'HARD'];
    let i = difficulties.findIndex((elt) => elt === difficulty);
    i = direction === "right" ? i + 1 : i - 1;
    i = ((i % difficulties.length) + difficulties.length) % difficulties.length; //JAVASCRIPT IS SO GARBAGE WHY DOES % NOT WORK NORMALLY WTF
    return difficulties[i];
};

const Difficulty_Select = ({difficulty, setDifficulty}) => {
    return(
        <View style={styles.difficultyContainer}>
            <Icon_Component SVG={Arrow_Left} onPressFunction={() => setDifficulty(cycleDifficulty(difficulty, "left"))}></Icon_Component>
            <Text style={styles.difficultyFont}>{difficulty}</Text>
            <Icon_Component SVG={Arrow_Right} onPressFunction={() => setDifficulty(cycleDifficulty(difficulty, "right"))}></Icon_Component>
        </View>
    );
};

export { Difficulty_Select };