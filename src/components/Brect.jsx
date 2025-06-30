import Dropdown from "./Dropdown";

const activities = [
	{
		date: "29 Jun, 2025",
		time: "08:20 AM",
		name: "Kwame Mensah",
		type: "Form Sync",
		status: "Success",
		device: "Tablet A100",
	},
	{
		date: "28 Jun, 2025",
		time: "04:50 PM",
		name: "Ama Serwaa",
		type: "Login Attempt",
		status: "Failed",
		device: "Smartphone B20",
	},
	{
		date: "28 Jun, 2025",
		time: "02:13 PM",
		name: "Yaw Owusu",
		type: "Beneficiary Update",
		status: "Success",
		device: "Tablet A100",
	},
	{
		date: "27 Jun, 2025",
		time: "10:05 AM",
		name: "Afia Boateng",
		type: "Form Sync",
		status: "Success",
		device: "Tablet X200",
	},
	{
		date: "27 Jun, 2025",
		time: "09:30 AM",
		name: "Kojo Asamoah",
		type: "Login",
		status: "Success",
		device: "Phone T120",
	},
];

const getStatusClass = (status) => {
	switch (status.toLowerCase()) {
		case "success":
			return "bg-success text-success";
		case "failed":
			return "bg-danger text-danger";
		default:
			return "bg-secondary text-dark";
	}
};

const RecentActivity = () => {
	return (
		<div className="col-12 col-xxl-6 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					{/* Header */}
					<div className="d-flex align-items-start justify-content-between mb-3">
						<h5 className="mb-0">Recent User Activity</h5>
						<Dropdown />
					</div>

					{/* Table */}
					<div className="table-responsive">
						<table className="table align-middle mb-0 table-striped">
							<thead>
								<tr>
									<th>Date</th>
									<th>User</th>
									<th>Activity</th>
									<th>Status</th>
									<th>Device</th>
								</tr>
							</thead>
							<tbody>
								{activities.map((act, i) => (
									<tr key={i}>
										<td>
											<div>
												<h6 className="mb-0">
													{act.date}
												</h6>
												<small>{act.time}</small>
											</div>
										</td>
										<td>
											<h6 className="mb-0">{act.name}</h6>
										</td>
										<td>{act.type}</td>
										<td>
											<span
												className={`badge rounded-pill bg-opacity-10 ${getStatusClass(
													act.status
												)}`}
											>
												{act.status}
											</span>
										</td>
										<td>{act.device}</td>
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

export default RecentActivity;
