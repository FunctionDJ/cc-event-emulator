/* eslint-disable no-use-before-define */
import {
  If_T,
  IfElse_T
} from "./action-groups/if-actions";

import {
  Translations,
  Person,
  Entity,
  ChangeType,
  Character,
  Coordinates2D,
  GameAction,
  Resource,
  Transition
} from "./common-types";

export interface ShowSideMsg_T {
  type: "SHOW_SIDE_MSG";
  message: Translations
  person: Person
}

export interface AddMsgPerson_T {
  type: "ADD_MSG_PERSON"
  name?: Translations
  side: "LEFT" | "RIGHT"
  order: number
  clearSide: false
  person: Person
}

export interface SetForceCombat_T {
  type: "SET_FORCE_COMBAT";
  value: boolean;
}

export interface ShowMsg_T {
  type: "SHOW_MSG"
  message: Translations
  autoContinue: boolean
  person: Person
}

export interface ChangeVarNumber_T {
  type: "CHANGE_VAR_NUMBER";
  changeType: ChangeType
  varName: string;
  value: number | { varName: string };
}

export interface Wait_T {
  type: "WAIT";
  ignoreSlowDown?: boolean;
  time: number;
}

export interface ShowArenaRoundGui_T {
  type: "SHOW_ARENA_ROUND_GUI";
  wait: false;
}

export interface ShowCenterMsg_T {
  type: "SHOW_CENTER_MSG"
  overMenu?: true
  titleText: Translations
  text: Translations
}

export interface SelectRandom_T {
  type: "SELECT_RANDOM";
  options: {
    "0": string
    count: number
    weight: number
    activeCondition?: string
  }[];
  "0_0"?: Action[];
  "1_0"?: Action[];
  "0_1"?: Action[];
  "1_1"?: Action[];
  "2_0"?: Action[];
  "0_2"?: Action[];
  "3_0"?: Action[];
  "0_3"?: Action[];
  "4_0"?: Action[];
  "5_0"?: Action[];
  "6_0"?: Action[];
  "7_0"?: Action[];
  "8_0"?: Action[];
  "9_0"?: Action[];
}

