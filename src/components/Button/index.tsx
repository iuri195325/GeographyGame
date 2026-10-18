import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from '../../types/ButtonProps';
import { theme } from '../../styles/theme';
import { styles } from '../../styles/startGameStyles';

export const Button = ({
    width,
    heigth,
    buttonColor,
    text,
    textColor,
    borderColor,
    style,
    ...props}: ButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.8} {...props} style={[styles.buttonStyle, {
            width: width ?? '100%',
            height: heigth ?? 'auto',
            backgroundColor: buttonColor ?? theme.colors.surface,
            borderColor: borderColor ?? theme.colors.surfaceBorder,
        }, style]}>
            <Text style={[styles.buttonText, { color: textColor ?? theme.colors.text }]}>{text}</Text>
        </TouchableOpacity>
    )
}