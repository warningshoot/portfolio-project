import React, { useState, useEffect } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import style from "./Form.module.scss";
import { useDispatch } from "react-redux";
import { signIn } from "../../actions";

const FormSignup = ({ show, setShowModal }) => {
	const { handleChange, values, handleSubmit, errors } = useForm(validate);
	const dispatch = useDispatch();
	const [user, setUser] = useState(null);

	const handleOnSubmit = (e) => {
		handleSubmit(e, setUser);
	};

	useEffect(() => {
		if (user) {
			dispatch(signIn(user));
			setShowModal(false);
		}
	});

	return (
		<div className={style.formContent}>
			<form className={style.form} onSubmit={handleOnSubmit} id="signUp">
				<h1>Sign up</h1>
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
					<label htmlFor="email">
						<h4>Email</h4>
					</label>
					<input
						type="text"
						name="email"
						className={style.formInput}
						placeholder="Enter your email"
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
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
				<div className={style.formInputs}>
					<label htmlFor="password2">
						<h4>Confirm Password</h4>
					</label>
					<input
						type="password"
						name="password2"
						className={style.formInput}
						placeholder="Enter your password"
						value={values.password2}
						onChange={handleChange}
					/>
					{errors.password2 && <p>{errors.password2}</p>}
				</div>
				<button className={style.formInputBtn} type="submit">
					Sign up
				</button>
				<p>
					You don't have account yet?{" "}
					<span onClick={() => show(false)}>Sign Up!</span>
				</p>
			</form>
		</div>
	);
};

export default FormSignup;
