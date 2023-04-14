import React from "react";
import { Logo } from "./common/Logo/Logo";
import styles from "./Discovery.scss";
import { Button } from "./common/Button/Button";

export function Discovery() {
  return (
    <div className={styles.container}>
      <h1>Logo</h1>
      <Logo
        logoStyles={styles.logo}
        titleStyles={styles.title}
        descrStyles={styles.descr}
        textBoxStyles={styles.box}
      />
      <br />
      <hr />
      <br />
      <h1>Button</h1>
      <Button classname={styles.button} name="hello" />
    </div>
  );
}
