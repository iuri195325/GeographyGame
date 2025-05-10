import { levels } from "../Constants";
import { ItemType } from "../types/GameProps";

// Embaralha um array genérico
function shuffle<T>(arr: T[]): T[] {
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// Embaralha cada level separadamente
export const embaralharLevels = (levelsArr: ItemType[][]): ItemType[][] => {
  return levelsArr.map(level => shuffle(level));
};