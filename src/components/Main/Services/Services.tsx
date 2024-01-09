import React from "react";
import styles from "./services.scss";
import { Line } from "../../shared/Line/Line";
import classNames from "classnames";
import { ServicesBody } from "./ServicesBody/ServicesBody";

export function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.left}>
        <p className={styles.title}>
          Предоставляемые <span className={styles.name}>услуги</span>
          <Line classname={styles.line} />
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
      <div className={styles.right}>
        <div className={styles.right__controls}>
          <button className={classNames(styles.button, styles.btn1)}>
            <span className={styles.btn__text}>Система Вентиляции</span>
          </button>
          <button className={classNames(styles.button, styles.btn2)}>
            <span className={styles.btn__text}>Кондиционирование</span>
          </button>
        </div>
        <div className={styles.body}>
          <ServicesBody version={""} />
        </div>
        <div className={styles.pic}></div>
      </div>
    </section>
  );
}
