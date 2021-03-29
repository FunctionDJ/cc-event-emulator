import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, ReactNode } from "react";
import { Alert } from "react-bootstrap";
import { Action } from "../interfaces/actions";
import { AlertLogButton } from "./alert-log-button";

type VariantsButPrimary = "secondary" | "secondary" | "success"
  | "danger" | "warning" | "info" | "light" | "dark";

interface Props {
  title?: ReactNode
  data: Action
  variant?: VariantsButPrimary
  icon: IconProp|null
  children?: ReactNode,
  style?: CSSProperties
}

export const ActionBase = ({
  title,
  data,
  variant,
  icon,
  children,
  style
}: Props) => {
  return (
    <>
      <Alert
        variant={variant ?? "primary"}
        style={style}
      >
        <div>
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              fixedWidth
              className="mr-2"
            />
          )}
          {title}
          <AlertLogButton data={data} floatRight/>
        </div>
        {children}
      </Alert>
    </>
  );
};