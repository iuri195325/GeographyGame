import { Row } from '../Layout/row';
import { Column } from '../Layout/column';
import { GameProps, OptionType } from '../../types/GameProps';
import { CountrysOptions } from '../CountrysOptions';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

export const GridOptions = ({item}: GameProps) => {
    const {first_option, fourth_option, second_option, third_option} = item
    const [isCorretOption, setIsCorrectOption] = useState<boolean | null>(null);
    const { goBack  } = useNavigation();

    const isCorrectOption = (options: OptionType) => {
        if(!options.isCorrect){
            setIsCorrectOption(false);
            setTimeout(() => {
                goBack();
            }, 500)
        }
    }

    return (
        <Column style={{marginTop: 70}} >
            <Row style={{justifyContent: 'space-evenly', marginBottom: 20}}>
                <CountrysOptions nome={first_option.nome} imageName={first_option.imageName}  onPress={() => isCorrectOption(first_option)} isCorrectOption={isCorretOption}/>
                <CountrysOptions nome={second_option.nome} imageName={second_option.imageName}  onPress={() => isCorrectOption(second_option)} isCorrectOption={isCorretOption}/>
            </Row>
            <Row style={{justifyContent: 'space-evenly'}}>
                <CountrysOptions nome={third_option.nome} imageName={third_option.imageName}  onPress={() => isCorrectOption(third_option)} isCorrectOption={isCorretOption}/>
                <CountrysOptions nome={fourth_option.nome} imageName={fourth_option.imageName}  onPress={() => isCorrectOption(fourth_option)} isCorrectOption={isCorretOption}/>
            </Row>
        </Column>
    )
}