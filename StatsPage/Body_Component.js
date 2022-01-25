import { styles } from './Styles';
import { Text, View } from 'react-native';
import { Difficulty_Select } from './Difficulty_Select';
import { Best_Times } from './Best_Times';
import { Puzzles_Solved } from './Puzzles_Solved';
import { Usage_Component } from './Usage_Component';
import { useState } from 'react';

const initialState = "EASY";

const Body_Component = () => {
    const [difficulty, setDifficulty] = useState(initialState);
    return(
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerFont}>STATS</Text>
            </View>
            <View>
                <Difficulty_Select difficulty={difficulty} setDifficulty={setDifficulty}></Difficulty_Select>
            </View>
            <View>
                <Best_Times difficulty={difficulty}></Best_Times>
            </View>
            <View>
                <Puzzles_Solved difficulty={difficulty}></Puzzles_Solved>
            </View>
            <View>
                <Usage_Component difficulty={difficulty}></Usage_Component>
            </View>
        </View>
    );
};

export { Body_Component };