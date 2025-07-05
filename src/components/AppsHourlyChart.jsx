/**********************************************************************
 * AppsHourlyChart – renders one bar‑chart per app (24‑hour usage)   *
 *********************************************************************/

import React, { useMemo } from "react";
import BarChart from "./Chartjs/BarChart"; // ⬅️  your wrapper
import { FaAndroid, FaApple, FaGithub } from "react-icons/fa"; // sample FA icons
import appsUsage from "./data/apps"; // ⬅️  the dummy dataset we created

const hourLabels = Array.from(
	{ length: 24 },
	(_, i) => `${i.toString().padStart(2, "0")}:00`
);

const iconMap = {
	whatsapp: <FaAndroid className="text-success me-1" />,
	safari: <FaApple className="text-primary me-1" />,
	github: <FaGithub className="text-dark me-1" />,
	// …add more mappings as needed
};

const AppsHourlyChart = ({ appId }) => {
	// pick the app (fall back to first one if not found)
	const app = useMemo(
		() => appsUsage.find((a) => a.id === appId) || appsUsage[0],
		[appId]
	);

	return (
		<div className="card mb-4">
			<div className="card-header d-flex align-items-center">
				{iconMap[app.icon] ?? null}
				<strong>{app.name}</strong>
				<span className="ms-auto small text-muted">
					Total {app.totalSessions} sessions
				</span>
			</div>

			{/* BarChart expects two datasets – we’ll pass usage as “Sales” and leave “Visits” empty */}
			<div style={{ height: 300 }}>
				<BarChart
					chartId={`hourly-${app.id}`}
					labels={hourLabels}
					dataSales={app.hourlyUsage} /* array of 24 numbers */
					dataVisits={[]} /* hide 2nd dataset */
				/>
			</div>
		</div>
	);
};

export default AppsHourlyChart;
