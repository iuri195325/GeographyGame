import {
  Text,
  Image,
  Modal,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/faseStyles";
import { theme } from "../../styles/theme";
import { useResponsive } from "../../hooks/useResponsive";
import { LevelIcon } from "../../components/LevelIcon";
import { ConfirmModal } from "../../components/ConfirmModal";
import { GridOptions } from "../../components/GridOptions/GridOptions";
import { useRef, useState } from "react";
import { AudioPlayer, createAudioPlayer } from "expo-audio";
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
  const [attempt, setAttempt] = useState<number>(0); // incrementa a cada reinício de level
  const [restartNotice, setRestartNotice] = useState<boolean>(false);
  const soundRef = useRef<AudioPlayer | null>(null);
  const [showLevelModal, setShowLevelModal] = useState<boolean>(false);
  const [showEndModal, setShowEndModal] = useState<boolean>(false);
  const [confirmarSaida, setConfirmarSaida] = useState<boolean>(false);
  const viewRef = useRef<any>(null);
  const { data } = route.params; // data é ItemType[][]
  const { width, height, isLandscape, scale } = useResponsive();
  const item: ItemType = data[level][fase];
  const totalFases = data.reduce((acc: number, l: ItemType[]) => acc + l.length, 0);
  const faseNumber = data.slice(0, level).reduce((acc: number, l: ItemType[]) => acc + l.length, 0) + fase + 1;
  const mapSize = Math.round(isLandscape
    ? Math.min(height * 0.7, width * 0.4)
    : Math.min(width * 0.8, height * 0.4));

 
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
      setShowEndModal(true);
    }
  };

  // Função para avançar para o próximo level
  const advanceLevel = () => {
    setShowLevelModal(false);
    setLevel(level + 1);
    setFase(0);
  };

  // Errou: volta para a primeira fase do level atual e mostra um aviso
  const restartLevel = () => {
    setFase(0);
    setAttempt(a => a + 1);
    setRestartNotice(true);
    setTimeout(() => setRestartNotice(false), 1800);
  };

  const goToMenu = () => {
    setShowEndModal(false);
    navigation.navigate("startGame");
  };

  // Só pede confirmação quando já há progresso no level
  const pedirSaida = () => {
    if (fase > 0 || level > 0) {
      setConfirmarSaida(true);
    } else {
      navigation.navigate("startGame");
    }
  };

  // Libera o player anterior antes de tocar um novo som
  const playSound = (source: number): void => {
    try {
      soundRef.current?.remove();
      soundRef.current = createAudioPlayer(source);
      soundRef.current.play();
    } catch (error) {
      console.log("Erro ao reproduzir o som", error);
    }
  };

  const playSucessSound = (): void => {
    playSound(require("../../../assets/sounds/correct-6033.mp3"));
  };

  const playWrongSound = (): void => {
    shakeScreen();
    playSound(require("../../../assets/sounds/wrong-47985.mp3"));
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
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Animatable.View
              animation="bounce"
              iterationCount="infinite"
              duration={1600}
              style={styles.celebration}
            >
              <Ionicons name="trophy" size={120} color={theme.colors.accent} />
            </Animatable.View>
            <Text style={styles.modalTitle}>Parabéns!</Text>
            <Text style={styles.modalText}>
              Você concluiu o Level {level + 1}!
            </Text>
            <TouchableOpacity onPress={advanceLevel} style={styles.primaryButton} activeOpacity={0.85}>
              <Text style={styles.primaryButtonText}>Avançar para o próximo level</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={showEndModal} transparent animationType="fade" onRequestClose={goToMenu}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Ionicons name="trophy" size={72} color={theme.colors.accent} />
            <Text style={styles.modalTitle}>Jogo concluído!</Text>
            <Text style={styles.modalText}>
              Você passou por todas as {totalFases} fases. Confira seu recorde no menu.
            </Text>
            <TouchableOpacity onPress={goToMenu} style={styles.primaryButton} activeOpacity={0.85}>
              <Text style={styles.primaryButtonText}>Voltar ao menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ConfirmModal
        visivel={confirmarSaida}
        titulo="Sair da partida?"
        mensagem="O progresso deste level será perdido."
        textoConfirmar="SAIR"
        textoCancelar="CONTINUAR"
        onConfirmar={() => {
          setConfirmarSaida(false);
          navigation.navigate("startGame");
        }}
        onCancelar={() => setConfirmarSaida(false)}
      />

      <View style={styles.header}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Voltar ao início"
          onPress={pedirSaida}
          activeOpacity={0.7}
          style={{
            width: Math.round(40 * scale),
            height: Math.round(40 * scale),
            borderRadius: theme.radius.pill,
            backgroundColor: theme.colors.surface,
            borderWidth: 1,
            borderColor: theme.colors.surfaceBorder,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name="home-outline" size={Math.round(20 * scale)} color={theme.colors.text} />
        </TouchableOpacity>
        <View style={styles.titleRow}>
          <Ionicons name="globe-outline" size={Math.round(26 * scale)} color={theme.colors.accent} />
          <Text style={[styles.title, { fontSize: Math.round(18 * scale) }]} numberOfLines={1}>
            Qual é esse país?
          </Text>
        </View>
        <LevelIcon levelNumber={level + 1}></LevelIcon>
      </View>
      <View style={styles.progressWrapper}>
        <Text style={styles.progressLabel}>
          Fase {faseNumber} de {totalFases}
        </Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${(faseNumber / totalFases) * 100}%` }]} />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={[styles.content, isLandscape && styles.contentLandscape]}
        keyboardShouldPersistTaps="handled"
      >
        <Animatable.View
          key={`area-${level}-${fase}-${attempt}`}
          ref={viewRef}
          animation="fadeInUp"
          duration={450}
          useNativeDriver
          style={isLandscape ? styles.gameAreaLandscape : styles.gameAreaPortrait}
        >
          <Animatable.View
            key={`map-${level}-${fase}-${attempt}`}
            animation="zoomIn"
            duration={550}
            useNativeDriver
            style={[
              styles.mapCard,
              { width: mapSize, height: mapSize, borderRadius: mapSize / 2 },
            ]}
          >
            <Image
              style={{ width: mapSize * 0.9, height: mapSize * 0.9 }}
              resizeMode="contain"
              source={{ uri: item.map }}
            />
          </Animatable.View>
          <View style={isLandscape ? styles.gridLandscape : styles.gridPortrait}>
            <GridOptions
              key={`${level}-${fase}-${attempt}`}
              item={item}
              columns={2}
              isCorrectOption={(value) => {
                value ? correctOptionSelected() : playWrongSound();
              }}
              onLose={restartLevel}
            />
          </View>
        </Animatable.View>
      </ScrollView>
      {restartNotice && (
        <Animatable.View
          animation="fadeInUp"
          duration={300}
          useNativeDriver
          style={styles.restartBanner}
        >
          <View style={styles.restartPill}>
            <Ionicons name="refresh" size={18} color={theme.colors.text} />
            <Text style={styles.restartBannerText}>
              Você errou! Recomeçando o Level {level + 1}
            </Text>
          </View>
        </Animatable.View>
      )}
    </SafeAreaView>
  );
};
