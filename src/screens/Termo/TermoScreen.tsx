import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../../navigation';
import { Button } from '../../components/Button';
import { ConfirmModal } from '../../components/ConfirmModal';
import { GameHeader } from '../../components/GameHeader';
import { TecladoVirtual } from '../../components/TecladoVirtual';
import { useResponsive } from '../../hooks/useResponsive';
import { useTecladoFisico } from '../../hooks/useTecladoFisico';
import { paises } from '../../game/countries';
import {
    avaliarTentativa,
    combinarEstadosTeclas,
    EstadoLetra,
    letrasDoNome,
    MAX_TENTATIVAS,
    palavraCorreta,
} from '../../game/termo';
import { avancarSequencia, paisAtual, trocarPaisAtual } from '../../game/sequencia';
import {
    CHAVES_PROGRESSO,
    carregarProgresso,
    ProgressoModo,
    progressoInicial,
    salvarProgresso,
} from '../../game/progressStorage';
import { theme } from '../../styles/theme';

type Tentativa = { letras: string[]; estados: EstadoLetra[] };
type SituacaoRodada = 'jogando' | 'venceu' | 'perdeu';

const ESPACO_ENTRE_CELULAS = 4;

const corDaCelula = (estado: EstadoLetra | undefined, letra: string) => {
    switch (estado) {
        case 'certo':
            return { fundo: theme.colors.correct, borda: theme.colors.correctBorder, texto: theme.colors.text };
        case 'presente':
            return { fundo: theme.colors.accent, borda: theme.colors.accent, texto: theme.colors.background };
        case 'ausente':
            return { fundo: theme.colors.absent, borda: theme.colors.absent, texto: theme.colors.text };
        default:
            return letra
                ? { fundo: theme.colors.surface, borda: theme.colors.textMuted, texto: theme.colors.text }
                : { fundo: theme.colors.surface, borda: theme.colors.surfaceBorder, texto: theme.colors.text };
    }
};

type LinhaTermoProps = {
    letras: string[];
    estados?: EstadoLetra[];
    tamanho: number;
    tile: number;
    animar: boolean;
};

const LinhaTermo = ({ letras, estados, tamanho, tile, animar }: LinhaTermoProps) => (
    <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginBottom: ESPACO_ENTRE_CELULAS }}>
        {Array.from({ length: tamanho }).map((_, i) => {
            const letra = letras[i] ?? '';
            const cor = corDaCelula(estados?.[i], letra);
            return (
                <Animatable.View
                    key={i}
                    animation={animar ? 'flipInY' : undefined}
                    duration={500}
                    delay={i * 120}
                    style={{
                        width: tile,
                        height: tile,
                        margin: ESPACO_ENTRE_CELULAS / 2,
                        borderRadius: 6,
                        borderWidth: 2,
                        borderColor: cor.borda,
                        backgroundColor: cor.fundo,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ color: cor.texto, fontWeight: '800', fontSize: Math.round(tile * 0.55) }}>
                        {letra}
                    </Text>
                </Animatable.View>
            );
        })}
    </View>
);

