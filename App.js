import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Temporary_View_Navigator,
  Test_Component2
} from "./Temporary_View_Navigator/Test_Component"
import * as React from 'react';
export default function App() {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Test_Component" component={Temporary_View_Navigator} />
          <Stack.Screen name="Test_Component 2" component={Test_Component2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};
