import styled from "styled-components";

const Container = styled.div`
	background: var(--navBG);
	height: calc(100vh - 80px);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (max-width: 600px) {
		justify-content: flex-start;
	}
`;

const Img = styled.img`
	height: 300px;
	width: 300px;
	border-radius: 50%;
	background: white;
	margin: 10px;

	@media (max-width: 600px) {
		height: 200px;
		width: 200px;
	}
`;

const Info = styled.div`
	height: 400px;
	width: 90%;
	background: rgba(192, 192, 192, 0.4);
	border-radius: 10px;
	font-weight: 800;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	@media (max-width: 600px) {
		height: 300px;
	}
`;

const Title = styled.p`
	color: #fff;
	text-align: center;
	font-size: 3rem;
	font-weight: bolder;
	text-decoration: underline;

	@media (max-width: 600px) {
		font-size: 2rem;
	}
`;

const Skills = styled.span`
	font-size: 1.5rem;
	font-weight: 400;
	color: #fff;
	text-align: center;
	margin: 2rem 10px 0 10px;
	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;

const Contact = styled.span`
	display: flex;
	justify-content: space-between;
`;

const Link = styled.a`
	margin: 2rem;
	font-size: 60px;
	color: white;
	transition: color 0.5s;

	&:hover {
		color: black;
	}

	@media (max-width: 600px) {
		font-size: 30px;
		margin: 20px;
	}
`;

export { Container, Img, Info, Title, Skills, Contact, Link };
