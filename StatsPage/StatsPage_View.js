import React from 'react';
import {View, Text} from 'react-native';
import { Body_Component } from './Body_Component';
import { styles } from './Styles';

const StatsPage = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Body_Component></Body_Component>
            </View>
        </View>
    );
};

export { StatsPage };