export default {
	screenTime: {
		unit: "hours",

		today: {
			value: 6.5,
			formatted: "6.5 hours",
		},

		yesterday: {
			hours: [
				0.5, 0.3, 0.2, 0.1, 0.1, 0.2, 0.5, 1.0, 0.8, 0.6, 0.7, 0.9, 0.5,
				0.6, 0.3, 0.2, 0.4, 0.5, 0.7, 0.4, 0.2, 0.1, 0.1, 0.2,
			],
			formatted: "10.0 hours",
		},

		week: {
			days: [6.5, 7.2, 5.8, 6.9, 6.0, 7.5, 8.1],
			formatted: "48.0 hours",
		},

		month: {
			weeks: [18.5, 22.3, 21.1, 20.4],
			formatted: "82.3 hours",
		},
	},
};