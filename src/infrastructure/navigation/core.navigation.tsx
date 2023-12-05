import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "./constants";
import { HomeScreen } from "../../screens/Home/home.screen";
import { AnalysisScreen } from "../../screens/Analysis/analysis.screen";

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.home}>
        <Stack.Screen name={SCREENS.home} component={HomeScreen} />
        <Stack.Screen name={SCREENS.analysis} component={AnalysisScreen} />
        <Stack.Screen name={SCREENS.favorite} component={AnalysisScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
