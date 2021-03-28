import { Action } from "../action";
import { If_T, IfElse_T } from "../../interfaces/action-groups/if-actions";
import { Alert } from "react-bootstrap";

export const If = ({ data }: { data: If_T | IfElse_T }) => {
  return (
    <Alert variant="warning">
      <p>
        If
        <code className="ml-2">{data.condition}</code>
      </p>
      <div style={{
        paddingLeft: "0.5rem",
        borderLeft: "1px solid grey"
      }}>
        {data.thenStep.map((action, i) => (
          <Action key={i} data={action}/>
        ))}
      </div>
    </Alert>
  );
};