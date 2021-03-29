import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, Dispatch } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import database from "../../data/database.json";

interface Props {
  currentEvent: string
  setCurrentEvent: Dispatch<string>
}

const eventKeys = Object.keys(database.commonEvents);

function getEventIndex(eventKey: string): number|null {
  const entries = Object.entries(eventKeys);

  const touple = entries.find(([, value]) => value === eventKey);

  if (!touple) {
    return null;
  }

  return parseInt(touple[0], 10);
}

export const EventSwitcher = ({
  currentEvent,
  setCurrentEvent
}: Props) => {
  const index = getEventIndex(currentEvent);

  if (index === null) {
    localStorage.removeItem("current-event");
    throw new Error("unhandled invalid event name :(");
  }

  const hasPrevious = index - 1 >= 0;
  const hasNext = index + 1 < eventKeys.length;

  function handleCurrentEventChange(event: ChangeEvent<HTMLSelectElement>) {
    setCurrentEvent(event.target.value);
  }

  function gotoNextPreviousEvent(next: boolean) {
    const change = next ? 1 : -1;
    const newIndex = change + index!;

    const belowZero = newIndex < 0;
    const aboveEventsLength = newIndex > eventKeys.length;

    if (belowZero || aboveEventsLength) {
      return;
    }

    setCurrentEvent(eventKeys[newIndex]);
  }

  return (
    <InputGroup style={{ width: "inherit" }}>
      <InputGroup.Prepend>
        <Button
          size="sm"
          disabled={!hasPrevious}
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
        {eventKeys.map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </Form.Control>

      <InputGroup.Append>
        <Button
          size="sm"
          disabled={!hasNext}
          onClick={() => gotoNextPreviousEvent(true)}
        >
          <FontAwesomeIcon icon={faCaretRight}/>
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};