export default [
	{
		title: "Dashboard",
		icon: "home",
		children: [
			{
				title: "Overview",
				icon: "arrow_right",
				link: "/details",
			},
			{
				title: "User",
				icon: "arrow_right",
				link: "/user",
			},
		],
	},
	{
		title: "Authentication",
		icon: "apps",
		children: [
			{
				title: "Login",
				icon: "arrow_right",
				link: "dashboard/signin",
			},
			{
				title: "Sign Up",
				icon: "arrow_right",
				link: "/register",
			},
		],
	},
];
