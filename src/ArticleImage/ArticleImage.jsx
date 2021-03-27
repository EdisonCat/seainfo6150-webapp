import React from "react";
import styles from "./ArticleImage.module.css";

export default function ArticleImage(props) {
    return (
        <div>
            <img src={props.url} alt={props.title} className={styles.articleimage}/>
        </div>
    );
}