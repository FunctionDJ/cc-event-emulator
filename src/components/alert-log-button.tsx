import { useContext } from "react";
import { Badge } from "react-bootstrap";
import { MyContext } from "../app";

interface Props {
  data: any
}

export const AlertLogButton = ({ data }: Props) => {
  const { debug } = useContext(MyContext);

  if (!debug) {
    return null;
  }

  return (
    <Badge
      pill
      as="a"
      href="#"
      variant="light"
      className="mx-2 badge-button"
      onClick={() => console.log(data)}
    >
      {">"}_ Log data to console
    </Badge>
  );
};