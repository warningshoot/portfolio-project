import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	padding-top: 20px;
	height: calc(100vh - 80px);
	flex-direction: column;
`;

const Input = styled.input.attrs({ type: "text" })`
	padding: 10px;
	font-size: 1.2rem;
	margin-right: 5px;
	border: none;
	outline: none;
	background: rgba(192, 192, 192, 0.3);
`;

const FormButton = styled.button`
	border: none;
	outline: none;
	background: white;
	cursor: pointer;
	color: green;
	font-size: 2.5rem;
`;

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
`;

const TodoItems = styled.ul`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	list-style: none;
`;

const TodoItem = styled.li`
	display: flex;
	justify-content: start;
	align-items: center;
	width: 100%;
	margin: 5px 5px;
	font-size: 1.3rem;
	padding: 10px;
	border-radius: 5px;
`;

const TodoWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 70%;
`;

const TodoText = styled.span`
	width: 85%;
`;

const TodoButton = styled.button`
	border: none;
	outline: none;
	background: none;
	cursor: pointer;
	font-size: 2rem;
	margin-right: 5px;
`;
const TodoButtons = styled.span`
	width: 15%;
	display: flex;
	justify-content: flex-end;
`;

export {
	Container,
	Input,
	FormButton,
	Form,
	TodoItems,
	TodoItem,
	TodoWrapper,
	TodoText,
	TodoButton,
	TodoButtons,
};
