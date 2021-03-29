import { ShowCenterMsg_T } from "../../interfaces/actions";
import { AC } from "../action";
import { Message } from "../message";

export const ShowCenterMsg: AC<ShowCenterMsg_T> = ({ data }) => (
  <Message data={data.text}/>
);