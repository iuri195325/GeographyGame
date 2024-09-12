import { Row } from '../Layout/row';
import { Column } from '../Layout/column';
import { GameProps, OptionType } from '../../types/GameProps';
import { CountrysOptions } from '../CountrysOptions';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

export const GridOptions = ({item, isCorrectOption}: GameProps) => {
    const {first_option, fourth_option, second_option, third_option} = item
    const [isCorretOption, setIsCorrectOption] = useState<boolean | null>(null);
    const { goBack  } = useNavigation();

    const validIsCorrectOption = (options: OptionType) => {
        if(!options.isCorrect){
            setIsCorrectOption(false);
            setTimeout(() => {
                goBack();
            }, 500)
        }
        if(isCorrectOption) isCorrectOption(options.isCorrect ? true : false)
    }

    return (
        <Column style={{marginTop: '30%'}} >
            <Row style={{justifyContent: 'space-evenly', marginBottom: 20}}>
                <CountrysOptions nome={first_option.nome} imageName={first_option.imageName}  onPress={() => validIsCorrectOption(first_option)} isCorrectOption={isCorretOption}/>
                <CountrysOptions nome={second_option.nome} imageName={second_option.imageName}  onPress={() => validIsCorrectOption(second_option)} isCorrectOption={isCorretOption}/>
            </Row>
            <Row style={{justifyContent: 'space-evenly'}}>
                <CountrysOptions nome={third_option.nome} imageName={third_option.imageName}  onPress={() => validIsCorrectOption(third_option)} isCorrectOption={isCorretOption}/>
                <CountrysOptions nome={fourth_option.nome} imageName={fourth_option.imageName}  onPress={() => validIsCorrectOption(fourth_option)} isCorrectOption={isCorretOption}/>
            </Row>
        </Column>
    )
}