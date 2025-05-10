import { View, Animated } from 'react-native';

// Estilos para centralizar e evitar distorções
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    padding: 16,
  },
  column: {
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    width: '100%' as `${number}%`,

  },
  image: {
    alignSelf: 'center' as const,
    marginBottom: 32,
    resizeMode: 'contain' as const,
    maxWidth: 350,
    maxHeight: 350,
  },
};

import { Button } from '../../components/Button';
import { Column } from '../../components/Layout/column';
import React, { useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { embaralharLevels } from '../../utils';
import { levels } from '../../Constants';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define your stack params
// Adjust this type to match your navigation structure
// If you have a central types file, import RootStackParamList from there
 type RootStackParamList = {
   fase: { data: any };
   records: undefined;
   startGame: undefined;
 };

export const StartGame: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'fase' | 'records' | 'startGame'>>();
    const [alturaImage, setAlturaImage] = useState(new Animated.Value(0))
    const [larguraImage, setlarguraImage] = useState(new Animated.Value(0))

    useFocusEffect(() => {
        Animated.sequence([
            Animated.timing(larguraImage, {
                toValue: 350,
                duration: 700,
                useNativeDriver: false,
            }),
            Animated.timing(alturaImage, {
                toValue: 350,
                duration: 700,
                useNativeDriver: false,
            }),
        ]).start();
    })

    const startGame = () => {
        closeMapImage();
        navigation.navigate({ name: "fase", params: { data: embaralharLevels(levels) } });
    }

    const closeMapImage = () => {
        Animated.sequence([
            Animated.timing(larguraImage, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(alturaImage, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }),
        ]).start();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Column style={styles.column}>
                    <Animated.Image style={[
                        styles.image,
                        { width: larguraImage, height: alturaImage }
                    ]} source={require('../../image/logoGame.png')} />
                    <Button
                        text='COMEÇAR'
                        textColor='#060F20' 
                        buttonColor='#7ADD8A'
                        borderColor='#7ADD8A'
                        width={'80%'}
                        onPress={() => startGame()}
                        style={{ marginBottom: 24 }}
                    />
                    <Button
                        text='RECORDES'
                        textColor='#060F20'
                        buttonColor='#FFDE59'
                        borderColor='#FFDE59'
                        width={'80%'}
                        onPress={() => navigation.navigate({ name: "records", params: undefined })}
                    />
                </Column>
            </View>
        </SafeAreaView>
    );
}