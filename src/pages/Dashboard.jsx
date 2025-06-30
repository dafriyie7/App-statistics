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
import data from "../components/usageData";
import { useState, useEffect } from "react";

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
						title="Top App This Month"
						text="TikTok led usage this month with the highest active hours across all tracked devices."
						figure="654 hrs"
						button="View App Stats"
						round="15% ↑ from last month"
					/>

					<SmallSquare
						chart={<LineChart />}
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

				<div className="row">
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
														Action
													</a>
												</li>
												<li>
													<a
														className="dropdown-item"
														href="javascript:;"
													>
														Another action
													</a>
												</li>
												<li>
													<a
														className="dropdown-item"
														href="javascript:;"
													>
														Something else here
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="position-relative">
										<div className="piechart-legend">
											<h2 className="mb-1">68%</h2>
											<h6 className="mb-0">
												Total Sales
											</h6>
										</div>
										<div style={{ height: "170px" }}>
											<PieChart />
										</div>
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
					<Rect2 />
				</div>
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
					<Brect />
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
													Action
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="javascript:;"
												>
													Another action
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="javascript:;"
												>
													Something else here
												</a>
											</li>
										</ul>
									</div>
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
													Action
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="javascript:;"
												>
													Another action
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="javascript:;"
												>
													Something else here
												</a>
											</li>
										</ul>
									</div>
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
				{/* <!--end row--> */}
			</div>
		</>
	);
};

export default Dashboard1j;
