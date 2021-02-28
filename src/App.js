import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";

function App() {
	const [fetchedData, setFetchedData] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const responseJson = await (
				await fetch("https://demo1390455.mockable.io/articles")
			).json();
			setFetchedData(responseJson);
		};

		if (isEmpty(fetchedData)) {
			fetchData();
		}
	}, [fetchedData]);

	return isEmpty(fetchedData) ? null : (
		<div className="App">
			<Switch>
				<Route
					exact
					path={`/articlelist/:slug`}
					render={({ match }) => {
						return (
							<DynamicArticle
								article={fetchedData[match.params.slug]}
							/>
						);
					}}
				/>
				<Route>
					<DynamicArticle article={Object.values(fetchedData)[1]}/>
					{/* {Object.values(fetchedData).map((article, idx) => (
						<DynamicArticle key={idx} article={article} />
					))} */}
				</Route>
			</Switch>
		</div>
	);
}

export default App;
