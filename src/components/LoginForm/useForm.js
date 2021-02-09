import { useState } from "react";
import request from "../../helpers/serverRequest";

const useForm = (validate) => {
	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
	});
	let statusCode = 0;

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = async (e, setUser) => {
		e.preventDefault();
		setErrors(validate(values, e.target.id, statusCode));

		if (Object.keys(errors).length === 0 && e.target.id === "logIn") {
			await request
				.post("/users/login", {
					username: values.username,
					password: values.password,
				})
				.then((res) => {
					if (res.status === 200) {
						setUser(res.data);
					} else if (res.status === 404) {
						statusCode = res.status;
						setErrors(validate(values, e.target.id, statusCode));
						statusCode = 0;
					}
				})
				.catch((err) => {
					console.log(err);
					return null;
				});
		} else if (Object.keys(errors).length === 0 && e.target.id === "signUp") {
			await request
				.post("/users/register", {
					username: values.username,
					password: values.password,
					email: values.email,
				})
				.then((res) => {
					if (res.status === 201) {
						setUser(res.data);
					} else if (res.status === 400) {
						statusCode = res.status;
						setErrors(validate(values, e.target.id, statusCode));
						statusCode = 0;
					}
				})
				.catch((err) => {
					console.log(err);
					return null;
				});
		}
	};

	return { handleChange, values, handleSubmit, errors };
};

export default useForm;
