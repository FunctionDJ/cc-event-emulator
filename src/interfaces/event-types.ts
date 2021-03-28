export type EventType =
  {
    type: "CALL"
  }
  | {
    type: "SOCIAL_ACTION"
    member?: string
    actionType: "PARTY_JOIN" | "PARTY_LEAVE" | "CONTACT"
  }
  | {
    type: "ENEMY_ATTACKS"
    enemies?: string[]
    killCount?: 1
    rank?: 0
    battleStarted?: true
    levelGap?: number
    levelGapAbove?: number
    levelGapBelow?: number
    playerStarted?: boolean
  }
  | {
    type: "BATTLE_OVER"
    killCount: number
    rank?: "S" | "D"
  }
  | {
    type: "COOLDOWN_START"
    enemies?: string[]
    killCount: number
    rank?: "D"
    rankReached?: "S" | "A" | "B"
    enemy?: string | string[]
  }
  | {
    type: "MAP_ENTERED"
  }
  | {
    type: "LEVEL_UP"
    level: 0
    killCount: 1
    rank: 0
  }
  | {
    type: "TRIGGER_COMMON_EVENTS"
  }
  | {
    type: "FORCE_UPDATE"
  }
  | {
    type: "MENU_LEAVE"
  }
  | {
    type: "QUEST_ACCEPTED"
  }
  | {
    type: "PARTY_MEMBER_EVENT"
    member: string
    actionType?: "PARTY_JOIN"
    eventType: "DIES" | "REVIVED" | "EQUIP_UPDATE"
  }
  | {
    type: "DUNGEON_TRANSITION"
    mapTransition: ""
    areaTransition: "ENTER" | "LEAVE"
    transitionType: "ENTER" | "LEAVE"
  }
  | {
    type: "ENEMY_DEFEATED"
    killCount: 1
    rank: 0
    enemy?: string
  }