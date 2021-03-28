import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, Dispatch } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import database from "../../data/database.json";

interface Props {
  currentEvent: string
  setCurrentEvent: Dispatch<string>
}

export const EventSwitcher = ({
  currentEvent,
  setCurrentEvent
}: Props) => {
  function handleCurrentEventChange(event: ChangeEvent<HTMLSelectElement>) {
    setCurrentEvent(event.target.value);
  }

  function gotoNextPreviousEvent(next: boolean) {
    const change = next ? 1 : -1;

    const touple = Object.entries(Object.keys(database.commonEvents)).find(([, value]) => (
      value === currentEvent
    ));

    if (!touple) {
      return;
    }

    setCurrentEvent(Object.keys(database.commonEvents)[parseInt(touple[0], 10) + change]);
  }

  return (
    <InputGroup style={{ width: "inherit" }}>
      <InputGroup.Prepend>
        <Button
          size="sm"
          onClick={() => gotoNextPreviousEvent(false)}
        >
          <FontAwesomeIcon icon={faCaretLeft}/>
        </Button>
      </InputGroup.Prepend>

      <Form.Control
        size="sm"
        as="select"
        value={currentEvent || ""}
        onChange={handleCurrentEventChange}
      >
        {Object.keys(database.commonEvents).map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </Form.Control>

      <InputGroup.Append>
        <Button
          size="sm"
          onClick={() => gotoNextPreviousEvent(true)}
        >
          <FontAwesomeIcon icon={faCaretRight}/>
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};