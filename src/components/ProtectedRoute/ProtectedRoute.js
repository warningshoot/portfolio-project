import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const user = useSelector((state) => state.user);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (user) {
					console.log(user);
					return <Component {...props} />;
				} else {
					return <Redirect to="/projects" />;
				}
			}}
		/>
	);
};

export default ProtectedRoute;
