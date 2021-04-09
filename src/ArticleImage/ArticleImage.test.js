import { render } from "@testing-library/react";
import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage tests", () => {
    const url = "https://cdn.cnn.com/cnnnext/dam/assets/170321135754-airport-security-line-file-super-169.jpg";
    const title = "You can take a pie on a plane";
	it("component rendered correctly", () => {
		const { container } = render(
			<ArticleImage
				url={url}
				title={title}
			/>
		);
		expect(container).toMatchSnapshot();
	});
});
