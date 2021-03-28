/* eslint-disable camelcase */

import buggy from "./sprites/buggy.json";
import captain from "./sprites/captain.json";
import designer from "./sprites/designer.json";
import emilie from "./sprites/emilie.json";
import fancyguy from "./sprites/fancyguy.json";
import gautham_rl from "./sprites/gautham-rl.json";
import gautham_rl2 from "./sprites/gautham-rl2.json";
import genius from "./sprites/genius.json";
import glasses from "./sprites/glasses.json";
import grumpy from "./sprites/grumpy.json";
import guild_leader from "./sprites/guild-leader.json";
import investor from "./sprites/investor.json";
import lea from "./sprites/lea.json";
import luke from "./sprites/luke.json";
import schneider from "./sprites/schneider.json";
import sergey_rl from "./sprites/sergey-rl.json";
import sergey from "./sprites/sergey.json";
import shady from "./sprites/shady.json";
import shizuka from "./sprites/shizuka.json";
import sidekick from "./sprites/sidekick.json";

import { Translations } from "../interfaces/common-types";

export interface Set {
  src: string
  xCount?: number
  offX: number
  offY: number
  width: number
  height: number
}

export interface Sheet {
  name?: string
  sheet?: string
  dirs?: number | string
  time?: number
  repeat?: boolean
  frames?: number[]
  flipX?: number[]
  tileOffsets?: number[]
  dirOffsets?: number[][]
  SUB?: Sheet[]
}

export interface Sprite_T {
  srcX: number
  srcY: number
  width: number
  height: number
  destX: number
  destY: number
  hideOnClip?: true
  subX?: number
  subY?: number
  img?: "" | "special" | "hand" | "panic"
}

export interface Part {
  [key: string]: Sprite_T
}

export interface Expression_T {
  anim?: number[]
  time?: number
  repeat?: number
  faces: string[][]
}

export interface Config {
  relativeVel?: number
  floatHeight?: number
  floatVariance?: number
  walkAnims?: string
  shadow?: number
}

export interface Character extends Config {
  name: Translations
  realname?: Translations
  size?: { x: number, y: number, z: number }
  animSheet: string | {
    namedSheets: {
      move: Set
      poses?: Set
      ar?: Set
      arPoses?: Set
    }
    shapeType: "Y_FLAT"
    offset: { x: number, y: number, z: number }
    SUB: Sheet[]
    DOCTYPE?: string
  }
  walkAnimSet: {
    [set: string]: {
      [animation: string]: string
    }
  }
  walkAnims?: "normal"
  configs: {
    [set: string]: Config
  }
  face: {
    width: number
    height: number
    centerX: number
    centerY: number
    src: string
    subImages?: {
      [key: string]: string
    }
    parts: Part[]
    expressions: {
      [key: string]: Expression_T
    }
  }
}

export const all = {
  buggy: (buggy as unknown as Character),
  captain: (captain as unknown as Character),
  designer: (designer as unknown as Character),
  emilie: (emilie as unknown as Character),
  fancyguy: (fancyguy as unknown as Character),
  "gautham-rl": (gautham_rl as unknown as Character),
  "gautham-rl2": (gautham_rl2 as unknown as Character),
  genius: (genius as unknown as Character),
  glasses: (glasses as unknown as Character),
  grumpy: (grumpy as unknown as Character),
  "guild-leader": (guild_leader as unknown as Character),
  investor: (investor as unknown as Character),
  lea: (lea as unknown as Character),
  luke: (luke as unknown as Character),
  schneider: (schneider as unknown as Character),
  "sergey-rl": (sergey_rl as unknown as Character),
  sergey: (sergey as unknown as Character),
  shady: (shady as unknown as Character),
  shizuka: (shizuka as unknown as Character),
  sidekick: (sidekick as unknown as Character)
};