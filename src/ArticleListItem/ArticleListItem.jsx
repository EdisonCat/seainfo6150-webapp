import React from "react";
import { useHistory } from "react-router-dom";
export default function ArticleListItem(props) {
	const history = useHistory();
	const handleClick = (e) => {
		e.preventDefault();
		history.push({
			pathname: "/articlelist/" + props.article.slug,
		});
	};
	return (
		<div
			onClick={(e) => handleClick(e)}
			style={{
				margin: "10px",
				padding: "20px",
				border: "2px black solid",
				cursor: "pointer",
				borderRadius: "10px",
			}}
		>
			<h1>• {props.article.title}</h1>
			<time>{props.article.displayDate}</time>
			<br />
			<br />
			<label>{props.article.shortText}</label>
		</div>
	);
}
