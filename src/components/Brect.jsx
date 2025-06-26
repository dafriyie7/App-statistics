import Dropdown from "./Dropdown";
const Brect = () => {
	return (
		<div className="col-12 col-xxl-6 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div className="d-flex align-items-start justify-content-between mb-3">
						<div className="">
							<h5 className="mb-0">Transactions</h5>
						</div>
						<Dropdown />
					</div>
					<div className="table-responsive">
						<table className="table align-middle mb-0 table-striped">
							<thead>
								<tr>
									<th>Date</th>
									<th>Source Name</th>
									<th>Status</th>
									<th>Amount</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div className="">
											<h6 className="mb-0">
												10 Sep,2024
											</h6>
											<p className="mb-0">8:20 PM</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center flex-row gap-3">
											<div className="">
												<img
													src="assets/images/apps/paypal.png"
													width="35"
													alt=""
												/>
											</div>
											<div className="">
												<h6 className="mb-0">Paypal</h6>
												<p className="mb-0">
													Business Plan
												</p>
											</div>
										</div>
									</td>
									<td>
										<div className="card-lable bg-success text-success bg-opacity-10">
											<p className="text-success mb-0">
												Paid
											</p>
										</div>
									</td>
									<td>
										<h5 className="mb-0">$5897</h5>
									</td>
								</tr>
								<tr>
									<td>
										<div className="">
											<h6 className="mb-0">
												10 Sep,2024
											</h6>
											<p className="mb-0">8:20 PM</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center flex-row gap-3">
											<div className="">
												<img
													src="assets/images/apps/13.png"
													width="35"
													alt=""
												/>
											</div>
											<div className="">
												<h6 className="mb-0">Visa</h6>
												<p className="mb-0">
													Business Plan
												</p>
											</div>
										</div>
									</td>
									<td>
										<div className="card-lable bg-danger text-danger bg-opacity-10">
											<p className="text-danger mb-0">
												Unpaid
											</p>
										</div>
									</td>
									<td>
										<h5 className="mb-0">$9638</h5>
									</td>
								</tr>
								<tr>
									<td>
										<div className="">
											<h6 className="mb-0">
												10 Sep,2024
											</h6>
											<p className="mb-0">8:20 PM</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center flex-row gap-3">
											<div className="">
												<img
													src="assets/images/apps/behance.png"
													width="35"
													alt=""
												/>
											</div>
											<div className="">
												<h6 className="mb-0">
													Behance
												</h6>
												<p className="mb-0">
													Business Plan
												</p>
											</div>
										</div>
									</td>
									<td>
										<div className="card-lable bg-success text-success bg-opacity-10">
											<p className="text-success mb-0">
												Paid
											</p>
										</div>
									</td>
									<td>
										<h5 className="mb-0">$9638</h5>
									</td>
								</tr>
								<tr>
									<td>
										<div className="">
											<h6 className="mb-0">
												10 Sep,2024
											</h6>
											<p className="mb-0">8:20 PM</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center flex-row gap-3">
											<div className="">
												<img
													src="assets/images/apps/07.png"
													width="35"
													alt=""
												/>
											</div>
											<div className="">
												<h6 className="mb-0">
													Spotify
												</h6>
												<p className="mb-0">
													Business Plan
												</p>
											</div>
										</div>
									</td>
									<td>
										<div className="card-lable bg-success text-success bg-opacity-10">
											<p className="text-success mb-0">
												Paid
											</p>
										</div>
									</td>
									<td>
										<h5 className="mb-0">$9638</h5>
									</td>
								</tr>
								<tr>
									<td>
										<div className="">
											<h6 className="mb-0">
												10 Sep,2024
											</h6>
											<p className="mb-0">8:20 PM</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center flex-row gap-3">
											<div className="">
												<img
													src="assets/images/apps/05.png"
													width="35"
													alt=""
												/>
											</div>
											<div className="">
												<h6 className="mb-0">Google</h6>
												<p className="mb-0">
													Business Plan
												</p>
											</div>
										</div>
									</td>
									<td>
										<div className="card-lable bg-danger text-danger bg-opacity-10">
											<p className="text-danger mb-0">
												Unpaid
											</p>
										</div>
									</td>
									<td>
										<h5 className="mb-0">$9638</h5>
									</td>
								</tr>
								<tr>
									<td>
										<div className="">
											<h6 className="mb-0">
												10 Sep,2024
											</h6>
											<p className="mb-0">8:20 PM</p>
										</div>
									</td>
									<td>
										<div className="d-flex align-items-center flex-row gap-3">
											<div className="">
												<img
													src="assets/images/apps/apple.png"
													width="35"
													alt=""
												/>
											</div>
											<div className="">
												<h6 className="mb-0">Apple</h6>
												<p className="mb-0">
													Business Plan
												</p>
											</div>
										</div>
									</td>
									<td>
										<div className="card-lable bg-success text-success bg-opacity-10">
											<p className="text-success mb-0">
												Paid
											</p>
										</div>
									</td>
									<td>
										<h5 className="mb-0">$9638</h5>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brect;
