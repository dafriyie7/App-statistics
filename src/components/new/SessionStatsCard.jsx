import React from "react";
import BarChart from "../Chartjs/BarChart";
import { useSelector } from "react-redux";
import screenTimeStats from "../data/screenTime";

const SessionStatsCard = () => {
	const filter = useSelector((state) => state.dashboardFilter.filter);
	const stats = screenTimeStats.screenTime;

	let chartData = [];
	let labels = [];

	switch (filter) {
		case "yesterday":
			chartData = stats.yesterday.hours;
			labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
			break;
		case "week":
			chartData = stats.week.days;
			labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
			break;
		case "month":
			chartData = stats.month.weeks;
			labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
			break;
		case "today":
		default:
			chartData = [stats.today.value];
			labels = ["Today"];
	}

	return (
		<div className="col-12 col-xl-8">
			<div className="card w-100 rounded-4">
				<div className="card-body">
					<div className="d-flex align-items-start justify-content-between mb-3">
						<h5 className="mb-0">Usage & Sessions</h5>
					</div>

					<div style={{ height: "170px" }}>
						<BarChart
							labels={labels}
							dataSet1={chartData}
							label={filter}
							hideLegend
							// hideDataLabels
							// hideXAxis
							// hideYAxis
						/>
					</div>

					<div className="d-flex flex-column flex-lg-row align-items-start justify-content-around border p-3 rounded-4 mt-3 gap-3">
						{["today", "week", "month"].map((period, i) => (
							<div
								key={period}
								className="d-flex align-items-center gap-4"
							>
								<div>
									<p className="mb-0 data-attributes">
										<span data-peity='{ "fill": ["#2196f3", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
											5/7
										</span>
									</p>
								</div>
								<div>
									<p className="mb-1 fs-6 fw-bold">
										{period.charAt(0).toUpperCase() +
											period.slice(1)}
									</p>
									<h2 className="mb-0">
										{stats[period]?.value || "--"}
									</h2>
									<p className="mb-0">
										<span className="text-success me-2 fw-medium">
											+12%
										</span>
										<span>{stats[period]?.formatted}</span>
									</p>
								</div>
								{i < 2 && (
									<div className="vr d-none d-lg-block" />
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SessionStatsCard;
