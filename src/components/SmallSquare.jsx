import React from 'react'

const SmallSquare = (props) => {
    return (
		<div className="col-12 col-lg-4 col-xxl-2 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div className="mb-3 d-flex align-items-center justify-content-between">
						<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary">
							<span className="material-icons-outlined fs-5">
								{props.icon}
							</span>
						</div>
						<div>
							<span className="text-success d-flex align-items-center">
								+24%
								<i className="material-icons-outlined">
									expand_less
								</i>
							</span>
						</div>
					</div>
					<div>
                        <h4 className="mb-0">{props.figure}</h4>
                        <p className="mb-3">{ props.title }</p>
                        <div style={{ height: "90px" }}>
                            {props.chart}
                        </div>
					</div>
				</div>
			</div>
        </div>
	);
}

export default SmallSquare

/*

					<div className="col-12 col-lg-4 col-xxl-2 d-flex">
						<div className="card rounded-4 w-100">
							<div className="card-body">
								<div className="mb-3 d-flex align-items-center justify-content-between">
									<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success">
										<span className="material-icons-outlined fs-5">
											attach_money
										</span>
									</div>
									<div>
										<span className="text-success d-flex align-items-center">
											+14%
											<i className="material-icons-outlined">
												expand_less
											</i>
										</span>
									</div>
								</div>
								<div>
									<h4 className="mb-0">$47.6k</h4>
									<p className="mb-3">Total Sales</p>
									<div id="chart2"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6 col-xxl-2 d-flex">
						<div className="card rounded-4 w-100">
							<div className="card-body">
								<div className="mb-3 d-flex align-items-center justify-content-between">
									<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info">
										<span className="material-icons-outlined fs-5">
											visibility
										</span>
									</div>
									<div>
										<span className="text-danger d-flex align-items-center">
											-35%
											<i className="material-icons-outlined">
												expand_less
											</i>
										</span>
									</div>
								</div>
								<div>
									<h4 className="mb-0">189K</h4>
									<p className="mb-3">Total Visits</p>
									<div id="chart3"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6 col-xxl-2 d-flex">
						<div className="card rounded-4 w-100">
							<div className="card-body">
								<div className="mb-3 d-flex align-items-center justify-content-between">
									<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-warning bg-opacity-10 text-warning">
										<span className="material-icons-outlined fs-5">
											leaderboard
										</span>
									</div>
									<div>
										<span className="text-success d-flex align-items-center">
											+18%
											<i className="material-icons-outlined">
												expand_less
											</i>
										</span>
									</div>
								</div>
								<div>
									<h4 className="mb-0">24.6%</h4>
									<p className="mb-3">Bounce Rate</p>
									<div id="chart4"></div>
								</div>
							</div>
						</div>
					</div>
*/