import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
export interface RecordData {
  score: number;
  date: string;
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { theme } from '../../styles/theme';

export const Records: React.FC = () => {
  // Recupera recorde do localStorage
  const [record, setRecord] = useState<RecordData | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'fase' | 'records' | 'startGame'>>();

  useEffect(() => {
    const fetchRecord = async () => {
      const recordStr = await AsyncStorage.getItem('geographyGameRecord');
      if (recordStr) {
        setRecord(JSON.parse(recordStr));
      }
    };
    fetchRecord();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.trophy}>
          <Ionicons name="trophy" size={48} color={theme.colors.accent} />
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Seu recorde</Text>
          {record ? (
            <>
              <Text style={styles.score}>{record.score} ponto(s)</Text>
              <Text style={styles.date}>Data: {record.date}</Text>
            </>
          ) : (
            <Text style={styles.noRecord}>Nenhum recorde registrado ainda.</Text>
          )}
        </View>
        <Button
          text="VOLTAR AO MENU"
          textColor={theme.colors.background}
          buttonColor={theme.colors.primary}
          borderColor={theme.colors.primary}
          width={240}
          onPress={() => navigation.navigate({ name: "startGame", params: undefined })}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
    gap: theme.spacing.lg,
  },
  trophy: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: theme.colors.surface,
    borderWidth: 2,
    borderColor: theme.colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.surfaceBorder,
    padding: theme.spacing.xl,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.textMuted,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: theme.spacing.md,
  },
  score: {
    fontSize: 44,
    fontWeight: '800',
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  date: {
    fontSize: 16,
    color: theme.colors.textMuted,
  },
  noRecord: {
    fontSize: 18,
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
});

