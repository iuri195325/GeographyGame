import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { theme } from '../theme';
import { OptionStatus } from '../../types/CountrysOptionsProps';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.sm,
        borderRadius: theme.radius.md,
        borderWidth: 2,
        minHeight: 130,
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.surfaceBorder,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    },
    flagWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.light,
        borderRadius: theme.radius.pill,
        marginBottom: theme.spacing.sm,
    },
    flag: {
        borderRadius: theme.radius.pill,
    },
    text: {
        fontSize: 15,
        fontWeight: '800',
        color: theme.colors.text,
        textAlign: 'center',
    },
});

export const statusStyles: Record<OptionStatus, { container: ViewStyle; text: TextStyle }> = {
    idle: { container: {}, text: {} },
    correct: {
        container: { backgroundColor: theme.colors.correct, borderColor: theme.colors.correctBorder },
        text: {},
    },
    wrong: {
        container: { backgroundColor: theme.colors.wrong, borderColor: theme.colors.wrongBorder },
        text: {},
    },
    dimmed: { container: { opacity: 0.45 }, text: {} },
};