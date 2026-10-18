import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../styles/theme';

type GameHeaderProps = {
    titulo: string;
    subtitulo?: string;
    onHome: () => void;
};

export const GameHeader = ({ titulo, subtitulo, onHome }: GameHeaderProps) => (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: theme.spacing.md,
        paddingTop: Platform.OS === 'web' ? theme.spacing.md : theme.spacing.sm,
        paddingBottom: theme.spacing.sm,
    }}>
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Voltar ao início"
            onPress={onHome}
            activeOpacity={0.7}
            style={{
                width: 44,
                height: 44,
                borderRadius: theme.radius.pill,
                backgroundColor: theme.colors.surface,
                borderWidth: 1,
                borderColor: theme.colors.surfaceBorder,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Ionicons name="home-outline" size={22} color={theme.colors.text} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ color: theme.colors.text, fontSize: 18, fontWeight: '800' }}>{titulo}</Text>
            {subtitulo ? (
                <Text style={{ color: theme.colors.textMuted, fontSize: 13, marginTop: 2 }}>{subtitulo}</Text>
            ) : null}
        </View>
        <View style={{ width: 44 }} />
    </View>
);
