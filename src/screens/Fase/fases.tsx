import { Text, Image, FlatList, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/faseStyles';
import { Row } from '../../components/Layout/row';
import { LevelIcon } from '../../components/LevelIcon';
import { Column } from '../../components/Layout/column';
import { GridOptions } from '../../components/GridOptions/GridOptions';
import { useRef, useState } from 'react';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';
import * as Animatable from 'react-native-animatable';
import { ItemType } from '../../types/GameProps';
import { StackNavigation } from '../../navigation';

type ParamList = {
    params: { data: ItemType[]}
};

interface FaseProps {
    route: ParamList;
    navigation: StackNavigation;
}

export const Fase: React.FC<FaseProps> = ({route}) => {
    const [level, setLevel] = useState<number>(0);
    const [sound, setSound] = useState<Sound | null>(null);
    const viewRef = useRef<any>(null);
    const { data } = route.params;

    const correctOptionSelected = (): void => {
        playSucessSound()
        setLevel(level + 1);
    }
   
    const playSucessSound = async (): Promise<void> => {
        try {
            const { sound } = await Audio.Sound.createAsync(
              require('../../../assets/sounds/correct-6033.mp3') 
            );
            setSound(sound);
            await sound.playAsync();
          } catch (error) {
            console.log('Erro ao reproduzir o som', error);
          }
    }

    const playWrongSound = async (): Promise<void> => {
        shakeScreen();
        try {
            const { sound } = await Audio.Sound.createAsync(
              require('../../../assets/sounds/wrong-47985.mp3') 
            );
            setSound(sound);
            await sound.playAsync();
          } catch (error) {
            console.log('Erro ao reproduzir o som', error);
          }
    }

    const shakeScreen = (): void => {
        if (viewRef.current) {
          viewRef.current.shake(800);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={[data[level]]}
                contentContainerStyle={{ height: "90%" }}
                renderItem={({ item }) => {
                    return (
                        <Animatable.View ref={viewRef}>
                            <Row style={styles.row}>
                                <Image style={{ ...styles.image }} source={require('../../image/brasil.png')} />
                                <Text style={{ color: '#fff', fontWeight: '900', fontSize: 17 }}>Qual é esse país?</Text>
                                <LevelIcon levelNumber={level + 1}></LevelIcon>
                            </Row>
                            <Column style={styles.column}>
                                <Image style={{ ...styles.map }} source={{ uri: item.map }} />
                                <GridOptions item={item} isCorrectOption={value => {value ? correctOptionSelected() : playWrongSound()}}/>
                            </Column>
                        </Animatable.View>
                    )
                }}
            />
        </SafeAreaView>
    )
}