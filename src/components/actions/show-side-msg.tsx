import { ShowSideMsg_T } from "../../interfaces/actions";
import { Message } from "../message";
import { Expression } from "../expression/expression";
import { MyContext } from "../../app";
import { useContext } from "react";
import { getCharacterName } from "../../helpers/get-character-name";
import { Alert } from "react-bootstrap";

interface Props {
  data: ShowSideMsg_T
}

export const ShowSideMsg = ({ data }: Props) => {
  const { debug } = useContext(MyContext);

  const niceName = getCharacterName(data.person.person);

  return (
    <Alert variant="secondary">
      {debug && (
        <span>
          Talking:
          {" "}
          <span
            className={niceName ? "name-tooltip" : ""}
            data-tooltip={data.person.person}
          >
            {niceName || data.person.person}
          </span>
        </span>
      )}

      <div className="action-container" style={{
        display: "flex",
        gap: "0.5rem",
        alignItems: "center"
      }}>
        <Expression data={data.person}/>
        <Message data={data.message}/>
      </div>
    </Alert>
  );
};