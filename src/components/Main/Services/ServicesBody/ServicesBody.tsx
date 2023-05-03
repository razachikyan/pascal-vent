import React from "react";
import styles from "./servicesbody.scss";
import classNames from "classnames";

interface IServicesBodyProps {
  version: string;
}

export function ServicesBody({ version }: IServicesBodyProps) {
  return (
    <ul className={styles.list}>
      <li className={classNames(styles.item, styles.proecting)}>
        Проектирование систем вентиляции любой сложности
      </li>
      <li className={classNames(styles.item, styles.montage)}>
        Монтаж приточной вентиляции
      </li>
      <li className={classNames(styles.item, styles.montage2)}>
        Монтаж вытяжной вентиляции
      </li>
      <li className={classNames(styles.item, styles.montage3)}>
        Монтаж вентиляции с увлажнением воздуха
      </li>
      <li className={classNames(styles.item, styles.montage4)}>
        Монтаж вентиляции с рекуператором
      </li>
      <li className={classNames(styles.item, styles.montage5)}>
        Монтаж вентиляции с осушением для бассейна
      </li>
    </ul>
  );
}
