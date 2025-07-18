export default {
	summaryStats: {
		totalScreenTime: {
			value: 12840,
			unit: "minutes",
			formatted: "214 hours",
			trend: { percentageChange: 5.4, direction: "up" },

			today: {
				value: 450,
				formatted: "7.5 hours",
				hours: [40, 42, 38, 36, 32, 37, 34, 36, 38, 36, 34, 47],
			},
			week: {
				value: 3150,
				formatted: "52.5 hours",
				days: [450, 460, 420, 470, 440, 410, 500],
			},
			month: {
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

			today: {
				value: 2200,
				formatted: "2.1 GB",
				hours: [
					180, 200, 160, 170, 150, 185, 190, 175, 180, 185, 160, 265,
				],
			},
			week: {
				value: 15400,
				formatted: "15.0 GB",
				days: [2200, 2100, 2300, 2000, 2250, 2150, 2400],
			},
			month: {
				value: 68320,
				formatted: "66.7 GB",
				weeks: [16000, 17000, 17500, 17820],
			},
		},

		totalAppsTracked: {
			value: 154,
			unit: "apps",
			formatted: "154 apps",
			trend: { percentageChange: 12.0, direction: "up" },

			today: {
				value: 102,
				formatted: "102 apps",
				hours: [8, 6, 9, 7, 10, 9, 8, 8, 9, 10, 9, 9],
			},
			week: {
				value: 148,
				formatted: "148 apps",
				days: [22, 18, 21, 20, 19, 23, 25],
			},
			month: {
				value: 154,
				formatted: "154 apps",
				weeks: [37, 39, 38, 40],
			},
		},

		totalDevicesEnrolled: {
			value: 342,
			unit: "devices",
			formatted: "342 devices",
			trend: { percentageChange: 3.9, direction: "up" },

			today: {
				value: 342,
				formatted: "342 devices",
				hours: [25, 30, 28, 24, 26, 27, 29, 22, 31, 28, 26, 46],
			},
			week: {
				value: 344,
				formatted: "344 devices",
				days: [48, 50, 46, 47, 49, 52, 52],
			},
			month: {
				value: 350,
				formatted: "350 devices",
				weeks: [85, 87, 88, 90],
			},
		},
	},
};

// export default {
//   "usage": {
//     "screen_on_time": {
//       "daily": [320, 450, 510, 400, 390, 600, 480],
//       "daily_total": 3150,
//       "weekly": [3150, 3400, 2980, 3600],
//       "weekly_total": 13130,
//       "monthly": [12300, 13200, 11900],
//       "monthly_total": 37400,
//       "total": 37400
//     },
//     "network_traffic_mb": {
//       "daily": [120.5, 200.8, 150.3, 180.0, 175.4, 300.1, 250.6],
//       "daily_total": 1377.7,
//       "weekly": [1050.2, 1130.6, 970.9, 1240.5],
//       "weekly_total": 4392.2,
//       "monthly": [4200.5, 4600.2, 3980.8],
//       "monthly_total": 12781.5,
//       "total": 12781.5
//     },
//     "tracked_apps": {
//       "daily": [15, 17, 14, 20, 18, 22, 19],
//       "daily_total": 125,
//       "weekly": [105, 110, 98, 120],
//       "weekly_total": 433,
//       "monthly": [430, 460, 410],
//       "monthly_total": 1300,
//       "total": 1300
//     },
//     "devices_enrolled": {
//       "daily": [3, 5, 4, 2, 6, 7, 5],
//       "daily_total": 32,
//       "weekly": [25, 22, 28, 30],
//       "weekly_total": 105,
//       "monthly": [100, 95, 110],
//       "monthly_total": 305,
//       "total": 305
//     }
//   }
// }
