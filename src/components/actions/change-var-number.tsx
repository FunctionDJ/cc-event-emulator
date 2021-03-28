import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { Alert } from "react-bootstrap";
import { ChangeVarNumber_T } from "../../interfaces/actions";

interface Props {
  data: ChangeVarNumber_T
}

export const ChangeVarNumber = ({ data }: Props) => {
  const value = (
    <code>
      {typeof data.value === "object" // this is so stupid
        ? data.value.varName
        : data.value
      }
    </code>
  );

  const variable = (
    <code>
      {data.varName}
    </code>
  );

  let content: ReactElement;

  switch (data.changeType) {
    case "add": {
      content = (
        <>
          {"Add "}
          {value}
          {" to "}
          {variable}
        </>
      );
      break;
    }
    case "set": {
      content = (
        <>
          {"Set "}
          {value}
          {" to "}
          {variable}
        </>
      );
      break;
    }
    case "mul": {
      content = (
        <>
          {"Multiply "}
          {variable}
          {" with "}
          {value}
        </>
      );
      break;
    }
    default: {
      throw new Error("unhandled changeType");
    }
  }

  return (
    <Alert variant="primary">
      <FontAwesomeIcon icon={faCalculator}/>
      {" "}
      {content}
    </Alert>
  );
};