import React from "react";
import styles from "./font.scss";

export function Font() {
  return (
    <div>
      <h1 className={styles.proxima__700}>
        FONT This is a font 123 QWERTY Proxima 700
      </h1>
      <h1 className={styles.proxima__600}>
        FONT This is a font 123 QWERTY Proxima 600
      </h1>
      <h1 className={styles.proxima__400}>
        FONT This is a font 123 QWERTY Proxima 400
      </h1>
      <h1 className={styles.ruberoid__700}>
        FONT This is a font 123 QWERTY Ruberoid 700
      </h1>
      <h1 className={styles.ruberoid__600}>
        FONT This is a font 123 QWERTY Ruberoid 600
      </h1>
      <h1 className={styles.ruberoid__500}>
        FONT This is a font 123 QWERTY Ruberoid 500
      </h1>
      <h1 className={styles.ruberoid__300}>
        FONT This is a font 123 QWERTY Ruberoid 400
      </h1>
    </div>
  );
}
