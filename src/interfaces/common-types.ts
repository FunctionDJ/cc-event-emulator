export type GameAction =
  "moveDirX"
  | "aiming"
  | "charge"
  | "menuBack"
  | "menuHotkeyHelp2"
  | "questCircleLeft"
  | "dashing"
  | "guarding"

export type Entity =
  { player: true }
  | { party: string }
  | { varName: string }
  | {
    global: true
    name: string
  }

export interface Resource {
  sheet: string
  name: string
}

export type ChangeType = "add" | "set" | "mul"

export type Transition = "EASE_OUT" | "EASE_IN_OUT"

export type Character = "main.lea" | "greenies.female-researcher"
  | "main.sergey-av" | "main.buggy" | "main.grumpy" | "main.guild-leader"
  | "main.luke" | "main.shizuka" | "main.schneider" | "antagonists.sidekick"
  | "antagonists.fancyguy" | "main.glasses" | "main.emilie"
  | "misc.radical-fish" | "main.schneider2" | "guests.sao" | "main.sergey"

export type Expression = "NOD" | "DEFAULT" | "EXCITED" | "SMUG" | "PROUD" | "ANNOYED"
  | "JOKING" | "DOWN" | "EXHAUSTED" | "THINKING" | "SURPRISED" | "NOTIFYING"
  | "SERIOUS" | "EYES_CLOSED" | "GRIN" | "SHAKE" | "LAUGHING" | "NERVOUS"
  | "EMBARRASSED" | "SCARED" | "SMILE" | "SURPRISED_TOWARD" | "MOPING" | "SHOCKED"
  | "SHOUT" | "ANGRY" | "DETERMINED" | "UP" | "ASTONISHED" | "PRE_CRY2" | "PRE_CRY1"
  | "SAD" | "SHAKE_EYE_CLOSED" | "MASKED_GRIN" | "MASKED" | "SARCASTIC" | "AWAY"
  | "HOLD_HORNS_ANNOYED" | "TOWARDS" | "WORRIED" | "WHISTLING" | "WONDERING"
  | "LAUGH" | "WINK" | "CHARMED" | "COMPLAINING" | "PISSED" | "SKEPTICAL" | "PONDERING"
  | "NORM_SERIOUS" | "PONDERING_NORM" | "EVIL_GRIN" | "FUNNY_SMILE" | "BRIGHT"
  | "CONFLICTED" | "TOWARD" | "INNOCENT" | "SURPRISED_AWAY" | "AWWW" | "POINTING"
  | "LECTURING" | "CONTENT" | "SHOUTING" | "HAND_POINT" | "PANIC" | "THOUGHTFUL"
  | "SLEEP" | "CURIOUS" | "TAUNTING" | "WATCH_OUT_BADASS" | "SUSPICIOUS" | "UNCERTAIN"
  | "NOD_SAD" | "HAPPY" | "SWEATY_SMILE" | "SHRUG" | "CULTURE" | "PAIN" | "BLANK"
  | "DISGUSTED" | "BROKEN" | "DEAD_INSIDE" | "CONCERNED" | "DENYING" | "INSANE_DOWN"
  | "INSANE" | "DUMBFOUNDED" | "RAGING" | "DOWN_EYE_CLOSED"

export interface Coordinates2D {
  x: number
  y: number
}

export type Language =
  "en_US"
  | "de_DE"
  | "fr_FR"
  | "zh_CN"
  | "ja_JP"
  | "ko_KR"
  | "zh_TW"

export const LanguageValues = [
  "en_US",
  "de_DE",
  "fr_FR",
  "zh_CN",
  "ja_JP",
  "ko_KR",
  "zh_TW"
];

export type Translations = {
  [key in Language]?: string
} & { langUid: number }

export interface Person {
  person: Character
  expression: Expression
}