import React from "react";
import styles from "./ArticleTextToggleButton.module.css";
export default function ArticleTextToggleButton(props) {
	return (
    <button onClick={(e) => props.onClick(e)} className={styles.button}>
        {props.buttonText}
    </button>);
}
