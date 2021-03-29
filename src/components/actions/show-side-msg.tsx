import { ShowSideMsg_T } from "../../interfaces/actions";
import { Message } from "../message";
import { Expression } from "../expression/expression";
import { MyContext } from "../../app";
import { useContext } from "react";
import { getCharacterName } from "../../helpers/get-character-name";
import { ActionBase } from "../action-base";

interface Props {
  data: ShowSideMsg_T
}

export const ShowSideMsg = ({ data }: Props) => {
  const { debug } = useContext(MyContext);

  const niceName = getCharacterName(data.person.person);

  return (
    <ActionBase
      data={data}
      icon={null}
      variant="secondary"
    >
      {debug && (
        <p className="mb-1">
          Talking:
          {" "}
          <span
            className={niceName ? "name-tooltip" : ""}
            data-tooltip={data.person.person}
          >
            {niceName || data.person.person}
          </span>
        </p>
      )}

      <div className="action-container" style={{
        display: "flex",
        gap: "0.5rem",
        alignItems: "center"
      }}>
        <Expression expressionData={data.person}/>
        <Message data={data.message}/>
      </div>
    </ActionBase>
  );
};