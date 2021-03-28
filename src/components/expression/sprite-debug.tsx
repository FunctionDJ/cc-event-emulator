import { Character } from "../../data/sprites";
import { Person } from "../../interfaces/common-types";

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
    <div style={{
      color: "white",
      fontSize: 10,
      padding: 4
    }}>
      {data.map((_, i) => (
        <p key={i}>
          {expression.faces[0][i]}
        </p>
      ))
      }
    </div>
  );
};