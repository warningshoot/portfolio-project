import React, { useEffect, useState } from "react";
import request from "../../helpers/serverRequest";
import {
	Container,
	Input,
	Form,
	FormButton,
	TodoItems,
	TodoItem,
	TodoWrapper,
	TodoButton,
	TodoText,
	TodoButtons,
} from "./styledComponents";
import { useSelector } from "react-redux";

const style = {
	completed: {
		background: "linear-gradient(to right, #38ef7d, #11998e)",
	},
	notCompleted: {
		background: "linear-gradient(to right, #c31432, #240b36)",
	},
};

const Todo = () => {
	const [todoItems, setTodoItems] = useState(null);
	const [reRender, setReRender] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const user = useSelector((state) => state.user);

	const handleOnChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleConfirm = async (id) => {
		await request.patch(`/todo/${id}`);
		setReRender(true);
	};

	const handleDelete = async (id) => {
		await request.delete(`/todo/${id}`);
		setReRender(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const body = {
			text: inputValue,
			completed: false,
		};

		await request.put(`/todo/${user.id}`, body);
		setReRender(true);
	};

	useEffect(() => {
		request
			.get(`/todo/${user.id}`)
			.then((res) => {
				setTodoItems(
					res.data.map((item) => (
						<TodoItem
							key={item._id}
							style={item.completed ? style.completed : style.notCompleted}
						>
							<TodoText>{item.text}</TodoText>
							<TodoButtons>
								<TodoButton onClick={() => handleConfirm(item._id)}>
									<i
										className="far fa-check-square"
										style={{ color: "green" }}
									></i>
								</TodoButton>
								<TodoButton onClick={() => handleDelete(item._id)}>
									<i
										className="far fa-minus-square"
										style={{ color: "red" }}
									></i>
								</TodoButton>
							</TodoButtons>
						</TodoItem>
					))
				);
			})
			.catch((err) => console.error(err));

		setReRender(false);
	}, [user, reRender]);

	return (
		<Container>
			<TodoWrapper>
				<Form onSubmit={handleSubmit}>
					<Input
						type="text"
						name="text"
						placeholder="Put your todo..."
						onChange={handleOnChange}
					/>
					<FormButton>
						<i className="fas fa-plus-square"></i>
					</FormButton>
				</Form>
				<TodoItems>{todoItems}</TodoItems>
			</TodoWrapper>
		</Container>
	);
};

export default Todo;
