import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { SetForceCombat_T } from "../../interfaces/actions";
import { AC } from "../action";
import { ActionBase } from "../action-base";

export const SetForceCombat: AC<SetForceCombat_T> = ({ data }) => (
  <ActionBase
    title={`Force combat: ${data.value}`}
    data={data}
    icon={faShieldAlt}
  />
);