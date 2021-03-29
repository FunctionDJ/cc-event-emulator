import { AC } from "../action";
import { ActionBase } from "../action-base";
import { ShowMsg_T } from "../../interfaces/actions";
import { Message } from "../message";

export const ShowMsg: AC<ShowMsg_T> = ({ data }) => (
  <ActionBase
    data={data}
    icon={null}
  >
    <Message data={data.message}/>
  </ActionBase>
);