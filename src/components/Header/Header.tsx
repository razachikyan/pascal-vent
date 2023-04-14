import React from "react";
import styles from "./header.scss";
import { Logo } from "../common/Logo/Logo";
import { Button } from "../common/Button/Button";
import { Nav } from "./Nav/Nav";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo
        logoStyles={styles.logo}
        titleStyles={styles.title}
        descrStyles={styles.descr}
        textBoxStyles={styles.box}
      />
      <Nav />
      <Button name="Связаться" classname={styles.button} />
    </header>
  );
}
