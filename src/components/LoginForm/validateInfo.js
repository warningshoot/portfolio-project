export default function validateInfo(values, id, statusCode) {
	let errors = {};

	if (!values.username.trim()) {
		errors.username = "Username required";
	}

	if (!values.email && id === "signUp") {
		errors.email = "Email required";
	} else if (
		!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) &&
		id === "signUp"
	) {
		errors.email = "Email address is invalid";
	}

	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 6) {
		errors.password = "Password needs to be 6 characters or more";
	}

	if (!values.password2 && id === "signUp") {
		errors.password2 = "Password is required";
	} else if (values.password2 !== values.password && id === "signUp") {
		errors.password2 = "Passwords do not match";
	}

	if (statusCode === 404 && Object.keys(errors).length === 0) {
		errors.password = "Bad login or password";
	}

	if (statusCode === 400 && Object.keys(errors).length === 0) {
		errors.username = "User already exists";
	}
	return errors;
}
