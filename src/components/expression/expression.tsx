import { ReactElement, useContext } from "react";
import { Person } from "../../interfaces/common-types";
import { MyContext } from "../../app";
import { Character, all } from "../../data/sprites";
import { Sprite } from "./sprite";
import { SpriteDebug } from "./sprite-debug";

interface Props {
  expressionData: Person
}

export const Expression = ({ expressionData }: Props): ReactElement => {
  const [, charName] = expressionData.person.split(".");
  const { debug } = useContext(MyContext);

  // @ts-ignore
  const character: Character|undefined = all[charName];

  if (!character) {
    return <p>[no expression for {charName}]</p>;
  }

  const expression = character.face.expressions[expressionData.expression];
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
    </div>
  );

  return (
    <div style={{
      border: debug ? "2px solid black" : "none",
      borderRadius: 6,
      background: debug ? "hsl(0, 0%, 50%)" : "none",
      display: "flex",
      flexDirection: "column"
    }}>
      {debug && (
        <pre className="expression-debug-heading px-1 m-0">
          {expressionData.person}: {expressionData.expression}
        </pre>
      )}

      <div className="d-flex p-1" style={{ gap: 5 }}>
        <div style={{
          width: character.face.width,
          height: character.face.height,
          backgroundColor: debug ? "hsl(0, 0%, 20%)" : ""
        }}>
          {firstFaces.map(expressionColumn)}
        </div>
        {debug && (
          <SpriteDebug
            character={character}
            person={expressionData}
          />
        )}
      </div>
    </div>
  );
};