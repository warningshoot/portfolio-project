const types = {
	basic: 1,
	dropdown: 2,
	button: 3,
};

export const MenuItems = [
	{
		type: types.basic,
		title: "Home",
		url: "#",
		cName: "nav-links",
	},
	{
		type: types.basic,
		title: "About",
		url: "#",
		cName: "nav-links",
	},
	{
		type: types.dropdown,
		title: "Services",
		url: "#",
		dropDownItems: [
			{
				title: "Aboutssssssssssssss",
				url: "#",
				cName: "dropdown-link",
			},
			{
				title: "About",
				url: "#",
				cName: "dropdown-link",
			},
			{
				title: "About",
				url: "#",
				cName: "dropdown-link",
			},
		],
		cName: "nav-links",
	},
	{
		type: types.basic,
		title: "Contact Us",
		url: "#",
		cName: "nav-links",
	},
	{
		type: types.button,
		title: "Log In",
		url: "#",
		cName: "nav-links-mobile",
	},
];
