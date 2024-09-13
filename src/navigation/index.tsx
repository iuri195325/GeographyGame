import * as React from 'react';
import { NavigationContainer, NavigationProp, ParamListBase  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Fase } from '../screens/Fase/fases';
import { StartGame } from '../screens/startGame/startGame';

export type StackNavigation = NavigationProp<ParamListBase>;

export default function Navegation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="startGame" screenOptions={{headerShown: false}}>
                <Stack.Screen name="startGame" component={StartGame} />
                <Stack.Screen name="fase" component={Fase} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}