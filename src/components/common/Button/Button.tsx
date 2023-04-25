import React from "react";
import styles from "./button.scss";
const classNames = require("classnames");
interface IButtonProps {
  name: string;
  classname?: string;
  backclass?: string;
  handleClick?: () => void;
}

export function Button({
  name,
  classname,
  backclass,
  handleClick = () => {},
}: IButtonProps) {
  return (
    <div className={classNames(styles.back, backclass)}>
      <a
        onClick={(event) => {
          event.preventDefault();
          handleClick();
        }}
        className={classNames(styles.button, classname)}
      >
        {name}
      </a>
    </div>
  );
}
