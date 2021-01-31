import React from "react";
import avatar from "./AvatarMaker.svg";
import {
	Container,
	Img,
	Info,
	Title,
	Skills,
	Contact,
	Link,
} from "./styledComponents";

const Home = () => {
	return (
		<Container>
			<Img src={avatar} />
			<Info>
				<Title>Full Stack</Title>
				<Title>Web Developer</Title>
				<Skills>
					HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB
				</Skills>
				<Contact>
					<Link href="https://www.facebook.com/damian.zajda.3" target="blank">
						<i className="fab fa-facebook"></i>
					</Link>
					<Link href="https://github.com/WarningShoot" target="blank">
						<i className="fab fa-github"></i>
					</Link>
					<Link href="https://www.freecodecamp.org/warningshoot" target="blank">
						<i className="fab fa-free-code-camp"></i>
					</Link>
					<Link href="https://wa.me/48799214749" target="blank">
						<i className="fab fa-whatsapp"></i>
					</Link>
				</Contact>
			</Info>
		</Container>
	);
};

export default Home;
