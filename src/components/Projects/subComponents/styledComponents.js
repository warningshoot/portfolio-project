import styled from "styled-components";

const Container = styled.div`
	width: 300px;
	background: var(--navBG);
	padding: 20px;
	border-radius: 5px;
	margin-top: 30px;
	justify-self: center;
	cursor: pointer;

	p {
		font-size: 1.2rem;
		margin: 5px 5px;
	}

	a {
		text-decoration: none;
		color: black;
	}
`;
const Title = styled.h3`
	text-align: center;
	margin-bottom: 10px;
`;
const Img = styled.img`
	height: 100px;
	width: 100%;
	display: block;
	margin-left: auto;
	margin-right: auto;
`;
const Description = styled.div`
	background: rgba(192, 192, 192, 0.3);
	font-size: 0.8rem;
	padding: 5px;
`;

export { Container, Title, Img, Description };
