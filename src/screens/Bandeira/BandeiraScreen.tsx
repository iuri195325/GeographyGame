import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../../navigation';
import { Button } from '../../components/Button';
import { ConfirmModal } from '../../components/ConfirmModal';
import { GameHeader } from '../../components/GameHeader';
import { useResponsive } from '../../hooks/useResponsive';
import { bandeiraUrl, Pais } from '../../game/countries';
import { gerarOpcoes } from '../../game/bandeira';
import { avancarSequencia, paisAtual } from '../../game/sequencia';
import {
    CHAVES_PROGRESSO,
    carregarProgresso,
    ProgressoModo,
    progressoInicial,
    salvarProgresso,
} from '../../game/progressStorage';
import { theme } from '../../styles/theme';

export const BandeiraScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'bandeira'>>();
    const { width } = useResponsive();
    const larguraBandeira = Math.min(width * 0.85, 420);

    const [progresso, setProgresso] = useState<ProgressoModo | null>(null);
    const [escolha, setEscolha] = useState<string | null>(null);
    const [erroImagem, setErroImagem] = useState(false);
    const [tentativaImagem, setTentativaImagem] = useState(0);
    const [confirmarSaida, setConfirmarSaida] = useState(false);

    useEffect(() => {
        let ativo = true;
        carregarProgresso(CHAVES_PROGRESSO.bandeira).then(salvo => {
            if (ativo) setProgresso(salvo ?? progressoInicial());
        });
        return () => {
            ativo = false;
        };
    }, []);

    const pais = progresso ? paisAtual(progresso.sequencia) : undefined;
    const opcoes = useMemo(() => (pais ? gerarOpcoes(pais) : []), [pais]);
    const respondida = escolha !== null;
    const acertou = respondida && escolha === pais?.id;

    const responder = (opcao: Pais) => {
        if (respondida) return;
        setEscolha(opcao.id);
    };

    const proximaFase = () => {
        if (!progresso) return;
        const novo: ProgressoModo = {
            sequencia: avancarSequencia(progresso.sequencia),
            fase: progresso.fase + 1,
        };
        setProgresso(novo);
        void salvarProgresso(CHAVES_PROGRESSO.bandeira, novo);
        setEscolha(null);
        setErroImagem(false);
        setTentativaImagem(0);
    };

    const pedirSaida = () => {
        if (!respondida) {
            setConfirmarSaida(true);
        } else {
            navigation.navigate('startGame');
        }
    };

    const corOpcao = (opcao: Pais) => {
        if (respondida && opcao.id === pais?.id) {
            return { fundo: theme.colors.correct, borda: theme.colors.correctBorder };
        }
        if (respondida && opcao.id === escolha) {
            return { fundo: theme.colors.wrong, borda: theme.colors.wrongBorder };
        }
        return { fundo: theme.colors.surface, borda: theme.colors.surfaceBorder };
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <GameHeader titulo="Adivinhe a Bandeira" subtitulo={progresso ? `Fase ${progresso.fase}` : undefined} onHome={pedirSaida} />
            {!progresso || !pais ? (
                <ActivityIndicator color={theme.colors.primary} style={{ marginTop: theme.spacing.xl }} />
            ) : (
                <ScrollView contentContainerStyle={{ alignItems: 'center', paddingHorizontal: theme.spacing.md, paddingBottom: theme.spacing.xl }}>
                    <View style={{ width: '100%', maxWidth: 520, alignItems: 'center' }}>
                        <Text style={{ color: theme.colors.textMuted, fontSize: 15, textAlign: 'center', marginBottom: theme.spacing.md }}>
                            Qual país tem esta bandeira?
                        </Text>

                        <View
                            style={{
                                width: larguraBandeira,
                                height: larguraBandeira * (2 / 3),
                                borderRadius: theme.radius.md,
                                borderWidth: 2,
                                borderColor: theme.colors.surfaceBorder,
                                backgroundColor: theme.colors.surface,
                                overflow: 'hidden',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: theme.spacing.lg,
                            }}
                        >
                            {erroImagem ? (
                                <View style={{ alignItems: 'center', padding: theme.spacing.md }}>
                                    <Ionicons name="image-outline" size={40} color={theme.colors.textMuted} />
                                    <Text style={{ color: theme.colors.textMuted, marginTop: theme.spacing.sm, textAlign: 'center' }}>
                                        Bandeira indisponível
                                    </Text>
                                    <TouchableOpacity
                                        accessibilityRole="button"
                                        onPress={() => {
                                            setErroImagem(false);
                                            setTentativaImagem(t => t + 1);
                                        }}
                                        style={{ marginTop: theme.spacing.sm, padding: theme.spacing.sm }}
                                    >
                                        <Text style={{ color: theme.colors.primary, fontWeight: '700' }}>TENTAR DE NOVO</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <Image
                                    key={`${pais.id}-${tentativaImagem}`}
                                    source={{ uri: bandeiraUrl(pais) }}
                                    accessibilityLabel="Bandeira do país a adivinhar"
                                    resizeMode="cover"
                                    onError={() => setErroImagem(true)}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            )}
                        </View>

                        <View style={{ width: '100%', maxWidth: 420 }}>
                            {opcoes.map(opcao => {
                                const cor = corOpcao(opcao);
                                return (
                                    <Button
                                        key={opcao.id}
                                        text={opcao.nome}
                                        textColor={theme.colors.text}
                                        buttonColor={cor.fundo}
                                        borderColor={cor.borda}
                                        width={'100%'}
                                        onPress={() => responder(opcao)}
                                        style={{ marginBottom: theme.spacing.sm }}
                                    />
                                );
                            })}
                        </View>

                        <View style={{ minHeight: 110, width: '100%', maxWidth: 420, alignItems: 'center', justifyContent: 'center', marginTop: theme.spacing.sm }}>
                            {respondida && (
                                <>
                                    <Animatable.Text
                                        animation={acertou ? 'bounceIn' : 'shake'}
                                        style={{
                                            color: acertou ? theme.colors.primary : theme.colors.wrongBorder,
                                            fontSize: 18,
                                            fontWeight: '800',
                                            textAlign: 'center',
                                            marginBottom: theme.spacing.md,
                                        }}
                                    >
                                        {acertou ? `Correto! É ${pais.nome}.` : `Não foi dessa vez. A bandeira é de ${pais.nome}.`}
                                    </Animatable.Text>
                                    <Button
                                        text="PRÓXIMA FASE"
                                        textColor={theme.colors.background}
                                        buttonColor={theme.colors.primary}
                                        borderColor={theme.colors.primary}
                                        width={'100%'}
                                        onPress={proximaFase}
                                    />
                                </>
                            )}
                        </View>
                    </View>
                </ScrollView>
            )}

            <ConfirmModal
                visivel={confirmarSaida}
                titulo="Sair da partida?"
                mensagem="A pergunta atual ainda não foi respondida."
                textoConfirmar="SAIR"
                textoCancelar="CONTINUAR"
                onConfirmar={() => {
                    setConfirmarSaida(false);
                    navigation.navigate('startGame');
                }}
                onCancelar={() => setConfirmarSaida(false)}
            />
        </SafeAreaView>
    );
};
