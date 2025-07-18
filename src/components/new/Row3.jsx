import { useSelector } from "react-redux";
import Dropdown from "../Dropdown";
import apps from "../data/apps";
import { formatMinutesToTime } from "../../utils/timeFormat";

const parseDataUsed = (str) => {
	if (typeof str !== "string") return 0;
	const value = parseFloat(str);
	if (str.toUpperCase().includes("GB")) return value * 1024;
	if (str.toUpperCase().includes("MB")) return value;
	return 0;
};

const Row3 = () => {
	const filter = useSelector((state) => state.dashboardFilter.filter);

	const getUsageMinutes = (app) => {
		switch (filter) {
			case "today":
				return Array.isArray(app.dailyUsage)
					? app.dailyUsage[app.dailyUsage.length - 1] || 0
					: 0;
			case "week":
				return typeof app.weeklyUsageMinutes === "number"
					? app.weeklyUsageMinutes
					: 0;
			case "month":
				return typeof app.weeklyUsageMinutes === "number"
					? app.weeklyUsageMinutes * 4
					: 0;
			default:
				return 0;
		}
	};

	const getDataUsed = (app) => {
		const baseMB = parseDataUsed(app.dataUsed);
		switch (filter) {
			case "today":
				return baseMB / 7;
			case "week":
				return baseMB;
			case "month":
				return baseMB * 4;
			default:
				return 0;
		}
	};

	const getLaunches = (app) => app.totalVisits || 0;


	const sortedApps = [...apps].sort(
		(a, b) => getUsageMinutes(b) - getUsageMinutes(a)
	);

	const totalUsageMinutes = sortedApps.reduce(
		(acc, app) => acc + getUsageMinutes(app),
		0
	);

	const totalDataUsedMB = sortedApps.reduce(
		(acc, app) => acc + getDataUsed(app),
		0
	);

	const totalLaunches = sortedApps.reduce(
		(acc, app) => acc + getLaunches(app),
		0
	);

	const Card = ({ title, percent, value, unit, valueFn }) => (
		<div className="col-12 col-lg-6 col-xxl-4 d-flex">
			<div className="card w-100 rounded-4">
				<div className="card-body">
					<div className="d-flex align-items-start justify-content-between mb-3">
						<div>
							<h5 className="mb-0">{title}</h5>
						</div>
						<Dropdown />
					</div>

					<div className="mb-4">
						<div className="d-flex align-items-center gap-3">
							<h3 className="mb-0">
								{unit === "time"
									? formatMinutesToTime(value)
									: unit === "gb"
									? `${(value / 1024).toFixed(2)} GB`
									: value}
							</h3>
							<p className="mb-0 text-success gap-3">
								{percent}
								<span className="material-icons-outlined fs-6">
									arrow_upward
								</span>
							</p>
						</div>
						<p className="mb-0 font-13">
							Last{" "}
							{filter === "day"
								? "Day"
								: filter === "week"
								? "Week"
								: "Month"}
						</p>
					</div>

					<div className="table-responsive">
						<div
							className="d-flex flex-column gap-4"
							style={{ maxHeight: "400px", overflowY: "auto" }}
						>
							{sortedApps.map((app) => (
								<div
									key={app.id}
									className="d-flex align-items-center gap-3"
								>
									<div className="social-icon d-flex align-items-center gap-3 flex-grow-1">
										<app.icon size={40} />
										<div>
											<h6 className="mb-0">{app.name}</h6>
											<p className="mb-0">
												{app.category}
											</p>
										</div>
									</div>
									<h5 className="mb-0">
										{valueFn
											? valueFn(app)
											: formatMinutesToTime(
													getUsageMinutes(app)
											  )}
									</h5>
									<div className="card-lable bg-success text-success bg-opacity-10">
										<p className="text-success mb-0">
											+10%
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<div className="row">
			<Card
				title="Total Launches"
				percent="+27%"
				value={totalUsageMinutes}
				unit="time"
			/>
			<Card
				title="Network Consumption"
				percent="+18%"
				value={totalDataUsedMB}
				unit="gb"
				valueFn={(app) => `${(getDataUsed(app) / 1024).toFixed(2)} GB`}
			/>
			<Card
				title="Total Visits"
				percent="+33%"
				value={totalLaunches}
				unit="text"
				valueFn={(app) => getLaunches(app)}
			/>
		</div>
	);
};

export default Row3;
