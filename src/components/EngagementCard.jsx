import PieChart from "../components/Chartjs/PieChart"; // Assuming this stays the same
import DonutChart from "./Chartjs/DoughtnutChart";
import Rect2 from "./Rect2";

const EngagementCard = () => {
	return (
		<div className="row">
			<div className="col-12 col-xl-4">
				<div className="card w-100 rounded-4">
					<div className="card-body">
						<div className="d-flex flex-column gap-3">
							{/* Header */}
							<div className="d-flex align-items-start justify-content-between">
								<h5 className="mb-0">App Engagement</h5>
								<div className="dropdown">
									<a
										href="#"
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
												href="#"
											>
												This Week
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#"
											>
												This Month
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#"
											>
												Custom Range
											</a>
										</li>
									</ul>
								</div>
							</div>

							{/* Pie Chart */}
							<div className="position-relative">
								<div className="piechart-legend">
									<h2 className="mb-1">{/* 68% */}</h2>
									<h6 className="mb-0">
										{/* Active Usage */}
									</h6>
								</div>
								<div style={{ height: "170px" }}>
									<DonutChart
										// hideLegend
										hideDataLabels
										hideXAxis
										hideYAxis
									/>
								</div>
							</div>

							{/* Breakdown */}
							<div className="d-flex flex-column gap-3">
								<div className="d-flex align-items-center justify-content-between">
									<p className="mb-0 d-flex align-items-center gap-2 w-25">
										<span className="material-icons-outlined fs-6 text-primary">
											fiber_manual_record
										</span>
										Active
									</p>
									<p className="mb-0">68%</p>
								</div>
								<div className="d-flex align-items-center justify-content-between">
									<p className="mb-0 d-flex align-items-center gap-2 w-25">
										<span className="material-icons-outlined fs-6 text-warning">
											fiber_manual_record
										</span>
										Idle
									</p>
									<p className="mb-0">20%</p>
								</div>
								<div className="d-flex align-items-center justify-content-between">
									<p className="mb-0 d-flex align-items-center gap-2 w-25">
										<span className="material-icons-outlined fs-6 text-success">
											fiber_manual_record
										</span>
										Background
									</p>
									<p className="mb-0">12%</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Right Panel */}
			<Rect2 />
		</div>
	);
};

export default EngagementCard;
