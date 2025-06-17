import {Chart4 } from './charts/Chart4';

const OrderStatDoeNot = () => {
  return (
			<div className="col-12 col-xl-4">
				<div className="card w-100 rounded-4">
					<div className="card-body">
						<div className="d-flex flex-column gap-3">
							<div className="d-flex align-items-start justify-content-between">
								<div className="">
									<h5 className="mb-0">Order Status</h5>
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
											<a
												className="dropdown-item"
												href="#"
											>
												Action
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#"
											>
												Another action
											</a>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#"
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
									<h6 className="mb-0">Total Sales</h6>
								</div>
						  {/* <div id="chart6"></div> */}
						  <div style={{ height: '320px' }}>
							  <Chart4 />
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

  );
}

export default OrderStatDoeNot