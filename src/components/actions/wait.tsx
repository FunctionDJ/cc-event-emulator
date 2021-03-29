import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { Wait_T } from "../../interfaces/actions";
import { AC } from "../action";
import { ActionBase } from "../action-base";

export const Wait: AC<Wait_T> = ({ data }) => (
  <ActionBase
    data={data}
    title={
      <>
        {"Wait "}
        <code>
          {data.time}
        </code>
          {" seconds"}
        {data.ignoreSlowDown && ", ignore slow down"}
      </>
    }
    icon={faStopwatch}
  />
);