import { AC } from "../action";
import { ActionBase } from "../action-base";
import { AddMsgPerson_T } from "../../interfaces/actions";
import { Expression } from "../expression/expression";
import { getCharacterName } from "../../helpers/get-character-name";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export const AddMsgPerson: AC<AddMsgPerson_T> = ({ data }) => (
  <ActionBase
    variant="secondary"
    data={data}
    icon={faUserPlus}
    title={
      <>
        {"Add "}
        <code>
          {getCharacterName(data.person.person)}
        </code>
        {" to "}
        {data.side.toLowerCase()}
      </>
    }
  >
    <Expression expressionData={data.person}/>
  </ActionBase>
);