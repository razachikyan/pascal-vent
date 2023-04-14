import React from "react";
import styles from "./nav.scss";
import { nanoid } from "nanoid";
const navBar = {
  services: "Услуги",
  aboutus: "О Нас",
  advantages: "Польза Продукта",
  equipment: "Оборудование",
  worketaps: "Этапы Работы",
  reviews: "Отзывы",
};

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {Array.from(Object.entries(navBar)).map((wordArr) => (
          <li key={nanoid()} className={styles.item}>
            <a className={styles.item__link} href={wordArr[0]}>
              {wordArr[1]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
