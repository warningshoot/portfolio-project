import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Grid = styled.div`
	display: grid;
	width: 60%;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 20px;
`;

export { Container, Grid };
