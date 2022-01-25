import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Temporary_View_Navigator,
} from "./Temporary_View_Navigator/Temporary_View_Navigator"
import * as React from 'react';

import { Game_Board_View } from "./Game_Board/Game_Board_View";
import HomePage from "./Homepage/homepage_view";
import { StatsPage } from "./StatsPage/StatsPage_View";

export default function App() {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Temporary_View_Navigator"
            component={Temporary_View_Navigator}
            options={{
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="gameBoard"
            component={Game_Board_View}
            options={{
              animation: 'fade',
              headerShadowVisible: false,
              headerShown: false
            }}
          />
          <Stack.Screen
            name="homepage"
            component={HomePage}
            options={{animation: 'fade'}}
          />
          <Stack.Screen
            name="statspage"
            component={StatsPage}
            option={{animation: 'fade'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};


const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};