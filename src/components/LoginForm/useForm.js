import { useState } from "react";
import request from "../../helpers/serverRequest";

const useForm = (validate) => {
	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors(validate(values, e.target.id));
		if (Object.keys(errors).length === 0 && e.target.id === "logIn") {
			let user = null;
			await request
				.post("/users/login", {
					username: values.username,
					password: values.password,
				})
				.then((res) => {
					if (res.status === 200) {
						user = res.data;
					}
				})
				.catch((err) => {
					console.log(err);
				});
			return user;
		} else if (Object.keys(errors).length === 0 && e.target.id === "signUp") {
		}
	};

	return { handleChange, values, handleSubmit, errors };
};

export default useForm;
