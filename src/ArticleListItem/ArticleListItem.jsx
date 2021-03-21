import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";
export default function ArticleListItem(props) {
	const [buttonText, setButtonText] = useState("Show more");
	const [show, setShow] = useState(false);

	const handleButtonToggle = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (buttonText === "Show more") setButtonText("Show less");
		else setButtonText("Show more");
		setShow(!show);
	};

	return (
		<div className className={styles.item}>
			<Link
				to={"/articlelist/" + props.article.slug}
				className={styles.link}
			>
				{props.article.title}
			</Link>
			{show && (
				<div>
					<br />
					<time className={styles.time} datetime={props.article.timeStamp}>{props.article.displayDate}</time>
					<br />
					<br />
					<label>{props.article.shortText}</label>
				</div>
			)}
			<br />
			<br />
			<ArticleTextToggleButton
				buttonText={buttonText}
				onClick={handleButtonToggle}
			/>
			<br />
		</div>
	);
}
