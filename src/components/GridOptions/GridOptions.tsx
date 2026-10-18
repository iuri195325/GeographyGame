import { GameProps, OptionType } from '../../types/GameProps';
import { CountrysOptions } from '../CountrysOptions';
import { OptionStatus } from '../../types/CountrysOptionsProps';
import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useResponsive } from '../../hooks/useResponsive';
import { theme } from '../../styles/theme';

const CORRECT_ANSWER_DELAY = 700;
const WRONG_ANSWER_DELAY = 1200;

type GridOptionsProps = GameProps & {
    columns?: 2 | 4;
    onLose?: () => void;
};

export const GridOptions = ({ item, isCorrectOption, onLose, columns = 2 }: GridOptionsProps) => {
    const options: OptionType[] = [item.first_option, item.second_option, item.third_option, item.fourth_option];
    const correctIndex = options.findIndex(option => option.isCorrect);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const { scale } = useResponsive();
    const flagSize = Math.round(56 * scale);

    useEffect(() => () => clearTimeout(timer.current), []);

    const statusOf = (index: number): OptionStatus => {
        if (selectedIndex === null) return 'idle';
        if (index === correctIndex) return 'correct';
        if (index === selectedIndex) return 'wrong';
        return 'dimmed';
    };

    const handlePress = (index: number) => {
        if (selectedIndex !== null) return;
        setSelectedIndex(index);
        if (options[index].isCorrect) {
            timer.current = setTimeout(() => isCorrectOption?.(true), CORRECT_ANSWER_DELAY);
        } else {
            isCorrectOption?.(false);
            timer.current = setTimeout(() => onLose?.(), WRONG_ANSWER_DELAY);
        }
    };

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: theme.spacing.md, columnGap: theme.spacing.sm }}>
            {options.map((option, index) => (
                <CountrysOptions
                    key={option.nome}
                    nome={option.nome}
                    imageName={option.imageName}
                    flagSize={flagSize}
                    status={statusOf(index)}
                    onPress={() => handlePress(index)}
                    style={{ width: `${100 / columns - 2}%` }}
                />
            ))}
        </View>
    )
}
