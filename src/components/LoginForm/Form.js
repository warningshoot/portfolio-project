import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormLogin from "./FormLogin";

const Form = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div>
			{isClicked ? (
				<FormSignup show={setIsClicked} />
			) : (
				<FormLogin show={setIsClicked} />
			)}
		</div>
	);
};

export default Form;
