import React from "react";
import styles from "./logo.scss";
import logoPic from "@images/favicon.png";
const classNames = require("classnames");

interface ILogoProps {
  titleStyles: string;
  descrStyles: string;
  logoStyles: string;
  textBoxStyles: string;
}

export function Logo({
  titleStyles,
  descrStyles,
  logoStyles,
  textBoxStyles,
}: ILogoProps) {
  return (
    <a className={classNames(logoStyles, styles.logo)}>
      <img src={logoPic} alt="logotipe" />
      <div className={classNames(textBoxStyles, styles.text)}>
        <h1 className={classNames(titleStyles, styles.title)}>Pascal Vent</h1>
        <p className={classNames(descrStyles, styles.descr)}>fresh air</p>
      </div>
      <div className={styles.circle}></div>
    </a>
  );
}
