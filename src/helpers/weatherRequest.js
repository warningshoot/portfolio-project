import axios from "axios";

const weatherRequest = axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5/",
	validateStatus: false,
});

export default weatherRequest;
