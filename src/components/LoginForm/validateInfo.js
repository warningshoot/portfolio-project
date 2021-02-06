export default function validateInfo(values, id) {
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
	return errors;
}
