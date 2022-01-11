import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from './Styles';
import { Icon_Component } from './Icon_Component/Icon_Component';
import { Back_Icon } from './Icon_Component/Icons';


const Header_Component = ({level, navigation}) => {
    const Navigate_Home = () => {
        navigation.navigate("Temporary_View_Navigator");
        return;
    }
    return(
        <View  style={styles.container}>
            <Icon_Component SVG={Back_Icon} onPressFunction={Navigate_Home}></Icon_Component>
            <View>
                <Text>{level.toUpperCase()}</Text>
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