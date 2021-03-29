import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";
import { ChangeVarNumber_T } from "../../interfaces/actions";
import { AC } from "../action";
import { ActionBase } from "../action-base";

export const ChangeVarNumber: AC<ChangeVarNumber_T> = ({ data }) => {
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
    <ActionBase
      data={data}
      icon={faCalculator}
      title={content}
    />
  );
};