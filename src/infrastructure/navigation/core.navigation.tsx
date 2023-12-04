import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREENS } from "./constants";
import { HomeScreen } from "../../screens/Home/home.screen";

const Stack = createNativeStackNavigator()

export function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={SCREENS.home} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}