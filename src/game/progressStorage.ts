import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pais, paises } from './countries';
import { criarSequencia, Sequencia, sequenciaValida } from './sequencia';

export const CHAVES_PROGRESSO = {
    termo: 'geografia.termo.v1',
    bandeira: 'geografia.bandeira.v1',
} as const;

export type ProgressoModo = {
    sequencia: Sequencia;
    fase: number;
};

export const carregarProgresso = async (
    chave: string,
    base: Pais[] = paises
): Promise<ProgressoModo | null> => {
    try {
        const bruto = await AsyncStorage.getItem(chave);
        if (!bruto) return null;
        const dados = JSON.parse(bruto) as ProgressoModo;
        if (!sequenciaValida(dados?.sequencia, base) || typeof dados.fase !== 'number') {
            return null;
        }
        return dados;
    } catch {
        return null;
    }
};

export const salvarProgresso = async (chave: string, progresso: ProgressoModo): Promise<void> => {
    try {
        await AsyncStorage.setItem(chave, JSON.stringify(progresso));
    } catch {
        // Sem persistência o jogo continua funcionando na sessão atual.
    }
};

export const progressoInicial = (base: Pais[] = paises): ProgressoModo => ({
    sequencia: criarSequencia(base),
    fase: 1,
});
