import React from "react";
import styles from "./header.scss";
import { Logo } from "../common/Logo/Logo";
import { Button } from "../common/Button/Button";

export function Header() {
    return (
        <header className={styles.header}>
            <Logo 
                logoStyles={styles.logo}
                titleStyles={styles.title}
                descrStyles={styles.descr}
                textBoxStyles={styles.box}
            />
            <Button name="hello"/>
        </header>
    )
}