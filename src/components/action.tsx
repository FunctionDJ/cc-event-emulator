import { ReactElement } from "react";
import { Action as ActionType } from "../interfaces/actions";
import { ShowCenterMsg } from "./actions/show-center-msg";
import { ShowSideMsg } from "./actions/show-side-msg";
import { SelectRandom } from "./actions/select-random";
import { Wait } from "./actions/wait";
import { If } from "./actions/if";
import { ChangeVarNumber } from "./actions/change-var-number";
import { Alert, Col, Row } from "react-bootstrap";
import { AlertLogButton } from "./alert-log-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { SetForceCombat } from "./actions/set-force-combat";
import { ShowMsg } from "./actions/show-msg";
import { AddMsgPerson } from "./actions/add-msg-person";

interface Props {
  data: ActionType
}

// ActionComponent
export type AC<T extends ActionType> = ({ data }: { data: T }) => ReactElement

type ActionComponentAnyType = ({ data }: { data: any }) => ReactElement

export const Action = ({ data }: Props) => {
  const Component = getComponent(data);

  const content = Component
    ? <Component data={data}/>
    : (
      <Alert variant="danger">
        <FontAwesomeIcon icon={faExclamationTriangle}/>
        {" Unhandled Action: "}
        {data.type}
        <AlertLogButton data={data}/>
      </Alert>
      ); // TODO fix eslint indent rule so this looks better

  return (
    <Row>
      <Col className="action-container">
        {content}
      </Col>
    </Row>
  );
};

function getComponent<T extends ActionType>(data: T): ActionComponentAnyType|null {
  switch (data.type) {
    case "SELECT_RANDOM": return SelectRandom;
    case "WAIT": return Wait;
    case "IF": return If;
    case "SHOW_CENTER_MSG": return ShowCenterMsg;
    case "SHOW_MSG": return ShowMsg;
    case "ADD_MSG_PERSON": return AddMsgPerson;
    case "SHOW_SIDE_MSG": return ShowSideMsg;
    case "CHANGE_VAR_NUMBER": return ChangeVarNumber;
    case "SET_FORCE_COMBAT": return SetForceCombat;
    default: return null;
  }
};