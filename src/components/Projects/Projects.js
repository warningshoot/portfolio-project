import React from "react";
import { Container, Grid } from "./styledComponents";
import Project from "./subComponents/Project";
import elementsInfo from "./elements";

const Projects = () => {
	const elements = elementsInfo.map((item) => (
		<Project
			key={item.id}
			title={item.title}
			imgSrc={item.imgSrc}
			desc={item.desc}
			link={item.link}
		/>
	));

	return (
		<Container>
			<Grid>{elements}</Grid>
		</Container>
	);
};

export default Projects;
