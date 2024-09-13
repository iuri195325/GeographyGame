import { View, Animated } from 'react-native';
import { styles } from '../../styles/startGameStyles';
import { Button } from '../../components/Button';
import { Column } from '../../components/Layout/column';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { embaralharArray } from '../../utils';
import { StackNavigation } from '../../navigation';

interface StartGameProps {
    navigation: StackNavigation;
}

export const  StartGame: React.FC<StartGameProps> = ({ navigation }) => {
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
        navigation.navigate("fase", {data: embaralharArray()})
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
                    <Animated.Image style={{ ...styles.image, width: larguraImage, height: alturaImage }} source={require('../../image/logoGame.png')} />
                    <Button
                        text='COMEÇAR'
                        textColor='#060F20'
                        buttonColor='#7ADD8A'
                        borderColor='#7ADD8A'
                        width={'80%'}
                        onPress={() => startGame()}
                    />
                </Column>
            </View>
        </SafeAreaView>
    );
}