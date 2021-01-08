import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import "./Navbar.scss";

const Navbar = (props) => {
	const [clicked, setClicked] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => {
		setClicked((prev) => !prev);
	};

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	const createMenu = () => {
		const navBar = props.MenuItems.map((item, index) => {
			if (item.type === 1 || (item.type === 2 && clicked === true)) {
				return (
					<li key={index}>
						<Link
							className={item.cName}
							to={item.url}
							onClick={() => setClicked(false)}
						>
							{item.title}
						</Link>
					</li>
				);
			} else if (item.type === 2) {
				return (
					<li
						key={index}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					>
						<div>
							<Link
								className={item.cName}
								to={item.url}
								onClick={() => setClicked(false)}
							>
								{item.title} {<i className="fas fa-caret-down" />}
							</Link>
							{dropdown && <Dropdown DropdownItems={item.dropDownItems} />}
						</div>
					</li>
				);
			} else if (item.type === 3) {
				return (
					<li key={index}>
						<Link
							className={item.cName}
							to={item.url}
							onClick={() => setClicked(false)}
						>
							{item.title}
						</Link>
					</li>
				);
			} else {
				return console.log("oops");
			}
		});
		return navBar;
	};

	return (
		<nav className="NavbarItems">
			<h1 className="navbar-logo">
				React <i className="fab fa-react"></i>
			</h1>
			<div className="menu-icon" onClick={handleClick}>
				<i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
			</div>
			<ul className={clicked ? "nav-menu active" : "nav-menu"}>
				{createMenu()}
			</ul>
			<Button onClick={onMouseLeave}>Sign Up</Button>
		</nav>
	);
};

export default Navbar;
