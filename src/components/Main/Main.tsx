import React from "react";
import styles from "./main.scss";
import { General } from "./General/General";
import { Services } from "./Services/Services";

export function Main() {
  return (
    <main className={styles.main}>
      <General />
      <Services />
    </main>
  );
}
