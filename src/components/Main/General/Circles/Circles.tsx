import React from "react";
import styles from "./circles.scss";
import classNames from "classnames";

export function Circles() {
  return (
    <ul className={styles.circles}>
      <li className={classNames(styles.circle, styles.first)}>
        <div className={styles.white}></div>
      </li>
      <li className={classNames(styles.circle, styles.sec)}>
        <div className={styles.white}></div>
      </li>
      <li className={classNames(styles.circle, styles.third)}>
        <div className={styles.white}></div>
      </li>
    </ul>
  );
}
