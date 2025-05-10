import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Fase } from '../screens/Fase/fases';
import { StartGame } from '../screens/startGame/startGame';
import { Records } from '../screens/Records/Records';
import { ItemType } from '../types/GameProps';

export type RootStackParamList = {
  startGame: undefined;
  fase: { data: ItemType[][] };
  records: undefined;
};

export default function Navegation() {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="startGame" screenOptions={{headerShown: false}}>
                <Stack.Screen name="startGame" component={StartGame} />
                <Stack.Screen name="fase" component={Fase} />
                <Stack.Screen name="records" component={Records} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}