import o07 from "../assets/images/apps/07.png"

const BigRect = () => {

	return (
		<div className="col-12 col-xxl-6 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					<div className="d-flex align-items-start justify-content-between mb-3">
						<div>
							<h5 className="mb-0">App Activity Log</h5>
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
										View All Logs
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Export Report
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Settings
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="table-responsive">
						<table className="table align-middle mb-0 table-striped">
							<thead>
								<tr>
									<th>Date</th>
									<th>App Name</th>
									<th>Activity</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								{[
									{
										date: "16 Jun, 2025",
										time: "2:15 PM",
										name: "Spotify",
										icon: o07.png,
										activity: "Crash Report",
										status: "Failed",
									},
									{
										date: "15 Jun, 2025",
										time: "10:05 AM",
										name: "Behance",
										icon: "../assets/images/apps/behance.png",
										activity: "Analytics Synced",
										status: "Success",
									},
									{
										date: "15 Jun, 2025",
										time: "9:45 AM",
										name: "Google Drive",
										icon: "../assets/images/apps/05.png",
										activity: "Deployment",
										status: "Pending",
									},
									{
										date: "14 Jun, 2025",
										time: "6:30 PM",
										name: "Apple Music",
										icon: "../assets/images/apps/apple.png",
										activity: "Version Update",
										status: "Success",
									},
									{
										date: "14 Jun, 2025",
										time: "1:10 PM",
										name: "Paystack",
										icon: "../assets/images/apps/paypal.png",
										activity: "Webhook Setup",
										status: "Success",
									},
								].map((log, idx) => (
									<tr key={idx}>
										<td>
											<h6 className="mb-0">{log.date}</h6>
											<p className="mb-0">{log.time}</p>
										</td>
										<td>
											<div className="d-flex align-items-center gap-3">
												<img
													src={log.icon}
													width="35"
													alt=""
												/>
												<div>
													<h6 className="mb-0">
														{log.name}
													</h6>
												</div>
											</div>
										</td>
										<td>
											<p className="mb-0">
												{log.activity}
											</p>
										</td>
										<td>
											<div
												className={`card-lable text-${
													log.status === "Success"
														? "success"
														: log.status ===
														  "Failed"
														? "danger"
														: "warning"
												} bg-${
													log.status === "Success"
														? "success"
														: log.status ===
														  "Failed"
														? "danger"
														: "warning"
												} bg-opacity-10`}
											>
												<p
													className={`mb-0 text-${
														log.status === "Success"
															? "success"
															: log.status ===
															  "Failed"
															? "danger"
															: "warning"
													}`}
												>
													{log.status}
												</p>
											</div>
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

export default BigRect;