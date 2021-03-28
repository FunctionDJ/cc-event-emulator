import { Language, LanguageValues } from "./interfaces/common-types";
import { ChangeEvent, Dispatch } from "react";

import { Col, Form } from "react-bootstrap";
import { EventSwitcher } from "./components/controls/event-switcher";

interface Props {
  currentEvent: string
  setCurrentEvent: Dispatch<string>
  language: Language
  setLanguage: Dispatch<Language>
  debug: boolean
  setDebug: Dispatch<boolean>
}

export const Controls = ({
  currentEvent, setCurrentEvent,
  language, setLanguage,
  debug, setDebug
}: Props) => {
  function handleDebugChange(event: ChangeEvent<HTMLInputElement>) {
    setDebug(event.target.checked);
  }

  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value as unknown as Language);
  }

  return (
    <>
      <Form.Group className="d-flex align-items-center m-0">
        <Form.Label column>
          Current event
        </Form.Label>
        <EventSwitcher
          currentEvent={currentEvent}
          setCurrentEvent={setCurrentEvent}
        />
      </Form.Group>

      <Form.Group className="d-flex align-items-center m-0">
        <Form.Label column>
          Language
        </Form.Label>
        <Form.Control
          style={{ width: "inherit" }}
          as="select"
          size="sm"
          value={language}
          onChange={handleLanguageChange}
        >
          {LanguageValues.map(l => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group className="d-flex align-items-center m-0">
        <Form.Label column>
          Debug Mode
        </Form.Label>
        <Form.Check
          type="switch"
          checked={debug}
          id="debug-switch"
          onChange={handleDebugChange}
        />
      </Form.Group>
    </>
  );
};