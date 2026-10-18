import { TouchableOpacityProps } from "react-native";

export type OptionStatus = 'idle' | 'correct' | 'wrong' | 'dimmed';

export type CountrysOptionsProps = {
    nome: string
    imageName: string
    status?: OptionStatus
    flagSize?: number
} & TouchableOpacityProps