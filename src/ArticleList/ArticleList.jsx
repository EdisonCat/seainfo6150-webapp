import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
export default function ArticleList(props) {
    return (
        <div>
            {props.articles ? props.articles.map(
                (article, idx) => {
                    return <ArticleListItem key={idx} article={article}/>
                }
            ) : "You dont have data"}
        </div>
    );
}