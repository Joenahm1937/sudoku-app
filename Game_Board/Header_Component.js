import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from './Styles';
const Header_Component = () => {
    return(
        <View  style={styles.container}>
            <View style={styles.difficultyText}>
                <Text>Difficulty: Medium</Text>
            </View>
            <Timer style={styles.timerStyle}></Timer>
        </View>
    );
}
const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
        let myInterval = setInterval(() => {
            setSeconds(seconds + 1);
            if (seconds === 60) {
                setMinutes(minutes + 1);
                setSeconds(0);
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    });

    return (
        <View>
            <Text> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</Text> 
        </View>
    )
}

export { Header_Component }