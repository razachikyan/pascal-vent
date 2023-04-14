import React from "react";
import styles from "./main.scss";
import { General } from "./General/General";

export function Main() {
  return (
    <main className={styles.main}>
      <General />
    </main>
  );
}
