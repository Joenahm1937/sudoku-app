import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Large_button from './Large_button/button';

const HomePage = (props) => {
    return (
        <View style={styles.HomePageContainer}>
            <View style={styles.titles}>
                <Text style={styles.title}>This is the Home Page</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Large_button 
                    content="d a i l y d o k u"
                    onPress={() => {
                        console.warn("dailydoku pressed")
                    }}
                />
                <Large_button 
                    content="n e w g a m e"
                    onPress={() => {
                        console.warn("newgame pressed")
                    }}
                />
                <Large_button 
                    content="r e s u m e"
                    onPress={() => {
                        console.warn("resume pressed")
                    }}
                />
            </View>

            <View style={styles.iconContainer}>
                
            </View>
        </View>
    );
};

export default HomePage;