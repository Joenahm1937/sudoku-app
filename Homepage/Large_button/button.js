import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const LargeButton = (props) => {

    const {content, ID, navigation} = props;

    const Navigate_GameBoard = () => {
        if (ID == "1") {
            navigation.navigate("gameBoard");
        }
        return;
    }

    return (
        <View style={styles.button_container}>
            <Pressable
                style={styles.large_button}
                onPress={Navigate_GameBoard}
            >
                <Text style={styles.button_text}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default LargeButton;