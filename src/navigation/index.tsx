import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartGame from '../screens/startGame/startGame';
import { Fase } from '../screens/Fase/fases';

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