import { gameObject } from "../Constants";
import { ItemType } from "../types/GameProps";

export const embaralharArray = (): ItemType[] => {
    const tamanhoGameArray: number = gameObject.length
    let arrayCopia: Array<ItemType> = []
    let numeroAleatoriosJaGerados: Array<number> = []
    let i: number = 0

    while (i < tamanhoGameArray){
        let randomNumber = Math.floor(Math.random() * tamanhoGameArray);
        if(!numeroAleatoriosJaGerados.includes(randomNumber)){
            arrayCopia.push(gameObject[randomNumber])
            numeroAleatoriosJaGerados.push(randomNumber);
            i++;
         }
    }

    return arrayCopia
}