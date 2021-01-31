import React, { useState } from "react";
import {
	Container,
	WeatherWrapper,
	Form,
	Input,
	Button,
	I,
	AirInfo,
	City,
	Temperature,
	Clouds,
	Sup,
} from "./styledComponents";
import weatherRequest from "../../helpers/weatherRequest";

const Weather = () => {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		weatherRequest
			.get(`/weather?q=${city}&appid=4a5f8903f8a0fbb1618839167d0ea639`)
			.then((res) => {
				console.log(res.data);
				const temperature = Math.round(res.data.main.temp - 273.15);
				const temp = {
					name: res.data.name,
					temperature,
					humidity: res.data.main.humidity,
					pressure: res.data.main.pressure,
					icon: res.data.weather[0].icon,
					iconDesc: res.data.weather[0].main,
				};
				setWeather(temp);
			});
	};

	const handleChange = (e) => {
		setCity(e.target.value);
	};

	const infoStyle = {
		margin: "10px",
	};

	const setupWeather = () => {
		return (
			<WeatherWrapper>
				<AirInfo>
					<span>
						<i className="fas fa-wind" style={infoStyle}></i>
						{weather.pressure + " kPa"}
					</span>
					<span>
						<i className="fas fa-tint" style={infoStyle}></i>
						{weather.humidity + "%"}
					</span>
				</AirInfo>
				<City>{weather.name}</City>
				<Temperature>
					{weather.temperature}
					<Sup>
						<i className="far fa-circle"></i>
					</Sup>
					C
				</Temperature>
				<Clouds>
					<img
						src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
						alt={weather.iconDesc}
					/>
					{weather.iconDesc}
				</Clouds>
			</WeatherWrapper>
		);
	};

	return (
		<Container>
			<h1>Weather APP</h1>
			<Form onSubmit={handleSubmit}>
				<Input
					type="text"
					name="city"
					value={city}
					placeholder="Type name of the city"
					onChange={handleChange}
				/>
				<Button type="submit">
					<I className="fas fa-search"></I>
				</Button>
			</Form>
			{weather && setupWeather()}
		</Container>
	);
};

export default Weather;
