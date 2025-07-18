import Dropdown from "../Dropdown";
import BarChart from "../Chartjs/BarChart";
import SessionStatsCard from "./SessionStatsCard";

const Row2 = () => {
  return (
		<div className="row">
			{/* Card 1 */}
			<div className="col-12 col-xl-4">
				<div className="card w-100 rounded-4">
					<div className="card-body">
						<div className="d-flex flex-column gap-3">
							<div className="d-flex align-items-start justify-content-between">
								<div className="">
									<h5 className="mb-0">App Engagement</h5>
								</div>
								<Dropdown />
							</div>
							<div className="position-relative">
								<div className="piechart-legend">
									<h2 className="mb-1">68%</h2>
									<h6 className="mb-0">Total</h6>
								</div>
								<div id="chart6"></div>
							</div>
							<div className="d-flex flex-column gap-3">
								<div className="d-flex align-items-center justify-content-between">
									<p className="mb-0 d-flex align-items-center gap-2 w-25">
										<span className="material-icons-outlined fs-6 text-primary">
											fiber_manual_record
										</span>
										One
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
										Two
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
										Three
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
			{/* end card 1 */}
		  {/* card 2 */}
		  
			{/* <div className="col-12 col-xl-8">
				<div className="card w-100 rounded-4">
					<div className="card-body">
						<div className="d-flex align-items-start justify-content-between mb-3">
							<div className="">
								<h5 className="mb-0">Usage & Sessions</h5>
							</div>
							<Dropdown />
						</div>
						<div style={{ height: "70px" }}>
							<BarChart />
						</div>
						<div className="d-flex flex-column flex-lg-row align-items-start justify-content-around border p-3 rounded-4 mt-3 gap-3">
							<div className="d-flex align-items-center gap-4">
								<div className="">
									<p className="mb-0 data-attributes">
										<span data-peity='{ "fill": ["#2196f3", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
											5/7
										</span>
									</p>
								</div>
								<div className="">
									<p className="mb-1 fs-6 fw-bold">Daily</p>
									<h2 className="mb-0">65,127</h2>
									<p className="mb-0">
										<span className="text-success me-2 fw-medium">
											16.5%
										</span>
										<span>55.21 USD</span>
									</p>
								</div>
							</div>
							<div className="vr"></div>
							<div className="d-flex align-items-center gap-4">
								<div className="">
									<p className="mb-0 data-attributes">
										<span data-peity='{ "fill": ["#ffd200", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
											5/7
										</span>
									</p>
								</div>
								<div className="">
									<p className="mb-1 fs-6 fw-bold">weekly</p>
									<h2 className="mb-0">984,246</h2>
									<p className="mb-0">
										<span className="text-success me-2 fw-medium">
											24.9%
										</span>
										<span>267.35 USD</span>
									</p>
								</div>
							</div>
							<div className="vr"></div>
							<div className="d-flex align-items-center gap-4">
								<div className="">
									<p className="mb-0 data-attributes">
										<span data-peity='{ "fill": ["#ffd200", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
											5/7
										</span>
									</p>
								</div>
								<div className="">
									<p className="mb-1 fs-6 fw-bold">Monthdly</p>
									<h2 className="mb-0">984,246</h2>
									<p className="mb-0">
										<span className="text-success me-2 fw-medium">
											24.9%
										</span>
										<span>267.35 USD</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		  
		  <SessionStatsCard />
		</div>
  );
}

export default Row2