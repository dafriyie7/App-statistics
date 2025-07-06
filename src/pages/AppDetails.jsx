// AppUsage.jsx  – single‑app detail page
import React from "react";
import { useParams } from "react-router-dom";
import AppsHourlyChart from "../components/AppsHourlyChart";
import BarChart from "../components/Chartjs/BarChart"; // ← daily chart
import appsUsage from "../components/data/apps";

const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const AppDetails = () => {
	/* route param */
	const { id } = useParams();

	/*  find one app (string/number safe) */
	const app = appsUsage.find((a) => String(a.id) === String(id));

	/* 404 guard */
	if (!app) {
		return (
			<div className="container py-4">
				<h3 className="text-danger">App not found</h3>
				<p className="text-muted">No data for ID “{id}”.</p>
			</div>
		);
	}

	/*  render details + charts */
	const Icon = app.icon; // FaFacebook, FaInstagram, etc.

	return (
		<div className="container py-4">
			{/* header */}
			<h3 className="d-flex align-items-center gap-2 mb-4">
				{Icon && <Icon size={28} />} {/* icon */}
				<span>{app.name}</span>
			</h3>

			{/* quick‑stats grid */}
			<div className="row g-3 mb-4">
				<StatCard title="Category" value={app.category} />
				<StatCard title="Screen Time" value={app.screenTime} />
				<StatCard title="Launches" value={app.launches} />
				<StatCard title="Data Used" value={app.dataUsed} />
				<StatCard title="Last Used" value={app.lastUsed} />
			</div>

			{/* hourly chart */}
			<h5 className="mb-2">Hourly Usage (minutes per hour)</h5>
			<AppsHourlyChart appId={app.id} />

			{/* daily chart */}
			{app.dailyUsage && (
				<>
					<h5 className="mt-5 mb-2">Daily Usage – Last 7 Days</h5>
					<div style={{ height: 260 }}>
						<BarChart
							chartId={`daily-${app.id}`}
							labels={weekdayLabels}
							dataSales={app.dailyUsage}
							label={"Minutes per day"}
							dataVisits={[]} // hide second dataset
						/>
					</div>
				</>
			)}
		</div>
	);
};

/* tiny helper component for each stat box */
const StatCard = ({ title, value }) => (
	<div className="col-6 col-md-4 col-lg-2">
		<div className="card shadow-sm h-100">
			<div className="card-body text-center py-3">
				<h6 className="mb-1 text-muted">{title}</h6>
				<strong>{value}</strong>
			</div>
		</div>
	</div>
);

export default AppDetails;
