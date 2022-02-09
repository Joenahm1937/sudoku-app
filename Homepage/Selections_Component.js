import {View, Text} from 'react-native';
import { useState } from 'react';
import { styles } from './Styles.js';
import { Left_Arrow, Right_Arrow } from './icon_button/Icons';
import { IconButton } from './icon_button/IconButton';

const Selections_Component = (props) => {

    const [difficulty, setDifficulty] = useState('DIFFICULTY');
    const [diffIdx, setDiffIdx] = useState(0);
    const [gameMode, setGameMode] = useState('GAME MODE');
    const [modeIdx, setModeIdx] = useState(0);
    const [lives, setLives] = useState('LIVES');
    const [livesIdx, setLivesIdx] = useState(0);

    const diff = ['EASY', 'MEDIUM', 'HARD'];
    const mode = ['CLASSIC', 'CLOCK RACE'];
    //need inf
    const live = ['LIVES: I', 'LIVES: II', 'LIVES: III', 'LIVES: ∞'];
    
    //gray out newgame until difficulty selected
    //if no saved games resume grayed.

    const cycleDifficulty = (flag) => {
        if (flag == 'left') {
            return;
        }
        else if (flag == 'right') {
            setDiffIdx((diffIdx + 1) % 3);
            setDifficulty(diff[diffIdx]);
            return;
        }
        else {
            return;
        }
    }

    const cycleMode = (flag) => {
        if (flag == 'left') {
            return;
        }
        else if (flag == 'right') {
            setModeIdx((modeIdx + 1) % 2);
            setGameMode(mode[modeIdx]);
            return;
        }
        else {
            return;
        }
    }

    const cycleLives = (flag) => {
        if (flag == 'left') {
            return;
        }
        else if (flag == 'right') {
            setLivesIdx((livesIdx + 1) % 4);
            setLives(live[livesIdx]);
            return;
        }
        else {
            return;
        }
    }

    return (
        <View style={styles.selectionsContainer}>

           <View style={styles.selectButton}>
            <View style={styles.leftArrow}>
                <IconButton
                        SVG={Left_Arrow} 
                        onPressFunction={() => cycleDifficulty('left')}>
                    </IconButton>
                </View>
                <View style={styles.selectText}>
                    <Text>{difficulty}</Text>
                </View>
                <View style={styles.rightArrow}>
                    <IconButton
                        SVG={Right_Arrow} 
                        onPressFunction={() => cycleDifficulty('right')}>
                    </IconButton>
                </View>
            </View>

            <View style={styles.selectButton}>
                <View style={styles.leftArrow}>
                    <IconButton
                            SVG={Left_Arrow} 
                            onPressFunction={() => cycleMode('left')}>
                    </IconButton>
                </View>
                <View style={styles.selectText}>
                    <Text>{gameMode}</Text>
                </View>
                <View style={styles.rightArrow}>
                    <IconButton
                            SVG={Right_Arrow} 
                            onPressFunction={() => cycleMode('right')}>
                    </IconButton>
                </View>
            </View>


            <View style={styles.selectButton}>
                <View style={styles.leftArrow}>
                    <IconButton
                            SVG={Left_Arrow} 
                            onPressFunction={() => cycleLives('left')}>
                    </IconButton>
                </View>
                    <View style={styles.selectText}>
                        <Text>{lives}</Text>
                    </View>
                    <View style={styles.rightArrow}>
                        <IconButton
                            SVG={Right_Arrow} 
                            onPressFunction={() => cycleLives('right')}>
                        </IconButton>
                    </View>
            </View>
        </View>
    );
}

export {Selections_Component};