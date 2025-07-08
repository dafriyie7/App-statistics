
import LineChart from "../components/Chartjs/LineChart";
import Square from "../components/Square";
import Dropdown from "../components/Dropdown";
import BarChart from "../components/Chartjs/BarChart";
import { useState, useEffect } from "react";
import stats from "../components/data/stats"; // ← the JSON with daily/weekly/monthly slices
import Drect from "../components/Drect";
import BeneficiaryOverview from "./BeneficiaryOverview";
import appUsageData from "../components/data/apps"

/* helpers for sparkline labels */
const hourLabels = Array.from({ length: 12 }, (_, i) =>
	i === 11 ? "Now" : `${12 - i}h ago`
);
const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekLabels = ["Week 1", "Week 2", "Week 3", "Week 4"];
const getLabels = (r) =>
	r === "daily" ? hourLabels : r === "weekly" ? dayLabels : weekLabels;

/* simple icon map (adjust as you wish) */
const iconMap = {
	totalScreenTime: "schedule",
	totalNetworkTraffic: "network_check",
	totalAppsTracked: "apps",
	totalDevicesEnrolled: "devices_other",
};

const Dashboard1j = () => {
	const [usage, setUsage] = useState([]);
	const [loading, setLoading] = useState(true);
	const [range, setRange] = useState("monthly");

	const screen = stats.summaryStats.totalScreenTime;

	/* pull the slice we need – here we graph totalScreenTime */
	const slice = stats.summaryStats.totalScreenTime[range];
	const data = slice.hours || slice.days || slice.weeks || [];
	const labels = getLabels(range);

	const getGrowth = (value) => {
		const num = parseFloat(value);
		return `${num > 0 ? "+" : ""}${num.toFixed(1)}%`;
	};

	// pretend-fetch
	useEffect(() => {
		const timer = setTimeout(() => {
			setUsage(data); // in real life this would be fetch("…/api").then(res=>res.json())
			setLoading(false);
		}, 600); // simulate network latency
		return () => clearTimeout(timer);
	}, []);

	/* ---------------------------------------------
   DASHBOARD DATA PREP  (place right after imports)
---------------------------------------------- */
	const getTimeLabel = (r) =>
		r === "daily" ? "today" : r === "weekly" ? "this week" : "this month";

	/* convert '1.2GB' or '120MB' → MB */
	const toMB = (str) => {
		const n = parseFloat(str);
		return str.toUpperCase().includes("GB") ? n * 1024 : n;
	};

	/* convert '2h 30m' → minutes (helper if needed) */
	const timeToMin = (str) => {
		const [h = "0h", m = "0m"] = str.split(" ");
		return parseInt(h) * 60 + parseInt(m);
	};

	/* ===== create derived lists based on range ===== */
	const multiplier = range === "daily" ? 1 : range === "weekly" ? 7 : 30;

	const transformed = appUsageData.map((app) => ({
		...app,
		visits: app.launches * multiplier,
		dataMB: toMB(app.dataUsed) * multiplier,
		hrs: (
			(app.weeklyUsageMinutes * (range === "monthly" ? 4 : 1)) /
			60
		).toFixed(1),
	}));

	/* Top 5 by screen‑time hrs */
	const topUsage = [...transformed]
		.sort((a, b) => b.hrs - a.hrs)
		.map((a) => ({
			icon: a.icon,
			name: a.name,
			category: a.category,
			value: a.hrs,
			trend: 0,
		}));

	/* Top 5 by data usage */
	const topNetwork = [...transformed]
		.sort((a, b) => b.dataMB - a.dataMB)
		.slice(0, 5)
		.map((a) => ({
			icon: a.icon,
			name: a.name,
			category: a.category,
			value: a.dataMB.toFixed(0),
			trend: 0,
		}));

	/* Top 5 by visits */
	const topVisits = [...transformed]
		.sort((a, b) => b.visits - a.visits)
		.map((a) => ({
			icon: a.icon,
			name: a.name,
			category: a.category,
			value: a.visits,
			trend: 0,
		}));

	const totalUsageHrs = transformed
		.reduce((acc, a) => acc + parseFloat(a.hrs), 0)
		.toFixed(1);
	const totalDataMB = transformed
		.reduce((acc, a) => acc + a.dataMB, 0)
		.toFixed(0);
	const totalVisits = transformed.reduce((acc, a) => acc + a.visits, 0);

	if (loading) return <p>Loading…</p>;

	return (
		<>
			<div className="col-12 d-flex justify-content-center mb-3">
				{["daily", "weekly", "monthly"].map((r) => (
					<button
						key={r}
						className={`btn btn-sm ${
							range === r ? "btn-primary" : "btn-outline-primary"
						}`}
						onClick={() => setRange(r)}
					>
						{r.charAt(0).toUpperCase() + r.slice(1)}
					</button>
				))}
			</div>
			{/* start row 1 */}
			<div className="main-content">
				<div className="row">
					{/* ───── big summary card ───── */}
					<div className="col-12 col-lg-4 col-xxl-4 d-flex">
						<div className="card rounded-4 w-100">
							<div className="card-body">
								<div>
									<div className="d-flex align-items-center gap-2 mb-2">
										<h5 className="mb-0">
											"Most Used App This Month"
											<span className="fw-600 ms-1">
												Monthly Usage Summary
											</span>
										</h5>
										<img
											src="assets/images/apps/party-popper.png"
											width="24"
											height="24"
											alt=""
										/>
									</div>
									<p className="mb-4">
										TikTok led usage this month with the
										highest active hours.
									</p>
									<div className="d-flex align-items-center justify-content-between">
										<div>
											<h3 className="mb-0 text-indigo">
												654 hrs
											</h3>
											<p className="mb-3">
												15% ↑ from last month
											</p>
											<button className="btn btn-grd btn-grd-primary rounded-5 border-0 px-4">
												View App Stats
											</button>
										</div>
										<img
											src="assets/images/apps/gift-box-3.png"
											width="100"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* ───── metric cards (same styling as sample) ───── */}
					{Object.entries(stats.summaryStats).map(([key, metric]) => {
						const slice = metric[range];
						const data =
							slice.hours || slice.days || slice.weeks || [];
						const labels = getLabels(range);

						const title = key
							.replace(/total|([A-Z])/g, " $1")
							.replace(/\b\w/g, (c) => c.toUpperCase())
							.trim();

						const isUp = metric.trend.direction === "up";
						const arrow = isUp ? "expand_less" : "expand_more";
						const badge = isUp ? "text-success" : "text-danger";
						const sign =
							metric.trend.percentageChange > 0 ? "+" : "";

						return (
							<div
								key={key}
								className="col-12 col-lg-4 col-xxl-2 d-flex"
							>
								<div className="card rounded-4 w-100">
									<div className="card-body">
										<div className="mb-3 d-flex align-items-center justify-content-between">
											<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary">
												<span className="material-icons-outlined fs-5">
													{iconMap[key] || "insights"}
												</span>
											</div>
											<span
												className={`${badge} d-flex align-items-center`}
											>
												{sign}
												{Math.abs(
													metric.trend
														.percentageChange
												)}
												%
												<i className="material-icons-outlined">
													{arrow}
												</i>
											</span>
										</div>

										<div>
											<h4 className="mb-0">
												{slice.formatted ?? slice.value}
											</h4>
											<p className="mb-3">{title}</p>
											<div style={{ height: "70px" }}>
												<LineChart
													labels={labels}
													dataSet1={data}
													label=""
													hideLegend
													hideDataLabels
													hideXAxis
													hideYAxis
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* start row 2 */}
				<div className="row">
					{/* first card */}
					<div className="col-12 col-xl-4">
						<div className="card w-100 rounded-4">
							<div className="card-body">
								<div className="d-flex flex-column gap-3">
									<div className="d-flex align-items-start justify-content-between">
										<div className="">
											<h5 className="mb-0">
												Order Status
											</h5>
										</div>
										<Dropdown />
									</div>
									<div className="position-relative">
										<div className="piechart-legend">
											<h2 className="mb-1">68%</h2>
											<h6 className="mb-0">
												Total Sales
											</h6>
										</div>
										<div id="chart6"></div>
									</div>
									<div className="d-flex flex-column gap-3">
										<div className="d-flex align-items-center justify-content-between">
											<p className="mb-0 d-flex align-items-center gap-2 w-25">
												<span className="material-icons-outlined fs-6 text-primary">
													fiber_manual_record
												</span>
												Sales
											</p>
											<div className="">
												<p className="mb-0">68%</p>
											</div>
										</div>
										<div className="d-flex align-items-center justify-content-between">
											<p className="mb-0 d-flex align-items-center gap-2 w-25">
												<span className="material-icons-outlined fs-6 text-danger">
													fiber_manual_record
												</span>
												Product
											</p>
											<div className="">
												<p className="mb-0">25%</p>
											</div>
										</div>
										<div className="d-flex align-items-center justify-content-between">
											<p className="mb-0 d-flex align-items-center gap-2 w-25">
												<span className="material-icons-outlined fs-6 text-success">
													fiber_manual_record
												</span>
												Income
											</p>
											<div className="">
												<p className="mb-0">14%</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* second card */}
					<div className="col-12 col-xl-8">
						<div className="card w-100 rounded-4">
							<div className="card-body">
								{/* Header */}
								<div className="d-flex align-items-start justify-content-between mb-3">
									<h5 className="mb-0">
										Usage &amp; Sessions
									</h5>
									<Dropdown />
								</div>

								{/* LineChart */}
								<div style={{ height: "170px" }}>
									<BarChart
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
									data={{
										daily: {
											label: "Daily Usage",
											value: screen.daily.formatted, // e.g. "7.5 hours"
											growth: getGrowth(
												screen.trend.percentageChange
											),
											subLabel: "vs yesterday",
										},
										weekly: {
											label: "Weekly Usage",
											value: screen.weekly.formatted, // e.g. "52.5 hours"
											growth: getGrowth(
												screen.trend.percentageChange
											),
											subLabel: "vs last week",
										},
										monthly: {
											label: "Monthly Usage",
											value: screen.monthly.formatted, // e.g. "214 hours"
											growth: getGrowth(
												screen.trend.percentageChange
											),
											subLabel: "vs last month",
										},
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* <!--end row 2--> */}

				{/* Start row 3 */}
				<div className="row">
					<Square
						title="App Usage"
						total={totalUsageHrs}
						totalTrend={0}
						totalLabel={`Total usage ${getTimeLabel(range)}`}
						unit="hrs"
						data={topUsage}
					/>

					<Square
						title="Top 5 Network Consumption"
						total={totalDataMB}
						totalTrend={0}
						totalLabel={`Total data used ${getTimeLabel(range)}`}
						unit="MB"
						data={topNetwork}
					/>

					<Square
						title="Total Visits"
						total={totalVisits}
						totalTrend={0}
						totalLabel={`App launches ${getTimeLabel(range)}`}
						unit="sessions"
						data={topVisits}
					/>
				</div>

				{/* <!--end row 3--> */}

				{/* Start row 4 */}
				<div className="row">
					<BeneficiaryOverview />
					<div className="col-12 col-lg-6 col-xxl-3 d-flex flex-column">
						<div className="card rounded-4 w-100">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3">
									<div>
										<p className="mb-1">Messages</p>
										<h3 className="mb-0">986</h3>
									</div>
									<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-danger">
										<span className="material-icons-outlined fs-5 text-white">
											shopping_cart
										</span>
									</div>
								</div>
								<div
									className="progress mb-0"
									style={{ height: "6px" }}
								>
									<div
										className="progress-bar bg-grd-danger"
										role="progressbar"
										style={{ width: "60%" }}
										aria-valuenow="25"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
								<div className="d-flex align-items-center mt-3 gap-2">
									<div className="card-lable bg-success bg-opacity-10">
										<p className="text-success mb-0">
											+34.7%
										</p>
									</div>
									<p className="mb-0 font-13">
										from last month
									</p>
								</div>
							</div>
						</div>

						<div className="card rounded-4 w-100 d-none">
							<div className="card-body">
								<div className="d-flex align-items-start justify-content-between mb-3">
									<div className="">
										<div className="">
											<p className="mb-2">Total Profit</p>
										</div>
										<div className="d-flex align-items-center gap-3">
											<h4 className="mb-0">$75,365</h4>
											<div className="card-lable bg-danger bg-opacity-10">
												<p className="text-danger mb-0">
													-26.9%
												</p>
											</div>
										</div>
									</div>
									<Dropdown />
								</div>
								<div id="chart7"></div>
							</div>
						</div>

						<div className="card rounded-4 w-100">
							<div className="card-body">
								<div className="d-flex align-items-start justify-content-between mb-3">
									<div className="">
										<h5 className="mb-0">$15.7K</h5>
										<p className="mb-0">Total Profit</p>
									</div>
									<Dropdown />
								</div>
								<div className="">
									<div id="chart9"></div>
								</div>
								<div className="text-center mt-3">
									<p className="mb-0">
										<span className="text-success me-1">
											12.5%
										</span>{" "}
										from last month
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6 col-xxl-3 d-flex">
						<div className="card rounded-4 w-100">
							<div className="card-body">
								<div className="d-flex align-items-start justify-content-between mb-3">
									<div className="">
										<h5 className="mb-0">Monthly Budget</h5>
									</div>
									<Dropdown />
								</div>
								<div className="chart-container mb-2">
									<div id="chart8"></div>
								</div>
								<div className="text-center">
									<h3>$84,256</h3>
									<p className="mb-3">
										Vestibulum fermentum nisl id nulla
										ultricies convallis.
									</p>
									<button className="btn btn-grd btn-grd-info rounded-5 px-4">
										Increase Budget
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--end row 4--> */}
			</div>
		</>
	);
};

export default Dashboard1j;
