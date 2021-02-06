import axios from "axios";

const serverRequest = axios.create({
	baseURL: "http://localhost:8000/",
	validateStatus: false,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json",
	},
});

export default serverRequest;
