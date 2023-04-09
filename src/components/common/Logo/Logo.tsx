import React from "react";
import styles from "./logo.scss";
import logoPic from "@images/favicon.png";
const classNames = require("classnames");

interface ILogoProps {
    titleStyles: string;
    descrStyles: string;
    logoStyles: string;
    textBoxStyles: string;
}


export function Logo({titleStyles, descrStyles, logoStyles, textBoxStyles}: ILogoProps) {
    return (
        <div className={logoStyles}>
            <img src={logoPic} alt="logotipe" />
            <div className={textBoxStyles}>
                <h1 className={titleStyles}>Pascal Vent</h1>
                <p className={descrStyles}>fresh air</p>
            </div>
            <div className={styles.circle}></div>
        </div>
    )
}