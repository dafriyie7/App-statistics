// UsageSessionsCard.jsx
import React, { useState } from "react";
import LineChart from "../components/Chartjs/LineChart";
import Drect from "../components/Drect"; // unchanged
import Dropdowm from "../components/Dropdown"; // unchanged
import stats from "../components/data/stats"; // the JSON we built earlier
import Dropdown from "../components/Dropdown";

/* label helpers */
const hourLabels = Array.from({ length: 12 }, (_, i) =>
	i === 11 ? "Now" : `${12 - i}h ago`
);
const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekLabels = ["Week 1", "Week 2", "Week 3", "Week 4"];
const getLabels = (r) =>
	r === "daily" ? hourLabels : r === "weekly" ? dayLabels : weekLabels;

const UsageSessionsCard = () => {
	const [range, setRange] = useState("monthly"); // default view

	/* pull the slice we need – here we graph totalScreenTime */
	const slice = stats.summaryStats.totalScreenTime[range];
	const data = slice.hours || slice.days || slice.weeks || [];
	const labels = getLabels(range);
	const trend = stats.summaryStats.totalScreenTime.trend;

	/* text helpers for Drect */
	const niceRange =
		range === "daily"
			? "today"
			: range === "weekly"
			? "this week"
			: "this month";

	return (
		<div className="col-12 col-xl-8">
			<div className="card w-100 rounded-4">
				<div className="card-body">
					{/* Header */}
					<div className="d-flex align-items-start justify-content-between mb-3">
						<h5 className="mb-0">Usage &amp; Sessions</h5>
						<Dropdown />
					</div>

					{/* Range filter */}
					<div className="d-flex justify-content-end mb-2">
						{["daily", "weekly", "monthly"].map((r) => (
							<button
								key={r}
								className={`btn btn-sm ${
									range === r
										? "btn-primary"
										: "btn-outline-primary"
								}`}
								onClick={() => setRange(r)}
							>
								{r.charAt(0).toUpperCase() + r.slice(1)}
							</button>
						))}
					</div>

					{/* LineChart */}
					<div style={{ height: "170px" }}>
						<LineChart
							labels={labels}
							dataSet1={data}
							label="Screen Time"
							hideLegend
							hideDataLabels
							/* keep axes visible for this chart */
						/>
					</div>

					{/* KPI strip */}
					<Drect
						metricLabel="Total Hours"
						metricValue={slice.formatted ?? `${slice.value} mins`}
						growth={`${trend.percentageChange > 0 ? "+" : ""}${
							trend.percentageChange
						}%`}
						subLabel={`vs last ${niceRange}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default UsageSessionsCard;
