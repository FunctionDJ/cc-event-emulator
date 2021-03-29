import { useContext } from "react";
import { MyContext } from "../app";
import { ShowSideMsg_T } from "../interfaces/actions";
import { FONT_COLORS, lex } from "../helpers/lex";
import database from "../data/database.json";
import { Database } from "../interfaces/database";
import { Alert } from "react-bootstrap";
import { AlertLogButton } from "./alert-log-button";

// @ts-ignore
const enemies = database.enemies as Database["enemies"];

interface Props {
  data: ShowSideMsg_T["message"]
}

export const Message = ({ data }: Props) => {
  const {
    language,
    debug
  } = useContext(MyContext);

  const text = data[language];

  if (text === undefined) {
    return (
      <Alert variant="danger">
        Language <em>{language}</em> not defined for this message.
        <AlertLogButton data={data}/>
      </Alert>
    );
  }

  const lexed = lex(text);

  const tokens = Array.from(lexed);

  const output = [];
  let index = 0;

  let color: string|undefined;

  for (const token of tokens) {
    switch (token.type) {
      case "LITERAL_TEXT": {
        output.push(
          <span
            key={index++}
            style={{
              color: color ?? ""
            }}
          >
            {token.data}
          </span>
        );

        break;
      }
      case "COLOR": {
        color = FONT_COLORS.get(token.data);

        if (debug) {
          output.push(
            <span
              key={index++}
            >
              \c[{token.data}]
            </span>
          );
        }
        break;
      }
      case "VARIABLE": {
        if (debug) {
          output.push(
            <span
              key={index++}
              style={{ color: color ?? "" }}
            >
              \v[{token.data}]
            </span>
          );

          break;
        }

        const [category, , third] = token.data.split(".");

        if (category !== "combat") {
          output.push(
            <span>[implement me!: {category}]</span>
          );

          break;
        }

        output.push(
          <span
            key={index++}
            style={{
              color: color ?? ""
            }}
          >
            {enemies[third]
              ? enemies[third].name[language]
              : `[missing: ${third}, ${language}]`
            }
          </span>
        );

        break;
      }
      default: {
        // ...
      }
    }
  }

  return (
    <Alert variant="message">
      {output}
    </Alert>
  );

  // let key = 0;

  // const spans = text.split("\\.").reduce((prev, cur, i, all) => {
  //   prev.push(<span key={key++}>{cur}</span>)

  //   if (i !== all.length - 1) {
  //     prev.push(<span key={key++} className="pause">[...]</span>)
  //   }

  //   return prev
  // }, [] as ReactElement[])

  // return (
  //   <span className="message">
  //     {spans}
  //   </span>
  // )
};