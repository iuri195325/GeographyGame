import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scroll: {
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.lg,
    },
    content: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentLado: {
      flexDirection: 'row',
      gap: theme.spacing.xl,
    },
    hero: {
      alignItems: 'center',
    },
    heroLado: {
      flex: 1,
      alignItems: 'flex-end',
    },
    tagline: {
      color: theme.colors.textMuted,
      fontSize: 16,
      marginBottom: theme.spacing.xl,
      textAlign: 'center',
    },
    buttons: {
      width: '100%',
      maxWidth: 420,
      gap: theme.spacing.md,
    },
    buttonsLado: {
      flex: 1,
      width: undefined,
      alignItems: 'stretch',
    },
    buttonStyle: {
      alignSelf: 'center',
      borderWidth: 2,
      borderRadius: theme.radius.pill,
      paddingVertical: 14,
      paddingHorizontal: theme.spacing.lg,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.35,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
      elevation: 6,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '800',
      letterSpacing: 1,
    },
  });