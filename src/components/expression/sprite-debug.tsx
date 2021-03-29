import { Character } from "../../data/sprites";
import { Person } from "../../interfaces/common-types";
import { AlertLogButton } from "../alert-log-button";

interface Props {
  person: Person
  character: Character
}

export const SpriteDebug = ({ character, person }: Props) => {
  const expression = character.face.expressions[person.expression];

  const data = expression.faces[0].map((f, i) => (
    character.face.parts[i][f]
  ));

  return (
    <pre style={{
      color: "white",
      fontSize: 10,
      padding: 4
    }}>
      Expressions:
      {data.map((_, i) => "\n" + expression.faces[0][i])}
      {"\n"}
      <AlertLogButton data={data}/>
    </pre>
  );
};