export const TermoScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'termo'>>();
    const { width } = useResponsive();
    const larguraConteudo = Math.min(width, 520);

    const [progresso, setProgresso] = useState<ProgressoModo | null>(null);
    const [tentativas, setTentativas] = useState<Tentativa[]>([]);
    const [entrada, setEntrada] = useState('');
    const [teclas, setTeclas] = useState<Record<string, EstadoLetra>>({});
    const [situacao, setSituacao] = useState<SituacaoRodada>('jogando');
    const [mensagem, setMensagem] = useState<string | null>(null);
    const [rodada, setRodada] = useState(0);
    const [confirmarSaida, setConfirmarSaida] = useState(false);

    useEffect(() => {
        let ativo = true;
        carregarProgresso(CHAVES_PROGRESSO.termo).then(salvo => {
            if (ativo) setProgresso(salvo ?? progressoInicial());
        });
        return () => {
            ativo = false;
        };
    }, []);

    const pais = progresso ? paisAtual(progresso.sequencia) : undefined;
    const segredo = useMemo(() => (pais ? letrasDoNome(pais.nome) : []), [pais]);
    const tamanho = segredo.length;

    const tile = Math.max(
        14,
        Math.min(48, Math.floor((larguraConteudo - theme.spacing.lg * 2 - ESPACO_ENTRE_CELULAS * tamanho) / Math.max(tamanho, 1)))
    );
    const larguraTecla = Math.max(22, Math.min(40, Math.floor((larguraConteudo - theme.spacing.lg) / 11) - 6));

    const atualizarProgresso = (novo: ProgressoModo) => {
        setProgresso(novo);
        void salvarProgresso(CHAVES_PROGRESSO.termo, novo);
    };

    const novaRodada = () => {
        setTentativas([]);
        setEntrada('');
        setTeclas({});
        setMensagem(null);
        setSituacao('jogando');
        setRodada(r => r + 1);
    };

    const enviar = () => {
        if (!pais || situacao !== 'jogando') return;
        if (entrada.length < tamanho) {
            setMensagem(`A palavra precisa ter ${tamanho} letras.`);
            return;
        }
        if (!paises.some(p => palavraCorreta(entrada, p.nome))) {
            setMensagem('Essa palavra não está na base de países.');
            return;
        }

        const letras = entrada.split('');
        const estados = avaliarTentativa(letras, segredo.map(l => l.chave));
        const novas = [...tentativas, { letras, estados }];

        setTentativas(novas);
        setTeclas(anteriores => combinarEstadosTeclas(anteriores, letras, estados));
        setEntrada('');
        setMensagem(null);

        if (palavraCorreta(entrada, pais.nome)) {
            setSituacao('venceu');
        } else if (novas.length >= MAX_TENTATIVAS) {
            setSituacao('perdeu');
        }
    };

    const handleTecla = (tecla: string) => {
        if (situacao !== 'jogando') return;
        if (tecla === 'ENTER') {
            enviar();
        } else if (tecla === 'BACKSPACE') {
            setEntrada(e => e.slice(0, -1));
            setMensagem(null);
        } else if (/^[A-Z]$/.test(tecla) && entrada.length < tamanho) {
            setEntrada(e => e + tecla);
            setMensagem(null);
        }
    };

    useTecladoFisico(handleTecla, progresso !== null && situacao === 'jogando' && !confirmarSaida);

    const proximaFase = () => {
        if (!progresso) return;
        atualizarProgresso({
            sequencia: avancarSequencia(progresso.sequencia),
            fase: progresso.fase + 1,
        });
        novaRodada();
    };

    const tentarNovamente = () => {
        if (!progresso) return;
        atualizarProgresso({
            sequencia: trocarPaisAtual(progresso.sequencia),
            fase: progresso.fase,
        });
        novaRodada();
    };

    const pedirSaida = () => {
        if (situacao === 'jogando' && (tentativas.length > 0 || entrada.length > 0)) {
            setConfirmarSaida(true);
        } else {
            navigation.navigate('startGame');
        }
    };

    const linhas = Array.from({ length: MAX_TENTATIVAS }, (_, linha) => {
        if (linha < tentativas.length) {
            return (
                <LinhaTermo
                    key={`${rodada}-${linha}`}
                    letras={tentativas[linha].letras}
                    estados={tentativas[linha].estados}
                    tamanho={tamanho}
                    tile={tile}
                    animar={linha === tentativas.length - 1}
                />
            );
        }
        if (linha === tentativas.length && situacao === 'jogando') {
            return (
                <LinhaTermo
                    key={`entrada-${rodada}`}
                    letras={entrada.split('')}
                    tamanho={tamanho}
                    tile={tile}
                    animar={false}
                />
            );
        }
        return <LinhaTermo key={`vazia-${rodada}-${linha}`} letras={[]} tamanho={tamanho} tile={tile} animar={false} />;
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <GameHeader titulo="Adivinhe o País" subtitulo={progresso ? `Fase ${progresso.fase}` : undefined} onHome={pedirSaida} />
            {!progresso || !pais ? (
                <ActivityIndicator color={theme.colors.primary} style={{ marginTop: theme.spacing.xl }} />
            ) : (
                <ScrollView contentContainerStyle={{ alignItems: 'center', paddingHorizontal: theme.spacing.md, paddingBottom: theme.spacing.xl }}>
                    <View style={{ width: '100%', maxWidth: 520, alignItems: 'center' }}>
                        <Text style={{ color: theme.colors.textMuted, fontSize: 14, textAlign: 'center', marginBottom: theme.spacing.md }}>
                            Descubra o país em {MAX_TENTATIVAS} tentativas. Espaços e hífens não contam como letras.
                        </Text>
                        <Text style={{ color: theme.colors.text, fontSize: 14, fontWeight: '700', marginBottom: theme.spacing.sm }}>
                            Tentativas restantes: {MAX_TENTATIVAS - tentativas.length}
                        </Text>

                        <View style={{ marginBottom: theme.spacing.md, width: '100%', alignItems: 'center' }}>
                            {linhas}
                        </View>

                        <View style={{ minHeight: 120, width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: theme.spacing.sm }}>
                            {situacao === 'venceu' && pais && (
                                <>
                                    <Animatable.Text animation="bounceIn" style={{ color: theme.colors.primary, fontSize: 20, fontWeight: '800', textAlign: 'center', marginBottom: theme.spacing.md }}>
                                        Acertou! É {pais.nome}.
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
                            {situacao === 'perdeu' && pais && (
                                <>
                                    <Animatable.Text animation="shake" style={{ color: theme.colors.wrongBorder, fontSize: 18, fontWeight: '800', textAlign: 'center', marginBottom: theme.spacing.md }}>
                                        Não foi dessa vez. O país era {pais.nome}.
                                    </Animatable.Text>
                                    <Button
                                        text="TENTAR NOVAMENTE"
                                        textColor={theme.colors.background}
                                        buttonColor={theme.colors.accent}
                                        borderColor={theme.colors.accent}
                                        width={'100%'}
                                        onPress={tentarNovamente}
                                    />
                                </>
                            )}
                            {situacao === 'jogando' && (
                                <Text style={{ color: theme.colors.wrongBorder, fontSize: 15, fontWeight: '600', textAlign: 'center' }}>
                                    {mensagem ?? ' '}
                                </Text>
                            )}
                        </View>

                        {situacao === 'jogando' && (
                            <TecladoVirtual
                                tecla={larguraTecla}
                                estados={teclas}
                                onLetra={letra => handleTecla(letra)}
                                onApagar={() => handleTecla('BACKSPACE')}
                                onEnviar={() => handleTecla('ENTER')}
                            />
                        )}
                    </View>
                </ScrollView>
            )}

            <ConfirmModal
                visivel={confirmarSaida}
                titulo="Sair da partida?"
                mensagem="A tentativa em andamento será perdida."
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
