import type { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EstadoLetra } from '../../game/termo';
import { theme } from '../../styles/theme';

const LINHAS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

type TecladoVirtualProps = {
    tecla: number; // largura base de cada tecla de letra
    estados: Record<string, EstadoLetra>;
    desabilitado?: boolean;
    onLetra: (letra: string) => void;
    onApagar: () => void;
    onEnviar: () => void;
};

const corDoEstado = (estado?: EstadoLetra) => {
    switch (estado) {
        case 'certo': return { fundo: theme.colors.correct, texto: theme.colors.text };
        case 'presente': return { fundo: theme.colors.accent, texto: theme.colors.background };
        case 'ausente': return { fundo: theme.colors.absent, texto: theme.colors.textMuted };
        default: return { fundo: theme.colors.surface, texto: theme.colors.text };
    }
};

export const TecladoVirtual = ({ tecla, estados, desabilitado, onLetra, onApagar, onEnviar }: TecladoVirtualProps) => {
    const alturaTecla = Math.round(tecla * 1.25);
    const larguraEspecial = Math.round(tecla * 1.7);

    const teclaComFundo = (
        rotulo: string,
        onPress: () => void,
        fundo: string,
        texto: string,
        largura: number,
        acessibilidade: string,
        conteudo?: ReactNode,
    ) => (
        <TouchableOpacity
            key={acessibilidade}
            accessibilityRole="button"
            accessibilityLabel={acessibilidade}
            disabled={desabilitado}
            onPress={onPress}
            activeOpacity={0.7}
            style={{
                width: largura,
                height: alturaTecla,
                borderRadius: theme.radius.sm,
                backgroundColor: fundo,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 3,
                marginVertical: 3,
                opacity: desabilitado ? 0.5 : 1,
            }}
        >
            {conteudo ?? <Text style={{ color: texto, fontWeight: '800', fontSize: Math.round(tecla * 0.42) }}>{rotulo}</Text>}
        </TouchableOpacity>
    );

    return (
        <View style={{ alignItems: 'center' }}>
            {LINHAS.map((linha, indice) => (
                <View key={linha} style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {indice === 2 && teclaComFundo(
                        'ENTER', onEnviar, theme.colors.primary, theme.colors.background, larguraEspecial, 'Enviar palavra',
                        <Text style={{ color: theme.colors.background, fontWeight: '800', fontSize: Math.round(tecla * 0.36) }}>ENTER</Text>
                    )}
                    {linha.split('').map(letra => {
                        const cor = corDoEstado(estados[letra]);
                        return teclaComFundo(letra, () => onLetra(letra), cor.fundo, cor.texto, tecla, `Letra ${letra}`);
                    })}
                    {indice === 2 && teclaComFundo(
                        'APAGAR', onApagar, theme.colors.surface, theme.colors.text, larguraEspecial, 'Apagar letra',
                        <Ionicons name="backspace-outline" size={Math.round(tecla * 0.6)} color={theme.colors.text} />
                    )}
                </View>
            ))}
        </View>
    );
};
