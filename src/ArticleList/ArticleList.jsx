import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import styles from "./ArticleList.module.css";
export default function ArticleList(props) {
    return (
        <div className={styles.list}>
            {props.articles ? props.articles.map(
                (article, idx) => {
                    return <ArticleListItem key={idx} article={article}/>
                }
            ) : "You dont have data"}
        </div>
    );
}