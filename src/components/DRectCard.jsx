import { Chart2 } from "./charts/Chart2";

const DRectCard = () => {
	return (
		<div className="col-12 col-xl-8">
			<div className="card w-100 rounded-4">
				<div className="card-body">
					<div className="d-flex align-items-start justify-content-between mb-3">
						<div>
							<h5 className="mb-0">App Usage Overview</h5>
						</div>
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
									<a className="dropdown-item" href="#">
										Export Chart
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										View Logs
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Refresh
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div id="chart5" style={{ width: "100%" }}>
						<Chart2 />
					</div>

					<div className="d-flex flex-column flex-lg-row align-items-start justify-content-around border p-3 rounded-4 mt-3 gap-3">
						{/* Monthly Data */}
						<div className="d-flex align-items-center gap-4">
							<div
								className="circle bg-primary rounded-circle d-flex align-items-center justify-content-center text-white"
								style={{ width: 64, height: 64 }}
							>
								5/7
							</div>
							<div>
								<p className="mb-1 fs-6 fw-bold">
									Monthly Active Sessions
								</p>
								<h2 className="mb-0">65,127</h2>
								<p className="mb-0">
									<span className="text-success me-2 fw-medium">
										+16.5%
									</span>
									<span>Compared to last month</span>
								</p>
							</div>
						</div>

						<div className="vr d-none d-lg-block"></div>

						{/* Yearly Data */}
						<div className="d-flex align-items-center gap-4">
							<div
								className="circle bg-warning rounded-circle d-flex align-items-center justify-content-center text-dark"
								style={{ width: 64, height: 64 }}
							>
								5/7
							</div>
							<div>
								<p className="mb-1 fs-6 fw-bold">
									Yearly Data Collected
								</p>
								<h2 className="mb-0">984,246</h2>
								<p className="mb-0">
									<span className="text-success me-2 fw-medium">
										+24.9%
									</span>
									<span>From previous year</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DRectCard;
