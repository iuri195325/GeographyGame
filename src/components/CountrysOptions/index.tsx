import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/CountrysOptionsStyles';
import { Row } from '../Layout/row';
import { CountrysOptionsProps } from '../../types/CountrysOptionsProps';

export const CountrysOptions = ({ nome, imageName, isCorrectOption, ...props }: CountrysOptionsProps) => {
    return (
        <TouchableOpacity {...props} style={{...styles.container, backgroundColor: (isCorrectOption || isCorrectOption == null) ? '#2F4800' : 'red'}}>
            <Row style={{ alignItems: "center" }}>
                <Image style={styles.image} source={{ uri: imageName }}></Image>
                <Text style={styles.text}>{nome}</Text>
            </Row>
        </TouchableOpacity>
    )
}