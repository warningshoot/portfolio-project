import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	padding-top: 20px;
	height: calc(100vh - 80px);
	flex-direction: column;
`;

const WeatherWrapper = styled.div`
	width: 300px;
	height: 500px;
	background: rgba(192, 192, 192, 0.3);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 20px;
	align-items: center;
`;

const Form = styled.form`
	margin: 20px;
	width: 300px;
	text-align: center;
	height: 50px;
`;

const Input = styled.input`
	width: 250px;
	height: 50px;
	font-size: 1.2rem;
	padding: 10px;
	border: none;
	outline: none;
	background: rgba(192, 192, 192, 0.3);
	border-radius: 5px;
`;

const Button = styled.button`
	width: 50px;
	height: 50px;
	background: var(--btnPrimary);
	color: white;
	outline: none;
	border: none;
	cursor: pointer;
	border-radius: 5px;

	&:hover {
		transition: all 0.3 ease-out;
		background: black;
		transition: 250ms;
	}
`;

const I = styled.i`
	font-size: 1.2rem;
`;

const City = styled.h1``;

const AirInfo = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	font-size: 1.2rem;
`;

const Clouds = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
`;

const Temperature = styled.span`
	font-size: 2rem;
`;

const Sup = styled.sup`
	font-size: 0.7rem;
	margin-left: 5px;
`;

export {
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
};
