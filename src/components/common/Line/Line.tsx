import React from "react";
import styles from "./line.scss";
import classNames from "classnames";

interface ILineProps {
  classname: string;
}

export function Line({ classname }: ILineProps) {
  return <span className={classNames(styles.line, classname)}></span>;
}
