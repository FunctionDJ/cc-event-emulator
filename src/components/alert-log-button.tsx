import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { MyContext } from "../app";

interface Props {
  data: any,
  floatRight?: true
}

export const AlertLogButton = ({ data, floatRight }: Props) => {
  const { debug } = useContext(MyContext);

  if (!debug) {
    return null;
  }

  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id="tooltip-log">
          Log data to console
        </Tooltip>
      }
    >
      <Badge
        pill
        as="a"
        href="#/"
        variant="light"
        className={floatRight ? "float-right" : ""}
        onClick={() => console.log(data)}
      >
        <FontAwesomeIcon icon={faTerminal}/>
      </Badge>
    </OverlayTrigger>
  );
};