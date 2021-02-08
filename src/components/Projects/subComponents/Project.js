import React from "react";
import { Link } from "react-router-dom";
import { Container, Title, Img, Description } from "./styledComponents";

const Project = (props) => {
	return (
		<Container>
			<Link to={props.link}>
				<Title>{props.title}</Title>
				<Img src={props.imgSrc} />
				<p>Description:</p>
				<Description>{props.desc}</Description>
			</Link>
		</Container>
	);
};

export default Project;
