import {
  Text,
  Image,
  FlatList,
  Modal,
  View,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import fireworks from "../../../assets/fireworks.json";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/faseStyles";
import { Row } from "../../components/Layout/row";
import { LevelIcon } from "../../components/LevelIcon";
import { Column } from "../../components/Layout/column";
import { GridOptions } from "../../components/GridOptions/GridOptions";
import { useRef, useState } from "react";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import * as Animatable from "react-native-animatable";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  fase: { data: any };
  records: undefined;
  startGame: undefined;
};

import type { RouteProp } from '@react-navigation/native';
import { ItemType } from "../../types/GameProps";

type FaseProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'fase'>;
  route: RouteProp<RootStackParamList, 'fase'>;
};

export const Fase: React.FC<FaseProps> = ({ navigation, route }) => {
  const [level, setLevel] = useState<number>(0); // level atual
  const [fase, setFase] = useState<number>(0); // fase dentro do level
  const [sound, setSound] = useState<Sound | null>(null);
  const [showLevelModal, setShowLevelModal] = useState<boolean>(false);
  const viewRef = useRef<any>(null);
  const { data } = route.params; // data é ItemType[][]

 
// Avança para próxima fase ou próximo level
  const correctOptionSelected = async (): Promise<void> => {
    playSucessSound();
    const totalAcertos = data.slice(0, level + 1).reduce((acc: number, l: ItemType[], idx: number) => acc + (idx === level ? fase + 1 : l.length), 0);
    const now = new Date();
    try {
      const recordStr = await AsyncStorage.getItem('geographyGameRecord');
      const recordData = recordStr ? JSON.parse(recordStr) : null;
      if (!recordData || totalAcertos > recordData.score) {
        await AsyncStorage.setItem('geographyGameRecord', JSON.stringify({
          score: totalAcertos,
          date: `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`
        }));
      }
    } catch (e) {
      // fallback: não conseguiu salvar recorde
    }
    if (fase < data[level].length - 1) {
      setFase(fase + 1);
    } else if (level < data.length - 1) {
      setShowLevelModal(true);
    } else {
      // Fim do jogo - pode mostrar mensagem, reiniciar ou navegar
      // Exemplo: alert('Parabéns, você completou todos os níveis!');
    }
  };

  // Função para avançar para o próximo level
  const advanceLevel = () => {
    setShowLevelModal(false);
    setLevel(level + 1);
    setFase(0);
  };

  const playSucessSound = async (): Promise<void> => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/sounds/correct-6033.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.log("Erro ao reproduzir o som", error);
    }
  };

  const playWrongSound = async (): Promise<void> => {
    shakeScreen();
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/sounds/wrong-47985.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.log("Erro ao reproduzir o som", error);
    }
  };

  const shakeScreen = (): void => {
    if (viewRef.current) {
      viewRef.current.shake(800);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={showLevelModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLevelModal(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <View
            style={{
              width: "90%",
              maxWidth: 400,
              backgroundColor: "#fff",
              padding: 32,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: 180,
                height: 180,
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LottieView
                source={fireworks}
                autoPlay
                loop
                style={{ width: 180, height: 180 }}
              />
            </View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#4CAF50",
                marginBottom: 12,
              }}
            >
              Parabéns!
            </Text>
            <Text style={{ fontSize: 17, color: "#222", marginBottom: 20 }}>
              Você concluiu o Level {level + 1}!
            </Text>
            <TouchableOpacity
              onPress={advanceLevel}
              style={{
                backgroundColor: "#4CAF50",
                borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 32,
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                Avançar para o próximo level
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <FlatList
        data={[data[level][fase]]}
        contentContainerStyle={{ height: "90%" }}
        renderItem={({ item }) => {
          return (
            <Animatable.View ref={viewRef}>
              <Row style={styles.row}>
                <Image
                  style={{ ...styles.image }}
                  source={require("../../image/brasil.png")}
                />
                <Text
                  style={{ color: "#fff", fontWeight: "900", fontSize: 17 }}
                >
                  Qual é esse país?
                </Text>
                <LevelIcon levelNumber={level + 1}></LevelIcon>
              </Row>
              <Column style={styles.column}>
                <Image style={{ ...styles.map }} source={{ uri: item.map }} />
                <GridOptions
                  item={item}
                  isCorrectOption={(value) => {
                    value ? correctOptionSelected() : playWrongSound();
                  }}
                />
              </Column>
            </Animatable.View>
          );
        }}
      />
    </SafeAreaView>
  );
};
