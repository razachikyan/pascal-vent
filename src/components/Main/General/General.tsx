import React from "react";
import styles from "./general.scss";
import { Button } from "../../common/Button/Button";
import { ContactBox } from "./ContactBox/ContactNox";
import { Circles } from "./Circles/Circles";
import { Line } from "../../common/Line/Line";

export function General() {
  return (
    <section className={styles.general}>
      <div className={styles.block}>
        <p className={styles.descr}>
          Чистый Воздух <Line classname={styles.line} /> вместе с{" "}
          <span className={styles.title}>Pascal vent</span>
        </p>
        <div className={styles.flex}>
          <Circles />
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
