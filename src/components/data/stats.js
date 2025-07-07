export default {
	summaryStats: {
		totalScreenTime: {
			value: 12840,
			unit: "minutes",
			formatted: "214 hours",
			trend: { percentageChange: 5.4, direction: "up" },

			daily: {
				value: 450,
				formatted: "7.5 hours",
				hours: [40, 42, 38, 36, 32, 37, 34, 36, 38, 36, 34, 47],
			},
			weekly: {
				value: 3150,
				formatted: "52.5 hours",
				days: [450, 460, 420, 470, 440, 410, 500],
			},
			monthly: {
				value: 12840,
				formatted: "214 hours",
				weeks: [3000, 3300, 3100, 3440],
			},
		},

		totalNetworkTraffic: {
			value: 68320,
			unit: "MB",
			formatted: "66.7 GB",
			trend: { percentageChange: -2.1, direction: "down" },

			daily: {
				value: 2200,
				formatted: "2.1 GB",
				hours: [
					180, 200, 160, 170, 150, 185, 190, 175, 180, 185, 160, 265,
				],
			},
			weekly: {
				value: 15400,
				formatted: "15.0 GB",
				days: [2200, 2100, 2300, 2000, 2250, 2150, 2400],
			},
			monthly: {
				value: 68320,
				formatted: "66.7 GB",
				weeks: [16000, 17000, 17500, 17820],
			},
		},

		totalAppsTracked: {
			value: 154,
			unit: "apps",
			trend: { percentageChange: 12.0, direction: "up" },

			daily: {
				value: 102,
				hours: [8, 6, 9, 7, 10, 9, 8, 8, 9, 10, 9, 9],
			},
			weekly: {
				value: 148,
				days: [22, 18, 21, 20, 19, 23, 25],
			},
			monthly: {
				value: 154,
				weeks: [37, 39, 38, 40],
			},
		},

		totalDevicesEnrolled: {
			value: 342,
			unit: "devices",
			trend: { percentageChange: 3.9, direction: "up" },

			daily: {
				value: 342,
				hours: [25, 30, 28, 24, 26, 27, 29, 22, 31, 28, 26, 46],
			},
			weekly: {
				value: 344,
				days: [48, 50, 46, 47, 49, 52, 52],
			},
			monthly: {
				value: 350,
				weeks: [85, 87, 88, 90],
			},
		},
	},
};

