import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export interface RecordData {
  score: number;
  date: string;
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';

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
      <View style={styles.card}>
        <Text style={styles.title}>Recorde</Text>
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
        textColor="#fff"
        buttonColor="#4CAF50"
        borderColor="#4CAF50"
        width={200}
        style={{ marginTop: 32 }}
        onPress={() => navigation.navigate({ name: "startGame", params: undefined })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7FFF9',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 16,
  },
  score: {
    fontSize: 32,
    color: '#222',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  noRecord: {
    fontSize: 18,
    color: '#888',
  },
});
