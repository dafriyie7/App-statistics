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
				title: "Usage Analytics",
				icon: "arrow_right",
				link: "/dashboard/analytics",
			},
		],
	},
	{
		title: "Tracked Apps",
		icon: "apps",
		children: [
			{
				title: "All Apps",
				icon: "arrow_right",
				link: "/apps/list",
			},
			{
				title: "Add New App",
				icon: "arrow_right",
				link: "/apps/create",
			},
			{
				title: "Categories",
				icon: "arrow_right",
				link: "/apps/categories",
			},
		],
	},
	{
		title: "User Activity",
		icon: "group",
		children: [
			{
				title: "Active Users",
				icon: "arrow_right",
				link: "/users/active",
			},
			{
				title: "App Sessions",
				icon: "arrow_right",
				link: "/users/sessions",
			},
			{
				title: "Feedback",
				icon: "arrow_right",
				link: "/users/feedback",
			},
		],
	},
	{
		title: "Developer Tools",
		icon: "build",
		children: [
			{
				title: "API Access",
				icon: "arrow_right",
				link: "/dev/api",
			},
			{
				title: "Webhooks",
				icon: "arrow_right",
				link: "/dev/webhooks",
			},
			{
				title: "Logs",
				icon: "arrow_right",
				link: "/dev/logs",
			},
		],
	},
	{
		title: "Settings",
		icon: "settings",
		children: [
			{
				title: "Account",
				icon: "arrow_right",
				link: "/settings/account",
			},
			{
				title: "Preferences",
				icon: "arrow_right",
				link: "/settings/preferences",
			},
			{
				title: "Notifications",
				icon: "arrow_right",
				link: "/settings/notifications",
			},
		],
	},
];
