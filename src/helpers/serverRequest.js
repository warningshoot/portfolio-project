import axios from "axios";

const serverRequest = axios.create({
	baseURL: "https://damianzajda.herokuapp.com",
	validateStatus: false,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json",
	},
});

export default serverRequest;
