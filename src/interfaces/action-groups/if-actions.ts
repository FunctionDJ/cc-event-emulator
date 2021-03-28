import { Action } from "../actions";

interface IfBase {
  type: "IF"
  condition: string
  thenStep: Action[]
}

export interface If_T extends IfBase {
  withElse: false
}

export interface IfElse_T extends IfBase {
  withElse: true
  elseStep: Action[]
}