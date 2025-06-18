import React from "react";

const AppListingCard = () => {
	return (
		<div className="col-12 col-xxl-6 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div className="d-flex align-items-start justify-content-between mb-3">
						<div>
							<h5 className="mb-0">All App Listing</h5>
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
										Add New App
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Export List
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Manage Apps
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="table-responsive">
						<table className="table align-middle mb-0 table-striped">
							<thead>
								<tr>
									<th>App</th>
									<th>Category</th>
									<th>Status</th>
									<th>Hours Used</th>
								</tr>
							</thead>
							<tbody>
								{[
									{
										name: "Spotify",
										icon: "assets/images/apps/07.png",
										category: "Music & Audio",
										status: "Active",
										updated: "128",
									},
									{
										name: "Behance",
										icon: "assets/images/apps/behance.png",
										category: "Design",
										status: "Inactive",
										updated: "52",
									},
									{
										name: "Google Drive",
										icon: "assets/images/apps/05.png",
										category: "Productivity",
										status: "Active",
										updated: "212",
									},
									{
										name: "Apple Music",
										icon: "assets/images/apps/apple.png",
										category: "Music & Audio",
										status: "Pending",
										updated: "83",
									},
									{
										name: "Paystack",
										icon: "assets/images/apps/paypal.png",
										category: "Finance",
										status: "Active",
										updated: "157",
									},
								].map((app, idx) => (
									<tr key={idx}>
										<td>
											<div className="d-flex align-items-center gap-3">
												<img
													src={app.icon}
													width="35"
													alt={app.name}
												/>
												<div>
													<h6 className="mb-0">
														{app.name}
													</h6>
												</div>
											</div>
										</td>
										<td>
											<p className="mb-0">
												{app.category}
											</p>
										</td>
										<td>
											<div
												className={`card-lable text-${
													app.status === "Active"
														? "success"
														: app.status ===
														  "Inactive"
														? "secondary"
														: "warning"
												} bg-${
													app.status === "Active"
														? "success"
														: app.status ===
														  "Inactive"
														? "secondary"
														: "warning"
												} bg-opacity-10`}
											>
												<p
													className={`mb-0 text-${
														app.status === "Active"
															? "success"
															: app.status ===
															  "Inactive"
															? "secondary"
															: "warning"
													}`}
												>
													{app.status}
												</p>
											</div>
										</td>
										<td>
											<p className="mb-0">
												{app.updated} hrs
											</p>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppListingCard;
