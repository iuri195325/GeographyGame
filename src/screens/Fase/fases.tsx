import { View, Text, Image, FlatList, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/faseStyles';
import { Row } from '../../components/Layout/row';
import { LevelIcon } from '../../components/LevelIcon';
import { Column } from '../../components/Layout/column';
import { CountrysOptions } from '../../components/CountrysOptions';
import { gameObject } from '../../Constants';
import { GridOptions } from '../../components/GridOptions/GridOptions';
import { useState } from 'react';

export const Fase = () => {
    const [level, setLevel] = useState<number>(1);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={gameObject}
                contentContainerStyle={{ height: "90%" }}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Row style={styles.row}>
                                <Image style={{ ...styles.image }} source={require('../../image/brasil.png')} />
                                <Text style={{ color: '#fff', fontWeight: '900', fontSize: 17 }}>Qual é esse país?</Text>
                                <LevelIcon levelNumber={level}></LevelIcon>
                            </Row>
                            <Column style={styles.column}>
                                <Image style={{ ...styles.map }} source={{ uri: item.map }} />
                                <GridOptions item={item} />
                            </Column>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}