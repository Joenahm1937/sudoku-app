import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Temporary_View_Navigator,
  Test_Component2
} from "./Temporary_View_Navigator/Temporary_View_Navigator"
import * as React from 'react';
import Grid from './Game_Board/Grid'
export default function App() {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Test_Component" component={Temporary_View_Navigator} />
          <Stack.Screen name="boardGrid" component={Grid} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};
