import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "react-bootstrap";
import { Wait_T } from "../../interfaces/actions";

interface Props {
  data: Wait_T
}

export const Wait = ({ data }: Props) => {
  return (
    <>
      <Alert variant="primary">
        <FontAwesomeIcon icon={faStopwatch}/>
        {" Wait "}
        <code>
          {data.time}
        </code>
          {" seconds"}
        {data.ignoreSlowDown && ", ignore slow down"}
      </Alert>
    </>
  );
};