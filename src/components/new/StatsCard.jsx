// import React from "react";
// import { useSelector } from "react-redux";
// import LineChart from "../Chartjs/LineChart";
// import BarChart from "../Chartjs/BarChart";
// import data from "../data/stats";

// const icons = {
// 	totalScreenTime: "bolt",
// 	totalNetworkTraffic: "network_check",
// 	totalAppsTracked: "apps",
// 	totalDevicesEnrolled: "devices",
// };

// const StatsCard = () => {
// 	const filter = useSelector((state) => state.dashboardFilter.filter);
// 	const summaryStats = data.summaryStats;

// 	const labelsMap = {
// 		today: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
// 		yesterday: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
// 		week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
// 		month: ["Week 1", "Week 2", "Week 3", "Week 4"],
// 	};

// 	return (
// 		<>
// 			{Object.entries(summaryStats)
// 				.slice(0, 4)
// 				.map(([key, stat], index) => {
// 					const ChartComponent = index === 3 ? BarChart : LineChart;
// 					const chartSet = stat[filter] || {};
// 					const chartData =
// 						chartSet?.hours ||
// 						chartSet?.days ||
// 						chartSet?.weeks ||
// 						[];
// 					const labels =
// 						labelsMap[filter]?.slice(0, chartData.length) || [];
// 					const trend = stat.trend || {};
// 					const trendClass =
// 						trend.direction === "up"
// 							? "text-success"
// 							: "text-danger";
// 					const trendIcon =
// 						trend.direction === "up"
// 							? "expand_less"
// 							: "expand_more";
// 					const labelText = key
// 						.replace(/([A-Z])/g, " $1")
// 						.replace(/^./, (s) => s.toUpperCase());

// 					return (
// 						<div
// 							className="col-12 col-lg-4 col-xxl-2 d-flex"
// 							key={key}
// 						>
// 							<div className="card rounded-4 w-100">
// 								<div className="card-body d-flex flex-column">
// 									<div className="mb-3 d-flex align-items-center justify-content-between">
// 										<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary">
// 											<span className="material-icons-outlined fs-5">
// 												{icons[key] || "insights"}
// 											</span>
// 										</div>
// 										<div className="text-end">
// 											{trend?.percentageChange !==
// 												undefined && (
// 												<span
// 													className={`${trendClass} d-flex align-items-center justify-content-end`}
// 												>
// 													{trend.percentageChange}%
// 													<i className="material-icons-outlined">
// 														{trendIcon}
// 													</i>
// 												</span>
// 											)}
// 										</div>
// 									</div>

// 									<h4 className="mb-0">
// 										{chartSet?.formatted || stat.formatted}
// 									</h4>
// 									<p className="mb-3">{labelText}</p>

// 									<div
// 										className="mt-auto"
// 										style={{
// 											height: "70px",
// 											overflow: "hidden",
// 										}}
// 									>
// 										<ChartComponent
// 											labels={labels}
// 											dataSet1={chartData}
// 											label={filter}
// 											hideLegend
// 											hideDataLabels
// 											hideXAxis
// 											hideYAxis
// 										/>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					);
// 				})}
// 		</>
// 	);
// };

// export default StatsCard;


import React from "react";
import { useSelector } from "react-redux";
import LineChart from "../Chartjs/LineChart";
import BarChart from "../Chartjs/BarChart";
import data from "../data/stats";

const icons = {
	totalScreenTime: "bolt",
	totalNetworkTraffic: "network_check",
	totalAppsTracked: "apps",
	totalDevicesEnrolled: "devices",
};

const StatsCard = () => {
	const filter = useSelector((state) => state.dashboardFilter.filter);
	const summaryStats = data.summaryStats;

	const labelsMap = {
		today: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
		yesterday: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
		week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		month: ["Week 1", "Week 2", "Week 3", "Week 4"],
	};

	return (
		<>
			{Object.entries(summaryStats)
				.slice(0, 4)
				.map(([key, stat], index) => {
					const ChartComponent = index === 3 ? BarChart : LineChart;
					const chartSet = stat[filter] || {};

					// Use appropriate keys for current filter
					let chartData = [];
					if (filter === "today" || filter === "yesterday") {
						chartData = chartSet?.hours || [];
					} else if (filter === "week") {
						chartData = chartSet?.days || [];
					} else if (filter === "month") {
						chartData = chartSet?.weeks || [];
					}

					const labels =
						labelsMap[filter]?.slice(0, chartData.length) || [];

					const trend = stat.trend || {};
					const trendClass =
						trend.direction === "up"
							? "text-success"
							: "text-danger";
					const trendIcon =
						trend.direction === "up"
							? "expand_less"
							: "expand_more";
					const labelText = key
						.replace(/([A-Z])/g, " $1")
						.replace(/^./, (s) => s.toUpperCase());

					return (
						<div
							className="col-12 col-lg-4 col-xxl-2 d-flex"
							key={key}
						>
							<div className="card rounded-4 w-100">
								<div className="card-body d-flex flex-column">
									<div className="mb-3 d-flex align-items-center justify-content-between">
										<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary">
											<span className="material-icons-outlined fs-5">
												{icons[key] || "insights"}
											</span>
										</div>
										<div className="text-end">
											{trend?.percentageChange !==
												undefined && (
												<span
													className={`${trendClass} d-flex align-items-center justify-content-end`}
												>
													{trend.percentageChange}%
													<i className="material-icons-outlined">
														{trendIcon}
													</i>
												</span>
											)}
										</div>
									</div>

									<h4 className="mb-0">
										{chartSet?.formatted || stat.formatted}
									</h4>
									<p className="mb-3">{labelText}</p>

									<div
										className="mt-auto"
										style={{
											height: "70px",
											overflow: "hidden",
										}}
									>
										<ChartComponent
											labels={labels}
											dataSet1={chartData}
											label={filter}
											hideLegend
											hideDataLabels
											hideXAxis
											hideYAxis
										/>
									</div>
								</div>
							</div>
						</div>
					);
				})}
		</>
	);
};

export default StatsCard;
