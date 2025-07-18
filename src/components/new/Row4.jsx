// import React from 'react'
// import Dropdown from '../Dropdown';

// const Row4 = () => {
//   return (
// 		<div className="row">
// 			<div className="col-12 col-xxl-6 d-flex">
// 				<div className="card rounded-4 w-100">
// 					<div className="card-body">
// 						<div className="d-flex align-items-start justify-content-between mb-3">
// 							<div className="">
// 								<h5 className="mb-0">Transactions</h5>
//                           </div>
//                           <Dropdown />
// 						</div>
// 						<div className="table-responsive">
// 							<table className="table align-middle mb-0 table-striped">
// 								<thead>
// 									<tr>
// 										<th>Date</th>
// 										<th>Source Name</th>
// 										<th>Status</th>
// 										<th>Amount</th>
// 									</tr>
// 								</thead>
// 								<tbody>
// 									<tr>
// 										<td>
// 											<div className="">
// 												<h6 className="mb-0">
// 													10 Sep,2024
// 												</h6>
// 												<p className="mb-0">8:20 PM</p>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="d-flex align-items-center flex-row gap-3">
// 												<div className="">
// 													<img
// 														src="assets/images/apps/paypal.png"
// 														width="35"
// 														alt=""
// 													/>
// 												</div>
// 												<div className="">
// 													<h6 className="mb-0">
// 														Paypal
// 													</h6>
// 													<p className="mb-0">
// 														Business Plan
// 													</p>
// 												</div>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="card-lable bg-success text-success bg-opacity-10">
// 												<p className="text-success mb-0">
// 													Paid
// 												</p>
// 											</div>
// 										</td>
// 										<td>
// 											<h5 className="mb-0">$5897</h5>
// 										</td>
// 									</tr>
// 									<tr>
// 										<td>
// 											<div className="">
// 												<h6 className="mb-0">
// 													10 Sep,2024
// 												</h6>
// 												<p className="mb-0">8:20 PM</p>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="d-flex align-items-center flex-row gap-3">
// 												<div className="">
// 													<img
// 														src="assets/images/apps/13.png"
// 														width="35"
// 														alt=""
// 													/>
// 												</div>
// 												<div className="">
// 													<h6 className="mb-0">
// 														Visa
// 													</h6>
// 													<p className="mb-0">
// 														Business Plan
// 													</p>
// 												</div>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="card-lable bg-danger text-danger bg-opacity-10">
// 												<p className="text-danger mb-0">
// 													Unpaid
// 												</p>
// 											</div>
// 										</td>
// 										<td>
// 											<h5 className="mb-0">$9638</h5>
// 										</td>
// 									</tr>
// 									<tr>
// 										<td>
// 											<div className="">
// 												<h6 className="mb-0">
// 													10 Sep,2024
// 												</h6>
// 												<p className="mb-0">8:20 PM</p>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="d-flex align-items-center flex-row gap-3">
// 												<div className="">
// 													<img
// 														src="assets/images/apps/behance.png"
// 														width="35"
// 														alt=""
// 													/>
// 												</div>
// 												<div className="">
// 													<h6 className="mb-0">
// 														Behance
// 													</h6>
// 													<p className="mb-0">
// 														Business Plan
// 													</p>
// 												</div>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="card-lable bg-success text-success bg-opacity-10">
// 												<p className="text-success mb-0">
// 													Paid
// 												</p>
// 											</div>
// 										</td>
// 										<td>
// 											<h5 className="mb-0">$9638</h5>
// 										</td>
// 									</tr>
// 									<tr>
// 										<td>
// 											<div className="">
// 												<h6 className="mb-0">
// 													10 Sep,2024
// 												</h6>
// 												<p className="mb-0">8:20 PM</p>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="d-flex align-items-center flex-row gap-3">
// 												<div className="">
// 													<img
// 														src="assets/images/apps/07.png"
// 														width="35"
// 														alt=""
// 													/>
// 												</div>
// 												<div className="">
// 													<h6 className="mb-0">
// 														Spotify
// 													</h6>
// 													<p className="mb-0">
// 														Business Plan
// 													</p>
// 												</div>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="card-lable bg-success text-success bg-opacity-10">
// 												<p className="text-success mb-0">
// 													Paid
// 												</p>
// 											</div>
// 										</td>
// 										<td>
// 											<h5 className="mb-0">$9638</h5>
// 										</td>
// 									</tr>
// 									<tr>
// 										<td>
// 											<div className="">
// 												<h6 className="mb-0">
// 													10 Sep,2024
// 												</h6>
// 												<p className="mb-0">8:20 PM</p>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="d-flex align-items-center flex-row gap-3">
// 												<div className="">
// 													<img
// 														src="assets/images/apps/05.png"
// 														width="35"
// 														alt=""
// 													/>
// 												</div>
// 												<div className="">
// 													<h6 className="mb-0">
// 														Google
// 													</h6>
// 													<p className="mb-0">
// 														Business Plan
// 													</p>
// 												</div>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="card-lable bg-danger text-danger bg-opacity-10">
// 												<p className="text-danger mb-0">
// 													Unpaid
// 												</p>
// 											</div>
// 										</td>
// 										<td>
// 											<h5 className="mb-0">$9638</h5>
// 										</td>
// 									</tr>
// 									<tr>
// 										<td>
// 											<div className="">
// 												<h6 className="mb-0">
// 													10 Sep,2024
// 												</h6>
// 												<p className="mb-0">8:20 PM</p>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="d-flex align-items-center flex-row gap-3">
// 												<div className="">
// 													<img
// 														src="assets/images/apps/apple.png"
// 														width="35"
// 														alt=""
// 													/>
// 												</div>
// 												<div className="">
// 													<h6 className="mb-0">
// 														Apple
// 													</h6>
// 													<p className="mb-0">
// 														Business Plan
// 													</p>
// 												</div>
// 											</div>
// 										</td>
// 										<td>
// 											<div className="card-lable bg-success text-success bg-opacity-10">
// 												<p className="text-success mb-0">
// 													Paid
// 												</p>
// 											</div>
// 										</td>
// 										<td>
// 											<h5 className="mb-0">$9638</h5>
// 										</td>
// 									</tr>
// 								</tbody>
// 							</table>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="col-12 col-lg-6 col-xxl-3 d-flex flex-column">
// 				<div className="card rounded-4 w-100">
// 					<div className="card-body">
// 						<div className="d-flex align-items-center justify-content-between mb-3">
// 							<div>
// 								<p className="mb-1">Messages</p>
// 								<h3 className="mb-0">986</h3>
// 							</div>
// 							<div className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-danger">
// 								<span className="material-icons-outlined fs-5 text-white">
// 									shopping_cart
// 								</span>
// 							</div>
// 						</div>
// 						<div
// 							className="progress mb-0"
// 							style={{ height: "6px" }}
// 						>
// 							<div
// 								className="progress-bar bg-grd-danger"
// 								role="progressbar"
// 								style={{ width: "60%" }}
// 								aria-valuenow="25"
// 								aria-valuemin="0"
// 								aria-valuemax="100"
// 							></div>
// 						</div>
// 						<div className="d-flex align-items-center mt-3 gap-2">
// 							<div className="card-lable bg-success bg-opacity-10">
// 								<p className="text-success mb-0">+34.7%</p>
// 							</div>
// 							<p className="mb-0 font-13">from last month</p>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="card rounded-4 w-100 d-none">
// 					<div className="card-body">
// 						<div className="d-flex align-items-start justify-content-between mb-3">
// 							<div className="">
// 								<div className="">
// 									<p className="mb-2">Total Profit</p>
// 								</div>
// 								<div className="d-flex align-items-center gap-3">
// 									<h4 className="mb-0">$75,365</h4>
// 									<div className="card-lable bg-danger bg-opacity-10">
// 										<p className="text-danger mb-0">
// 											-26.9%
// 										</p>
// 									</div>
// 								</div>
// 							</div>
// 							<Dropdown />
// 						</div>
// 						<div id="chart7"></div>
// 					</div>
// 				</div>

