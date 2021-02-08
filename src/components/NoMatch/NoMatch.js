import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
	const location = useLocation();

	return (
		<div>
			<h1>404 Not Found</h1>
			<h3>
				No match for <code>{location.pathname}</code>
			</h3>
		</div>
	);
};

export default NoMatch;
