const Bottom = () => {
	return (
		<>
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
								aria-valuenow={25}
								aria-valuemin={0}
								aria-valuemax={100}
							></div>
						</div>
						<div className="d-flex align-items-center mt-3 gap-2">
							<div className="card-lable bg-success bg-opacity-10">
								<p className="text-success mb-0">+34.7%</p>
							</div>
							<p className="mb-0 font-13">from last month</p>
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
						<div className="">
							<div id="chart9"></div>
						</div>
						<div className="text-center mt-3">
							<p className="mb-0">
								<span className="text-success me-1">12.5%</span>{" "}
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
						<div className="chart-container mb-2">
							<div id="chart8"></div>
						</div>
						<div className="text-center">
							<h3>$84,256</h3>
							<p className="mb-3">
								Vestibulum fermentum nisl id nulla ultricies
								convallis.
							</p>
							<button className="btn btn-grd btn-grd-info rounded-5 px-4">
								Increase Budget
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Bottom;
