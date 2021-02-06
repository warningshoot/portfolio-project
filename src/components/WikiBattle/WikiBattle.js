import React, { useState } from "react";
import axios from "axios";
import { Container, Button, Title, Link, LinkTitle } from "./styledComponents";

const api =
	"https://pl.wikipedia.org/w/api.php?action=query&list=random&format=json&origin=*&rnnamespace=0&rnlimit=2";
const wikiUrl = "https://pl.wikipedia.org/wiki/";

const WikiBattle = () => {
	const [wiki, setWiki] = useState(null);

	const handleOnClick = () => {
		axios
			.get(api)
			.then((res) => {
				setWiki(res.data.query.random);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const links = () => (
		<>
			<LinkTitle>Start</LinkTitle>
			<Link href={wikiUrl + wiki[0].title.replace(/\s+/g, "_")} target="blank">
				{wiki[0].title}
			</Link>
			<LinkTitle>End</LinkTitle>
			<Link href={wikiUrl + wiki[1].title.replace(/\s+/g, "_")} target="blank">
				{wiki[1].title}
			</Link>
		</>
	);

	return (
		<Container>
			<Title>Wiki Battle APP</Title>
			<Button onClick={handleOnClick}>Start New Battle</Button>
			{wiki && links()}
		</Container>
	);
};

export default WikiBattle;
