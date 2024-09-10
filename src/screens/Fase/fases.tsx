import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/faseStyles';
import { Row } from '../../components/Layout/row';
import { LevelIcon } from '../../components/LevelIcon';
import { Column } from '../../components/Layout/column';

export const Fase = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Row style={styles.row}>
                <Image style={{ ...styles.image }} source={require('../../image/brasil.png')} />
                <Text style={{color: '#fff', fontWeight: '900', fontSize: 17}}>Qual é esse país?</Text>
                <LevelIcon levelNumber={5}></LevelIcon>
            </Row>
            <Column style={{marginTop: '20%', alignItems: 'center'}}>
                <Image style={{ ...styles.map }} source={require('../../image/Maps/brazil_map.png')} />
            </Column>
        </SafeAreaView>
    )
}