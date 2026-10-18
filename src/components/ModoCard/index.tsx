import { ComponentProps } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../styles/theme';

type IconName = ComponentProps<typeof Ionicons>['name'];

type ModoCardProps = {
    titulo: string;
    descricao: string;
    icone: IconName;
    cor: string;
    onPress: () => void;
};

export const ModoCard = ({ titulo, descricao, icone, cor, onPress }: ModoCardProps) => (
    <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel={titulo}
        onPress={onPress}
        activeOpacity={0.8}
        style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: theme.spacing.md,
            borderRadius: theme.radius.md,
            backgroundColor: theme.colors.surface,
            borderWidth: 1,
            borderColor: cor,
        }}
    >
        <View style={{
            width: 52,
            height: 52,
            borderRadius: theme.radius.sm,
            backgroundColor: cor,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: theme.spacing.md,
        }}>
            <Ionicons name={icone} size={28} color={theme.colors.background} />
        </View>
        <View style={{ flex: 1 }}>
            <Text style={{ color: theme.colors.text, fontSize: 17, fontWeight: '800' }}>{titulo}</Text>
            <Text style={{ color: theme.colors.textMuted, fontSize: 13, marginTop: 2 }}>{descricao}</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color={theme.colors.textMuted} />
    </TouchableOpacity>
);
