import { View, Animated, Text, ScrollView } from 'react-native';
import { Button } from '../../components/Button';
import { ModoCard } from '../../components/ModoCard';
import React, { useCallback, useRef } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { embaralharLevels } from '../../utils';
import { levels } from '../../Constants';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation';
import { useResponsive } from '../../hooks/useResponsive';
import { styles } from '../../styles/startGameStyles';
import { theme } from '../../styles/theme';

export const StartGame: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'fase' | 'records' | 'startGame' | 'termo' | 'bandeira'>>();
    const { width, height, isWide, isLandscape } = useResponsive();
    const ladoALado = isWide && isLandscape;
    const logoSize = Math.round(
        ladoALado ? Math.min(width * 0.36, height * 0.7, 360) : Math.min(width * 0.7, height * 0.3, 320)
    );
    const larguraImage = useRef(new Animated.Value(0)).current;
    const alturaImage = useRef(new Animated.Value(0)).current;

    useFocusEffect(
        useCallback(() => {
            Animated.sequence([
                Animated.timing(larguraImage, {
                    toValue: logoSize,
                    duration: 700,
                    useNativeDriver: false,
                }),
                Animated.timing(alturaImage, {
                    toValue: logoSize,
                    duration: 700,
                    useNativeDriver: false,
                }),
            ]).start();
        }, [logoSize, larguraImage, alturaImage])
    );

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
                <ScrollView contentContainerStyle={styles.scroll}>
                    <View style={[styles.content, ladoALado && styles.contentLado, { minHeight: height - theme.spacing.lg * 2 }]}>
                        <View style={[styles.hero, ladoALado && styles.heroLado]}>
                            <Animated.Image
                                style={{ width: larguraImage, height: alturaImage, marginBottom: theme.spacing.lg }}
                                resizeMode='contain'
                                source={require('../../image/logoGame.png')}
                            />
                            <Text style={styles.tagline}>Descubra os países do mundo</Text>
                        </View>
                        <View style={[styles.buttons, ladoALado && styles.buttonsLado]}>
                            <ModoCard
                                titulo="Descubra o Globo"
                                descricao="Ache o país destacado entre 4 opções"
                                icone="earth"
                                cor={theme.colors.primary}
                                onPress={() => startGame()}
                            />
                            <ModoCard
                                titulo="Adivinhe o País"
                                descricao="Termo geográfico: descubra o nome em 4 tentativas"
                                icone="text"
                                cor={theme.colors.accent}
                                onPress={() => navigation.navigate({ name: "termo", params: undefined })}
                            />
                            <ModoCard
                                titulo="Adivinhe a Bandeira"
                                descricao="Identifique o país pela bandeira"
                                icone="flag"
                                cor="#66BB6A"
                                onPress={() => navigation.navigate({ name: "bandeira", params: undefined })}
                            />
                            <Button
                                text='RECORDES'
                                textColor={theme.colors.text}
                                buttonColor={theme.colors.surface}
                                borderColor={theme.colors.surfaceBorder}
                                width={'100%'}
                                onPress={() => navigation.navigate({ name: "records", params: undefined })}
                            />
                        </View>
                    </View>
            </ScrollView>
        </SafeAreaView>
    );
}