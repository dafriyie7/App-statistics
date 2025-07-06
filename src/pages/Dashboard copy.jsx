import Rect1 from "../components/Rect1";
import SmallSquare from "../components/SmallSquare";
import LineChart from "../components/Chartjs/LineChart";
import BarChart2 from "../components/Chartjs/BarChart2"
import PieChart from "../components/Chartjs/PieChart"
import Rect2 from "../components/Rect2";
import Square from "../components/Square";
import Brect from "../components/Brect";
import Dropdown from "../components/Dropdown";
import MixedChart from "../components/Chartjs/MixedChart";
import BarChart from "../components/Chartjs/BarChart";
import data from "../components/data/usageData";
import { useState, useEffect } from "react";
import EngagementCard from "../components/EngagementCard";

const Dashboard1j = () => {
	const [usage, setUsage] = useState([]);
	const [loading, setLoading] = useState(true);

	// pretend-fetch
	useEffect(() => {
		const timer = setTimeout(() => {
			setUsage(data); // in real life this would be fetch("…/api").then(res=>res.json())
			setLoading(false);
		}, 600); // simulate network latency
		return () => clearTimeout(timer);
	}, []);

	if (loading) return <p>Loading…</p>;

	return (
		<>
			<div className="row">
				<div className="row">
					<Rect1
						name="Monthly Usage Summary"
						title="Most Used App This Month"
						text="TikTok led usage this month with the highest active hours."
						figure="654 hrs"
						button="View App Stats"
						round="15% ↑ from last month"
					/>

					<SmallSquare
						chart={<LineChart/>}
						title="Total Users"
						figure="248k"
						icon="groups"
					/>

					<SmallSquare
						chart={<MixedChart />}
						title="Total Apps Tracked"
						figure="143"
						icon="apps"
					/>

					<SmallSquare
						chart={<BarChart2 />}
						title="Total Active Sessions"
						figure="38.9k"
						icon="bolt"
					/>

					<SmallSquare
						chart={<BarChart />}
						title="Total Time Tracked"
						figure="2,354 hrs"
						icon="timer"
					/>
				</div>
				{/* <!--end row--> */}

				<EngagementCard />
				{/* <!--end row--> */}

				<div className="row">
					<Square
						title="App Usage"
						total={654}
						totalTrend={15}
						totalLabel="Total usage this month"
						unit="hrs"
						data={usage}
					/>
					<Square
						title="App Usage"
						total={654}
						totalTrend={15}
						totalLabel="Total usage this month"
						unit="hrs"
						data={usage}
					/>
					<Square
						title="App Usage"
						total={654}
						totalTrend={15}
						totalLabel="Total usage this month"
						unit="hrs"
						data={usage}
					/>
				</div>
				{/* <!--end row--> */}

				<div className="row">
					{/* Top App Card (unchanged external Brect) */}
					<Brect />

					{/* Left column with 3 cards */}
					<div className="col-12 col-lg-6 col-xxl-3 d-flex flex-column gap-3">
						{/* Total Sessions Card */}
						<div className="card rounded-4 w-100">
							<div className="card-body">
								<div className="d-flex align-items-center justify-content-between mb-3">
									<div>
										<p className="mb-1">Total Sessions</p>
										<h3 className="mb-0">986</h3>
									</div>
									<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-success">
										<span className="material-icons-outlined fs-5 text-white">
											monitor_heart
										</span>
									</div>
								</div>
								<div
									className="progress mb-0"
									style={{ height: "6px" }}
								>
									<div
										className="progress-bar bg-grd-success"
										role="progressbar"
										style={{ width: "60%" }}
										aria-valuenow="60"
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

						{/* Active Users Chart (was Total Profit) */}
						<div className="card rounded-4 w-100">
							<div className="card-body">
								<div className="d-flex align-items-start justify-content-between mb-3">
									<div>
										<h5 className="mb-0">Active Users</h5>
										<p className="mb-0 text-muted">
											Weekly engagement
										</p>
									</div>
									<Dropdown />
								</div>
								<div id="chart7">
									{/* Replace with <LineChart /> if needed */}
								</div>
								<div className="text-center mt-3">
									<p className="mb-0">
										<span className="text-success me-1">
											+12.5%
										</span>{" "}
										more than last week
									</p>
								</div>
							</div>
						</div>

						{/* Screen Time */}
						<div className="card rounded-4 w-100">
							<div className="card-body">
								<div className="d-flex align-items-start justify-content-between mb-3">
									<div>
										<h5 className="mb-0">
											Avg. Daily Screen Time
										</h5>
										<p className="mb-0 text-muted">
											Based on device reports
										</p>
									</div>
									<div className="dropdown">
										<a
											href="javascript:;"
											className="dropdown-toggle-nocaret options dropdown-toggle"
											data-bs-toggle="dropdown"
										>
											<span className="material-icons-outlined fs-5">
												more_vert
											</span>
										</a>
										<ul className="dropdown-menu">
											<li>
												<a
													className="dropdown-item"
													href="javascript:;"
												>
													Export
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="javascript:;"
												>
													Compare
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="javascript:;"
												>
													Settings
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="chart-container mb-2">
									<div id="chart9">
										{/* Replace with <RadialChart /> if needed */}
									</div>
								</div>
								<div className="text-center mt-3">
									<p className="mb-0">
										<span className="text-danger me-1">
											-5.3%
										</span>{" "}
										vs last month
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Monthly App Time Budget */}
					<div className="col-12 col-lg-6 col-xxl-3 d-flex">
						<div className="card rounded-4 w-100">
							<div className="card-body">
								<div className="d-flex align-items-start justify-content-between mb-3">
									<div>
										<h5 className="mb-0">
											Monthly App Time Budget
										</h5>
										<p className="mb-0 text-muted">
											Limit for total screen time
										</p>
									</div>
									<div className="dropdown">
										<a
											href="javascript:;"
											className="dropdown-toggle-nocaret options dropdown-toggle"
											data-bs-toggle="dropdown"
										>
											<span className="material-icons-outlined fs-5">
												more_vert
											</span>
										</a>
										<ul className="dropdown-menu">
											<li>
												<a
													className="dropdown-item"
													href="javascript:;"
												>
													Edit Limit
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="javascript:;"
												>
													Pause
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="javascript:;"
												>
													Remove
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="chart-container mb-2">
									<div id="chart8">
										{/* Can be donut chart or bar showing remaining time */}
									</div>
								</div>
								<div className="text-center">
									<h3>84 hrs used</h3>
									<p className="mb-3">of 120 hr target</p>
									<button className="btn btn-grd btn-grd-info rounded-5 px-4">
										Adjust Budget
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--end row--> */}
			</div>
		</>
	);
};

export default Dashboard1j;
