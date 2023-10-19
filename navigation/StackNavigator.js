import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import StoryScreen from "../screens/StoryScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Tela Inicial" component={BottomTabNavigator} />
      <Stack.Screen name="Tela de Histórias" component={StoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;