export type Action =
  | { type: "STOP_SKIP_MODE" }
  | { type: "START_ARENA_ROUND" }
  | { type: "TP_TO_CUR_ARENA_ROUND" }
  | { type: "REMOVE_ALL_ENEMY_TARGET" }
  | { type: "END_ARENA_ROUND", onDeath?: true }
  | { type: "END_ARENA_CUP" }
  | { type: "SET_PLAYER_SP_LEVEL", level: string }
  | { type: "SET_PARTY_MEMBER_SP_LEVEL", level: string, member: string }
  | { type: "REMOVE_ALL_PLAYER_CAMERAS" }
  | {
    type: "MANUAL_COMBATANT_REVIVE"
    entity: Entity
  }
  | {
    type: "ADD_PLAYER_CAMERA_TARGET";
    entity: Entity;
  }
  | {
    type: "ADD_SLOW_MOTION"
    name: string
    factor: number
    time: 0
  }
  | {
    type: "ADD_CP"
    element: "NEUTRAL"
    amount: 1
  }
  | {
    type: "SET_FINAL_DRAMATIC_EFFECT";
    effectType: string;
  }
  | {
    type: "REMOVE_PROXIES";
    group: "";
  }
  | {
    type: "PAUSE_TIMER";
    name: string;
  }
  | {
    type: "RESUME_BGM"
    mode: "SLOW" | "MEDIUM"
  }
  | {
    type: "SET_PLAYER_CORE"
    core: string
    value: boolean
  }
  | {
    type: "REMOVE_PLAYER_CAMERA_TARGET";
    entity: Entity;
  }
  | ShowArenaRoundGui_T // :)
  | {
    type: "SET_ALL_ENEMY_TARGET";
    target: Entity;
  }
  | SetForceCombat_T
  | {
    type: "CLEAR_EFFECTS";
    entity: Entity;
  }
  | {
    type: "CLEAR_MSG"
    side: "ALL"
  }
  | {
    type: "CLEAR_SLOW_MOTION"
    name: string
    time: 1
  }
  | {
    type: "SET_FORCE_COMBAT";
    value: boolean;
  }
  | {
    type: "CHANGE_VAR_STRING"
    changeType: ChangeType
    value: string
    varName: string
  }
  | {
    type: "RESET_SKILL_TREE"
    element: string
  }
  | Wait_T
  | {
    type: "KILL_ENEMIES"
    enemyType: "",
    noRumble: true,
  }
  | {
    type: "RUMBLE_SCREEN"
    rumbleType: "RANDOM"
    name: ""
    duration: number
    power: "STRONG" | "STRONGER"
    speed: "FASTER"
    fade: true
  }
  | {
    type: "SET_FACE"
    face: "SOUTH" | "EAST"
    rotate: true
    rotateSpeed: number
  }
  | {
    type: "REMOVE_MSG_PERSON"
    person: Character
  }
  | ShowMsg_T
  | {
    type: "SET_LANDMARK_ACTIVE_STATE"
    state: false
    area: string
    landmark?: string
  }
  | {
    type: "SET_MSG_EXPRESSION"
    person: Person
  }
  | {
    type: "UNDO_OPENED_CHEST_TRACK"
    area: string
    chestId: number
    map: string
    variable?: string
  }
  | {
    type: "SET_CAMERA_ZOOM"
    zoom: number
    duration: number
    transition: Transition
  }
  | ShowCenterMsg_T
  | {
    type: "SHOW_TUTORIAL_MSG"
    text: Translations
    pos: Coordinates2D
    size: Coordinates2D
    direction: "BOTTOM_RIGHT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "TOP_LEFT"
    connectPos: number
    stopTime: false
  }
  | {
    type: "SHOW_EXTERN_ANIM"
    wait: false
    anim: Resource
  }
  | {
    type: "JUMP";
    jumpHeight: "M";
    wait: true;
    ignoreSounds: boolean;
  }
  | {
    type: "SET_CONTACT_TYPE"
    member: string
    status: "UNKNOWN"
  }
  | {
    type: "ADD_PARTY_MEMBER"
    member: string
    temporary?: false
    skipEffect: boolean
  }
  | If_T | IfElse_T
  | {
    type: "CHANGE_VAR_BOOL"
    changeType: ChangeType
    map?: string
    varName: string
    value: boolean
  }
  | {
    type: "SHOW_TUTORIAL_PLAYER_MSG"
    stopTime: true
    text: Translations
    targetType: "PLAYER" | "CROSSHAIR"
    size: Coordinates2D
  }
  | {
    type: "GOTO_LABEL"
    name: "end" | "denied" | "tutorialStart" | "leave"
  }
  | { type: "START_AUTO_CTRL" }
  | {
    type: "LABEL"
    name: string
  }
  | {
    type: "TRIGGER_COMMON_EVENTS"
    commonEventType: "MENU_LEAVE"
  }
  | {
    type: "SHOW_TUTORIAL_START"
    msgType: "TUTORIAL" | "GENERIC"
    title: Translations
    content: Translations
    image?: string
    acceptStep: Action[]
    cancelStep: Action[]
  }
  | {
    type: "RING_PRIVATE_MSG"
    outgoing: true
  }
  | {
    type: "START_PRIVATE_MSG"
  }
  | {
    type: "END_PRIVATE_MSG"
    skipSounds: false
  }
  | {
    type: "SET_CAMERA_BETWEEN"
    entity1: Entity
    entity2: Entity
    speed: "FAST"
    transition: Transition
    wait: true
    waitSkip: number
    zoom: 1
  }
  | {
    type: "HIDE_ENTITY"
    entity: Entity
    skipEffects: false
  }
  | {
    type: "SET_FACE_TO_ENTITY";
    entity: Entity;
    rotate: true;
    rotateSpeed: number;
  }
  | ChangeVarNumber_T
  | {
    type: "CHANGE_VAR_STRING"
    varName: string
    value: string
    changeType: ChangeType
  }
  | {
    type: "SET_OVERLAY";
    alpha: 0 | 1;
    time: 0 | 1;
    lighter: false;
    color: "black";
  }
  | {
    type: "SET_OVERLAY_CORNER";
    alpha: number;
    time: 0 | 1;
    color: "BLACK";
  }
  | {
    type: "SHOW_BOARD_MSG"
    text: Translations
    center: boolean
    autoContinue: false
  }
  | {
    type: "SET_MOBILITY_BLOCK"
    value: "TELEPORT"
  }
  | {
    type: "TELEPORT"
    map: string
    marker: "checkpoint" | "east" | "start" | "quest-hub-2"
  }
  | {
    type: "UNLOCK_TROPHY"
    trophy: string
  }
  | {
    type: "REMOVE_ITEM"
    item: string
    amount: number
    unequip?: true
  }
  | {
    type: "REMOVE_PARTY_MEMBER"
    member: string
    skipEffect: boolean
  }
  | {
    type: "GIVE_ITEM"
    item: string
    amount: number | { varName: string }
    skip: boolean
  }
  | {
    type: "CLEAR_BOARD_MSG"
  }
  | {
    type: "SHOW_GET_MSG"
    msgType: "OBTAINED" | "EXTENDED" | "REMOVED"
    object: Translations
  }
  | {
    type: "SOLVE_QUEST_CONDITION"
    quest: {
      quest: string
      label: string
    }
  }
  | {
    type: "PAUSE_BGM"
    mode: "SLOW" | "FAST" | "MEDIUM_OUT"
  }
  | AddMsgPerson_T
  | {
    type: "SPAWN_ARENA_WAVE";
    focusPlayer: false;
    silent: boolean;
    increase: boolean;
  }
  | {
    type: "SET_ZOOM_BLUR";
    zoomType: "MEDIUM" | "LIGHT";
    fadeIn: number;
    duration: number;
    fadeOut: number;
  }
  | {
    type: "RESET_CAMERA";
    speed: "FAST" | "NORMAL";
    transition: Transition
    wait: true;
    waitSkip: number;
  }
  | {
    type: "SHOW_ANIMATION";
    anim: string;
    viaWalkConfig: false;
    wait: false;
    followUp?: string;
  }
  | {
    type: "PLAY_SOUND";
    volume: number;
    name: string;
    loop: boolean;
    offset: 0;
    startTime: 0;
    speed?: number
    sound: string;
  }
  | {
    type: "SET_AUTO_CTRL_STICK"
    stick: "left" | "right"
    value: Coordinates2D
    duration: number
  }
  | {
    type: "SET_AUTO_CTRL_ACTION"
    action: GameAction | "menuConfirm" | "menuDown" | "menu" | "menuUp"
    value: 1
    hold: boolean
    deviceFilter: "" | "GAMEPAD"
  }
  | {
    type: "NAVIGATE_ESCAPE_ENTITY";
    entity: Entity;
    maxTime: number;
    distance: number;
    throwing: false;
    planOnly: false;
  }
  | {
    type: "RESET_SP"
    target: Entity
    sp: number
  }
  | {
    type: "SELECT_FIRST"
    options: string[]
    "0": ShowSideMsg_T[]
    "1": ShowSideMsg_T[]
    "2": ShowSideMsg_T[]
    "3": ShowSideMsg_T[]
  }
  | {
    type: "DO_ACTION";
    entity: Entity;
    action: Action[];
    repeating: false;
    wait: boolean;
    keepState: boolean;
    immediately: false;
  }
  | {
    type: "UNLOCK_LORE"
    notify: true
    lore: string
  }
  | {
    type: "RESET_TRADER"
    trader: string
  }
  | {
    type: "SET_STAT_MAP_NUMBER"
    map: string
    stat: string
    value: {
      varName: string
    }
  }
  | {
    type: "SPAWN_ARENA_WAVE";
    focusPlayer: false;
    silent: boolean;
    increase: boolean;
  }
  | {
    type: "SET_AUTO_CTRL_MOUSE"
    pos: Coordinates2D
    duration: number
  }
  | {
    type: "SHOW_MODAL_CHOICE"
    "0": Action[]
    "1": Action[]
    text: Translations
    options: {
      "0": " "
      label: Translations
    }[]
  }
  | {
    type: "END_AUTO_CTRL"
  }
  | {
    type: "WAIT_UNTIL_ACTION_DONE"
    entity: Entity
  }
  | {
    type: "CLEAR_AUTO_CTRL_ACTION"
    action: GameAction
    deviceFilter: ""
  }
  | {
    type: "SET_VAR_COMBAT_ART_TYPE_WITH_MIN_LEVEL"
    level: number
    varName: string
  }
  | {
    type: "SWITCH_TO_ELEMENT_WITH_COMBAT_ART"
    artType?: "THROW" | "ATTACK" | "DASH" | "GUARD"
    level: number
    skipEffect: false
  }
  | {
    type: "SHOW_EFFECT";
    actionDetached?: false
    fixPos?: false
    align: "BASE" | "BOTTOM" | "CENTER";
    entity?: Entity;
    rotateFace?: number
    duration: number;
    group?: "" | "scale";
    wait: false;
    flipLeftFace?: true
    waitSkip: 0;
    effect: Resource;
    offset: {
      x: number;
      y: number;
      z: number;
    };
  }
  | { type: "CLEAR_ANIMATION" }
  | ShowSideMsg_T
  | SelectRandom_T
  | {
    type: "SET_CAMERA_TARGET";
    zoom: number;
    waitSkip: number;
    wait: boolean;
    transition: Transition
    speed: "NORMAL" | "FAST" | "FASTER"
    offsetX: 0;
    offsetY: number;
    lockZ?: true;
    entity: Entity;
  };