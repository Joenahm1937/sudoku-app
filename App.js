import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Temporary_View_Navigator,
} from "./Temporary_View_Navigator/Temporary_View_Navigator"
import * as React from 'react';
import { Game_Board_View } from "./Game_Board/Game_Board_View";
export default function App() {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Temporary_View_Navigator" component={Temporary_View_Navigator} />
          <Stack.Screen name="gameBoard" component={Game_Board_View} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};
