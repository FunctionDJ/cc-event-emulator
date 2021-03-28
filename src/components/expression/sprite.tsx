import { Character, Sprite_T } from "../../data/sprites";

interface Props {
  data: Sprite_T
  src: string
  charName: string
  faceData: Character["face"]
}

export const Sprite = ({ data, src, charName }: Props) => {
  return (
    <div
      style={{
        position: "absolute"
      }}
    >
      <div
        style={{
          position: "absolute",
          overflow: "hidden",
          left: data.destX - (data?.subX || 0),
          top: data.destY - (data?.subY || 0),
          width: data.width,
          height: data.height
        }}
      >
        <img
          src={`/img/${src}`}
          alt={charName}
          style={{
            position: "relative",
            left: data.srcX * -1,
            top: data.srcY * -1,
            overflow: "hidden"
          }}
        />
      </div>
    </div>
  );
};