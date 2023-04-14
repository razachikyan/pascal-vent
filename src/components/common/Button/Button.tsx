import React from "react";
import styles from "./button.scss";
const classNames = require("classnames");
interface IButtonProps {
  name: string;
  classname?: string;
  handleClick?: () => void;
}

export function Button({
  name,
  classname,
  handleClick = () => {},
}: IButtonProps) {
  return (
    <div className={styles.back}>
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
