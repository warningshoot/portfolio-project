const types = {
	basic: 1,
	dropdown: 2,
	button: 3,
};

export const MenuItems = [
	{
		type: types.basic,
		title: "Resume",
		url: "/",
		cName: "nav-links",
	},
	{
		type: types.basic,
		title: "About Me",
		url: "#",
		cName: "nav-links",
	},
	{
		type: types.dropdown,
		title: "Projects",
		url: "/projects",
		dropDownItems: [
			{
				title: "Factorial",
				url: "/projects/factorial",
				cName: "dropdown-link",
			},
			{
				title: "Weather",
				url: "/projects/weather",
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
		type: types.button,
		title: "Log In",
		url: "#",
		cName: "nav-links-mobile",
	},
];
