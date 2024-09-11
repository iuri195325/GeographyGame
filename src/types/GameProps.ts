export type OptionType = {
    nome: string
    imageName: string
    isCorrect?: boolean | null
}

export type ItemType = {
    map: string,
    first_option: OptionType
    second_option: OptionType
    third_option: OptionType
    fourth_option: OptionType
}

export type GameProps = {
    item: ItemType
}