import { ShowMsg_T } from "../../interfaces/actions";
import { Message } from "../message";

interface Props {
  data: ShowMsg_T
}

export const ShowMsg = ({ data }: Props) => {
  return <Message data={data.message}/>;
};