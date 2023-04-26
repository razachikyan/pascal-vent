import classNames from "classnames";
import React from "react";
import styles from "./contactbox.scss";

export function ContactBox() {
  return (
    <div className={styles.contacts}>
      <div className={styles.contact}>
        <div className={classNames(styles.rect, styles.geo)}></div>
        <p className={styles.descr}>Московский регион, Москва</p>
      </div>
      <div className={styles.contact}>
        <div className={classNames(styles.rect, styles.phone)}></div>
        <div className={styles.numbers}>
          <span className={styles.number}>+ 7 492 373 63 31</span>
          <span className={styles.number}>+ 7 424 367 89 29</span>
        </div>
      </div>
    </div>
  );
}
