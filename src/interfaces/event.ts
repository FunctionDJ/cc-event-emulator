import { EventType } from "./event-types";
import { Action } from "./actions";

export interface Event {
  frequency: "ALWAYS" | "REGULAR" | "SOMETIMES";
  repeat: "ONCE" | "REPEAT";
  condition?: string
  overrideSideMessage?: boolean;
  runOnTrigger?: number[];
  type: EventType
  loopCount?: number
  event: Action[];
  eventType: "PARALLEL" | "CUTSCENE"
}