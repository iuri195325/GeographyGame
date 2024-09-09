import { TouchableOpacityProps, TextProps, DimensionValue } from "react-native";

export type ButtonProps = {
    text: string
    textColor?: string,
    buttonColor?: string
    borderColor?: string,
    width?: DimensionValue
    heigth?: DimensionValue 
} & TouchableOpacityProps & TextProps