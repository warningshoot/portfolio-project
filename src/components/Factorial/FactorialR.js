import React, { useState } from "react";
import style from "./factorialR.module.scss";
import getFactorial from "./script";

const FactorialR = () => {
	const [value, setValue] = useState(1);
	const [showError, setShowError] = useState(false);
	const [factorial, setFactorial] = useState("1");

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setFactorial(getFactorial(value));
	};

	const handleOnChange = (e) => {
		const temp = Number(e.target.value);

		if (Number.isInteger(temp) && temp > 0) {
			setValue(temp);
			setShowError(false);
		} else {
			setShowError(true);
		}
	};

	return (
		<div className={style.container}>
			<form onSubmit={handleOnSubmit} className={style.factorialForm}>
				<label htmlFor="input" className={style.formLabel}>
					Give the number of factorial you want
				</label>
				<input
					id="input"
					type="text"
					className={style.formInput}
					value={value}
					onChange={handleOnChange}
				/>
				{showError ? (
					<p>Factorial must be number and be greater than 0 </p>
				) : null}
				<button type="submit" className={style.formButton}>
					OK
				</button>
			</form>
			<div className={style.factorialDisplay}>
				<p>{factorial}</p>
			</div>
		</div>
	);
};

export default FactorialR;
