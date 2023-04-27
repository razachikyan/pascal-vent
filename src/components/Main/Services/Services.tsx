import React from "react";
import styles from "./services.scss";
import { Line } from "../../common/Line/Line";

export function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.left}>
        <p className={styles.title}>
          Предоставляемые <Line classname={styles.line} />{" "}
          <span className={styles.name}>услуги</span>
        </p>
        <p className={styles.descr}>
          При разработке проекта предложим техническое решение оптимальное по
          соотношению цены и качества, оно идеально впишется в ваш дизайн, а
          также будет учитывать все ваши пожелания. Монтаж выполняется опытными
          бригадами с соблюдением всех действующих технических норм, правил
          безопасности и строго по согласованному проекту. Одинаково эффективно
          выполняем проектирование и монтаж на объектах любой сложности – от
          небольшой квартиры, до объектов со сложными технологическими
          процессами на основе действующей нормативной документации.
        </p>
      </div>
      <div className={styles.right}></div>
      <div className={styles.pic}></div>
    </section>
  );
}
