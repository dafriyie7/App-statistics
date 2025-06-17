import { Chart2 } from './charts/Chart2';

const DRectCard = () => {
  return (
		<div className="col-12 col-xl-8">
			<div className="card w-100 rounded-4">
				<div className="card-body">
					<div className="d-flex align-items-start justify-content-between mb-3">
						<div className="">
							<h5 className="mb-0">Sales & Views</h5>
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
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div id="chart5" style={{ width: "100%" }}>
						{/* <Chart2  /> */}
						<Chart2 />
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
								<p className="mb-1 fs-6 fw-bold">Monthly</p>
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
								<p className="mb-1 fs-6 fw-bold">Yearly</p>
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
		</div>
  );
}

export default DRectCard