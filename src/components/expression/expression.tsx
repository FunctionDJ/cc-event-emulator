import { ReactElement, useContext } from "react";
import { Person } from "../../interfaces/common-types";
import { MyContext } from "../../app";
import { Character, all } from "../../data/sprites";
import { Sprite } from "./sprite";
import { SpriteDebug } from "./sprite-debug";

interface Props {
  data: Person
}

export const Expression = ({ data }: Props): ReactElement => {
  const [, charName] = data.person.split(".");
  const { debug } = useContext(MyContext);

  // @ts-ignore
  const character: Character|undefined = all[charName];

  if (!character) {
    return <p>[no expression for {charName}]</p>;
  }

  const expression = character.face.expressions[data.expression];
  const firstFaces = expression.faces[0];

  const expressionColumn = (face: string, type: number) => (
    <div key={type} style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "center"
    }}>
      <Sprite
        src={character.face.src}
        charName={charName}
        data={character.face.parts[type][face]}
        faceData={character.face}
      />
      {false && (
        <span>
          Part: {type},
          {" "}
          Face: {face}
        </span>
      )}
    </div>
  );

  return (
    <div
      style={{
        border: debug ? "4px solid black" : "none",
        background: debug ? "hsl(0, 0%, 50%)" : "none",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {debug && (
        <p className="expression-debug-heading">
          {data.person}:
          <br/>
          {data.expression}
        </p>
      )}

      <div style={{
        display: "flex"
      }}>
        <div style={{
          width: character.face.width,
          height: character.face.height
        }}>
          {firstFaces.map(expressionColumn)}
        </div>
        {debug && (
          <SpriteDebug
            character={character}
            person={data}
          />
        )}
      </div>
    </div>
  );
};