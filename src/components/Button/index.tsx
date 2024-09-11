import { Text, TouchableOpacity} from 'react-native';
import { ButtonProps } from '../../types/ButtonProps';
import { Constants } from '../../Constants';
import { styles } from '../../styles/startGameStyles';

export const Button = ({
    width,
    heigth,
    buttonColor,
    text,
    textColor,
    borderColor,
    ...props}: ButtonProps) => {
    return (
        <TouchableOpacity {...props} style={{...styles.buttonStyle,
            width: width ?? '100%',
            height: heigth ?? 'auto',
            backgroundColor: buttonColor ?? Constants.white,
            borderColor: borderColor ?? Constants.black
        }}>
            <Text style={{ 
                color: textColor ?? Constants.black,
                fontWeight: 800,
                padding: 10
            }}>{text}</Text>
        </TouchableOpacity>
    )
}