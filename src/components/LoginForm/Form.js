import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormLogin from "./FormLogin";

const Form = ({ setShowModal }) => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div>
			{isClicked ? (
				<FormSignup show={setIsClicked} setShowModal={setShowModal} />
			) : (
				<FormLogin show={setIsClicked} setShowModal={setShowModal} />
			)}
		</div>
	);
};

export default Form;
