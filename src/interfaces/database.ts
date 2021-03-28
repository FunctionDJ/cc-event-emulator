import { CommonEvents } from "./common-events";
import { Translations } from "./common-types";

interface ItemDrop {
  item: string
  prob: number,
  min: number,
  max: number,
  rank: string
  boosted: boolean,
  condition: string
}

export interface Database {
  commonEvents: CommonEvents
  enemies: {
    [key: string]: {
      name: Translations
      track: boolean
      order: number
      area: string
      category: string
      species: Translations
      level: number
      boostedLevel: number
      credit: number
      exp: number
      boss: boolean
      anim: boolean
      extra: boolean
      params: {
        hp: number
        attack: number
        defense: number
        focus: number
        elemFactor: number[]
        statusInflict: number[]
      }
      itemDrops: ItemDrop[]
      descriptions: {
        text: Translations
        condition: string
      }[]
    }
  }
}