// 				<div className="card rounded-4 w-100">
// 					<div className="card-body">
// 						<div className="d-flex align-items-start justify-content-between mb-3">
// 							<div className="">
// 								<h5 className="mb-0">$15.7K</h5>
// 								<p className="mb-0">Total Profit</p>
// 							</div>
// 							<Dropdown />
// 						</div>
// 						<div className="">
// 							<div id="chart9"></div>
// 						</div>
// 						<div className="text-center mt-3">
// 							<p className="mb-0">
// 								<span className="text-success me-1">12.5%</span>{" "}
// 								from last month
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="col-12 col-lg-6 col-xxl-3 d-flex">
// 				<div className="card rounded-4 w-100">
// 					<div className="card-body">
// 						<div className="d-flex align-items-start justify-content-between mb-3">
// 							<div className="">
// 								<h5 className="mb-0">Monthly Budget</h5>
//                           </div>
//                           <Dropdown />
// 						</div>
// 						<div className="chart-container mb-2">
// 							<div id="chart8"></div>
// 						</div>
// 						<div className="text-center">
// 							<h3>$84,256</h3>
// 							<p className="mb-3">
// 								Vestibulum fermentum nisl id nulla ultricies
// 								convallis.
// 							</p>
// 							<button className="btn btn-grd btn-grd-info rounded-5 px-4">
// 								Increase Budget
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
//   );
// }

// export default Row4


import React from "react";
import beneficiaries from "../data/usersData";

const BeneficiaryOverview = () => {
	return (
		<div className="col-12 col-xxl-6 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div className="d-flex align-items-start justify-content-between mb-3">
						<h5 className="mb-0">Beneficiary Activity Overview</h5>
					</div>
					<div className="table-responsive">
						<table className="table align-middle mb-0 table-striped">
							<thead>
								<tr>
									<th>Name</th>
									<th>Programme</th>
									<th>Status</th>
									<th>Enrolled</th>
								</tr>
							</thead>
						</table>
						<div style={{ maxHeight: "300px", overflowY: "auto" }}>
							<table className="table align-middle mb-0 table-striped">
								<tbody>
									{beneficiaries.map((user) => (
										<tr key={user.id}>
											<td>
												<div className="d-flex align-items-center gap-3">
													<img
														src={user.avatar}
														alt={user.name}
														width="35"
														className="rounded-circle"
													/>
													<div>
														<h6 className="mb-0">
															{user.name}
														</h6>
														<p className="mb-0 text-muted small">
															{user.email}
														</p>
													</div>
												</div>
											</td>
											<td>
												<div>
													<h6 className="mb-0">
														{user.subProgramme}
													</h6>
													<p className="mb-0 text-muted small">
														{user.organisation}
													</p>
												</div>
											</td>
											<td>
												<div
													className={`card-lable bg-opacity-10 ${
														user.status === "Active"
															? "bg-success text-success"
															: "bg-danger text-danger"
													}`}
												>
													<p className="mb-0">
														{user.status}
													</p>
												</div>
											</td>
											<td>
												<h6 className="mb-0">
													{new Date(
														user.enrolled
													).toLocaleDateString(
														"en-GB",
														{
															day: "2-digit",
															month: "short",
															year: "numeric",
														}
													)}
												</h6>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BeneficiaryOverview;
