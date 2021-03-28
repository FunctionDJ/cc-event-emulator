import { ShowCenterMsg_T } from "../../interfaces/actions";
import { Message } from "../message";

interface Props {
  data: ShowCenterMsg_T
}

export const ShowCenterMsg = ({ data }: Props) => {
  return <Message data={data.text}/>;
};