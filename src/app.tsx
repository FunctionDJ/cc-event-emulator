import { useState, createContext, useEffect, Dispatch } from "react";
import database from "./data/database.json";
import { CommonEvents } from "./interfaces/common-events";
import { Language } from "./interfaces/common-types";
import { Action } from "./components/action";
import useLocalStorage from "react-use-localstorage";
import { useLocalStorageJSON } from "./helpers/use-local-storage-json";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { Controls } from "./controls";
import { Container, Row } from "react-bootstrap";

const commonEvents = database.commonEvents as CommonEvents;

interface MyContextType {
  language: Language
  debug: boolean
}

export const MyContext = createContext<MyContextType>({
  language: "en_US",
  debug: false
});

export function App() {
  const [currentEvent, setCurrentEvent] = useLocalStorage("current-event", "emilie-hedgehag");
  const [debug, setDebug] = useLocalStorageJSON("debug-mode", false);
  const [language, setLanguage] = useLocalStorage("language", "en_US") as [Language, Dispatch<Language>];

  const [context, setContext] = useState({ debug, language });

  useEffect(() => {
    setContext({ debug, language });
  }, [debug, language]);

  return (
    <Container
      fluid="xl"
      className="my-3 d-flex flex-column"
      style={{ gap: "0.75rem" }}
    >
      <MyContext.Provider value={context}>
        <Row>
          <Controls
            currentEvent={currentEvent}
            setCurrentEvent={setCurrentEvent}
            language={language}
            setLanguage={setLanguage}
            debug={debug}
            setDebug={setDebug}
          />
        </Row>
        {currentEvent && commonEvents[currentEvent].event.map((action, i) => (
          <Action key={i} data={action}/>
        ))}
      </MyContext.Provider>
    </Container>
  );
}