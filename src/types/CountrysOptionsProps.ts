import { TouchableOpacityProps, ViewProps } from "react-native";

export type CountrysOptionsProps = {
    nome: string
    imageName: string
    isCorrectOption?: boolean | null
} & ViewProps & TouchableOpacityProps