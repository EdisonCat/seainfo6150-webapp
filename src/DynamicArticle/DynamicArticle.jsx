import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import { Link } from "react-router-dom";
import styles from "./DynamicArticle.module.css";

const DynamicArticle = (props) => {
	return (
		<div>
			<Link to="/articlelist" className={styles.link}>Back</Link>
			<article className={styles.article}>
				<header>
					<h1>{props.article.title}</h1>
					<address>
						by {props.article.author} (
						<a href={props.article.authorEmail}>
							{props.article.authorEmail}
						</a>
						)
						<br />
					</address>
					<time dateTime={props.article.timeStamp}>
						{props.article.displayDate}
					</time>
				</header>
				<HTMLText text={props.article.text} />
			</article>
		</div>
	);
};

export default DynamicArticle;
