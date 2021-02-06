import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 80px);
`;

const Button = styled.button`
	background: var(--btnPrimary);
	font-size: 1.2rem;
	padding: 10px;
	color: white;
	outline: none;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	margin-bottom: 30px;

	&:hover {
		transition: all 0.3 ease-out;
		background: black;
		transition: 250ms;
	}
`;

const Title = styled.h1`
	margin: 10px;
	margin-top: 30px;
`;

const Link = styled.a`
	margin: 20px;
	font-size: 1.2rem;
	text-decoration: none;
	color: blue;
	font-weight: bold;
	padding: 10px;
	background: rgba(192, 192, 192, 0.3);
`;

const LinkTitle = styled.h3``;

export { Container, Button, Title, Link, LinkTitle };
