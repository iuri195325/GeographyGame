import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../styles/theme';

type ConfirmModalProps = {
    visivel: boolean;
    titulo: string;
    mensagem: string;
    textoConfirmar: string;
    textoCancelar?: string;
    onConfirmar: () => void;
    onCancelar: () => void;
};

// Usa Modal do React Native: Alert.alert não funciona na versão web.
export const ConfirmModal = ({
    visivel,
    titulo,
    mensagem,
    textoConfirmar,
    textoCancelar = 'CANCELAR',
    onConfirmar,
    onCancelar,
}: ConfirmModalProps) => (
    <Modal visible={visivel} transparent animationType="fade" onRequestClose={onCancelar}>
        <View style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.6)',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing.lg,
        }}>
            <View style={{
                width: '100%',
                maxWidth: 380,
                backgroundColor: theme.colors.surface,
                borderRadius: theme.radius.lg,
                borderWidth: 1,
                borderColor: theme.colors.surfaceBorder,
                padding: theme.spacing.lg,
            }}>
                <Text style={{ color: theme.colors.text, fontSize: 20, fontWeight: '800', marginBottom: theme.spacing.sm }}>
                    {titulo}
                </Text>
                <Text style={{ color: theme.colors.textMuted, fontSize: 15, lineHeight: 22, marginBottom: theme.spacing.lg }}>
                    {mensagem}
                </Text>
                <View style={{ flexDirection: 'row', gap: theme.spacing.sm }}>
                    <TouchableOpacity
                        onPress={onCancelar}
                        activeOpacity={0.8}
                        style={{
                            flex: 1,
                            paddingVertical: 12,
                            borderRadius: theme.radius.sm,
                            borderWidth: 1,
                            borderColor: theme.colors.surfaceBorder,
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: theme.colors.text, fontWeight: '700' }}>{textoCancelar}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onConfirmar}
                        activeOpacity={0.8}
                        style={{
                            flex: 1,
                            paddingVertical: 12,
                            borderRadius: theme.radius.sm,
                            backgroundColor: theme.colors.wrong,
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: theme.colors.text, fontWeight: '800' }}>{textoConfirmar}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
);
