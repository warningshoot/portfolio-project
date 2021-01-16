import React from "react";

import useForm from "./useForm";
import validate from "./validateInfo";
import style from "./Form.module.scss";
import { useDispatch } from "react-redux";
import { signIn } from "../../actions";

const FormLogin = ({ show }) => {
	const { handleChange, values, handleSubmit, errors } = useForm(validate);
	const dispatch = useDispatch();

	return (
		<div className={style.formContent}>
			<form
				className={style.form}
				onSubmit={(e) => dispatch(signIn(handleSubmit(e)))}
				id="logIn"
				name="logIn"
			>
				<h1>Log In</h1>
				<div className={style.formInputs}>
					<label htmlFor="username">
						<h4>Username</h4>
					</label>
					<input
						type="text"
						name="username"
						className={style.formInput}
						placeholder="Enter your username"
						value={values.username}
						onChange={handleChange}
					/>
					{errors.username && <p>{errors.username}</p>}
				</div>
				<div className={style.formInputs}>
					<label htmlFor="password">
						<h4>Password</h4>
					</label>
					<input
						type="password"
						name="password"
						className={style.formInput}
						placeholder="Enter your password"
						value={values.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<button className={style.formInputBtn} type="submit">
					Log In
				</button>
				<p>
					You don't have account yet?{" "}
					<span onClick={() => show(true)}>Sign Up!</span>
				</p>
			</form>
		</div>
	);
};

export default FormLogin;
