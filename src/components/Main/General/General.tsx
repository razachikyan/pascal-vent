import React from "react";
import styles from "./general.scss";
import classNames from "classnames";
import { Button } from "../../common/Button/Button";
import { ContactBox } from "./ContactBox/ContactNox";

export function General() {
  return (
    <section className={styles.general}>
      <div className={styles.block}>
        <p className={styles.descr}>
          Чистый Воздух <span className={styles.line}></span> вместе с{" "}
          <span className={styles.title}>Pascal vent</span>
        </p>
        <div className={styles.flex}>
          <ul className={styles.circles}>
            <li className={classNames(styles.circle, styles.first)}></li>
            <li className={classNames(styles.circle, styles.sec)}></li>
            <li className={classNames(styles.circle, styles.third)}></li>
          </ul>
          <p className={styles.text}>
            Проектирование, поставка и монтаж систем вентиляции и
            кондиционирования
          </p>
        </div>
        <ContactBox />
        <Button
          name={"Оставить заявку"}
          classname={styles.button}
          backclass={styles.backBtn}
        />
      </div>
    </section>
  );
}
