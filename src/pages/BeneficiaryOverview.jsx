import React from "react";
import beneficiaries from "../components/data/usersData.js"; // ✅ update path if needed
import Dropdown from "../components/Dropdown.jsx";

// Format date like "12 May, 2025"
const prettyDate = (iso) =>
	new Date(iso).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});

const overviewData = beneficiaries.map((b) => ({
	date: prettyDate(b.enrolled),
	time: "--", // No time provided
	name: b.name,
	type: "Overview",
	status: b.status,
	device: b.device,
}));

const getStatusClass = (status) =>
	status.toLowerCase() === "active"
		? "bg-success text-success"
		: "bg-danger text-danger";

const BeneficiaryOverview = () => {
	return (
		<div className="col-12 col-xxl-6 d-flex">
			<div className="card rounded-4 w-100">
				<div className="card-body">
					{/* Header */}
					<div className="d-flex align-items-start justify-content-between mb-3">
						<h5 className="mb-0">Beneficiary Overview</h5>
						<Dropdown />
					</div>

					{/* Table */}
					<div
						className="table-responsive"
						style={{ maxHeight: "340px", overflowY: "auto" }}
					>
						<table className="table align-middle mb-0 table-striped">
							<thead className="sticky-top bg-white">
								<tr>
									<th>Date</th>
									<th>Beneficiary</th>
									<th>Type</th>
									<th>Status</th>
									<th>Device</th>
								</tr>
							</thead>
							<tbody>
								{overviewData.map((row, i) => (
									<tr key={i}>
										<td>
											<div>
												<h6 className="mb-0">
													{row.date}
												</h6>
												<small>{row.time}</small>
											</div>
										</td>
										<td>
											<h6 className="mb-0">{row.name}</h6>
										</td>
										<td>{row.type}</td>
										<td>
											<span
												className={`badge rounded-pill bg-opacity-10 ${getStatusClass(
													row.status
												)}`}
											>
												{row.status}
											</span>
										</td>
										<td>{row.device}</td>
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

export default BeneficiaryOverview;
