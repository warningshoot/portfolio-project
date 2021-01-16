import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Modal from "../Modal/Modal";
import Form from "../LoginForm/Form";
import "./Navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../actions";

const Navbar = (props) => {
	const [clicked, setClicked] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const openModal = () => {
		setClicked(false);
		setShowModal((prev) => !prev);
	};

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

	const handleLogOut = () => {
		dispatch(logOut());
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
							onClick={user ? handleLogOut : openModal}
						>
							{user ? "Log Out" : "Log In"}
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
			<Button onClick={user ? handleLogOut : openModal}>
				{user ? "Log Out" : "Log In"}
			</Button>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<Form />
			</Modal>
		</nav>
	);
};

export default Navbar;
