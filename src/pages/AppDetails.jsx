// AppUsage.jsx (or anywhere you want the chart list)
import React from "react";
import AppsHourlyChart from "../components/AppsHourlyChart";
import appsUsage from "../components/apps"

const AppDetails = () => (
	<div className="container py-4">
		<h3 className="mb-3">Hourly App Usage</h3>

		{/* render charts for ALL apps in the dataset */}
		{appsUsage.map((app) => (
			<AppsHourlyChart key={app.id} appId={app.id} />
		))}
	</div>
);

export default AppDetails;
