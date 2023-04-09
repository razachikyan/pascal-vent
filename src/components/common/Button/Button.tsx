import React from "react";
import styles from "./button.scss";
const classNames = require("classnames");
interface IButtonProps {
    name: string;
    classname?: string;
}

export function Button({name, classname}: IButtonProps) {
    const btnClass = classNames(styles.button);
    console.log(btnClass);
    
    return (
        <div className={styles.back}>
            <button className={btnClass}>
                {name}
            </button>
        </div>
    )
}