import { Action } from "../action";
import { SelectRandom_T } from "../../interfaces/actions";
import { flexGap, flexGapRem } from "../../constants";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";

interface Props {
  data: SelectRandom_T
}

export const SelectRandom = ({ data }: Props) => {
  return (
    <Alert variant="success" className="action" style={{
      display: "flex",
      flexDirection: "column",
      gap: flexGapRem
    }}>
      <span>
        <FontAwesomeIcon icon={faRandom}/>
        {" Select Random"}
      </span>
      {data.options.map((o, i) => (
        <Alert variant="dark" key={i} style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem"
        }}>
          <div
            className="d-flex justify-content-center"
            style={{ width: 200, textAlign: "center" }}
          >
            <code>
              {o.activeCondition ?? "no condition"}
            </code>
          </div>

          <div className="d-flex flex-column action-container" style={{
            flex: 1,
            padding: "0.0rem",
            gap: "0.75rem"
          }}>
            {/* @ts-ignore */}
            {data[`${i}_0`].map((action, i) => (
              <Action key={i} data={action}/>
            ))}
          </div>
        </Alert>
      ))}
    </Alert>
  );
};