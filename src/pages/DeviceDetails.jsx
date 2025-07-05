import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import devices from "../components/data/devicedata"; // local dataset — replace with API fetch later

/*********************************************************************
 * DeviceDetails Page                                               *
 * ------------------------------------------------------------------*
 *  Tabs: Summary | Assignment History | Location History           *
 *********************************************************************/

const DeviceDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	// Match using deviceId instead of numeric id
	const device = devices.find((d) => d.deviceId === id);

	if (!device) return <p className="p-4 text-danger">Device not found</p>;

	const assignmentHistory = device.assignmentHistory || [];
	const locationHistory = device.locationHistory || [];

	return (
		<div className="container py-4">
			<button className="btn btn-link mb-3" onClick={() => navigate(-1)}>
				← Back
			</button>
			<h4 className="mb-3">Device Details: {device.deviceId}</h4>

			{/* Tabs */}
			<ul className="nav nav-tabs mb-3" role="tablist">
				<li className="nav-item">
					<button
						className="nav-link active"
						data-bs-toggle="tab"
						data-bs-target="#summary"
						type="button"
					>
						Summary
					</button>
				</li>
				<li className="nav-item">
					<button
						className="nav-link"
						data-bs-toggle="tab"
						data-bs-target="#assign"
						type="button"
					>
						Assignment History
					</button>
				</li>
				<li className="nav-item">
					<button
						className="nav-link"
						data-bs-toggle="tab"
						data-bs-target="#location"
						type="button"
					>
						Location History
					</button>
				</li>
			</ul>

			<div className="tab-content">
				{/* ── Summary ──────────────────────────── */}
				<div className="tab-pane fade show active" id="summary">
					<div className="row g-3">
						<div className="col-md-4">
							<strong>Device ID:</strong> {device.deviceId}
						</div>
						<div className="col-md-4">
							<strong>Model:</strong> {device.model}
						</div>
						<div className="col-md-4">
							<strong>Status:</strong> {device.status}
						</div>
						<div className="col-md-4">
							<strong>Organisation:</strong> {device.organisation}
						</div>
						<div className="col-md-4">
							<strong>Sub‑Programme:</strong>{" "}
							{device.subProgramme}
						</div>
						<div className="col-md-4">
							<strong>Beneficiary:</strong> {device.beneficiary}
						</div>
						<div className="col-md-4">
							<strong>Date Enrolled:</strong> {device.enrolled}
						</div>
						<div className="col-md-4">
							<strong>Last Sync:</strong> {device.lastSync}
						</div>
					</div>
				</div>

				{/* ── Assignment History ───────────────── */}
				<div className="tab-pane fade" id="assign">
					{assignmentHistory.length ? (
						<div className="table-responsive mt-3">
							<table className="table table-hover table-sm">
								<thead className="table-light">
									<tr>
										<th>Date</th>
										<th>Assigned To</th>
										<th>Notes</th>
									</tr>
								</thead>
								<tbody>
									{assignmentHistory.map((h) => (
										<tr key={h.date + h.to}>
											<td>{h.date}</td>
											<td>{h.to}</td>
											<td>{h.notes}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<p className="text-muted mt-3">
							No assignment history.
						</p>
					)}
				</div>

				{/* ── Location History ─────────────────── */}
				<div className="tab-pane fade" id="location">
					{locationHistory.length ? (
						<div className="table-responsive mt-3">
							<table className="table table-hover table-sm">
								<thead className="table-light">
									<tr>
										<th>Date</th>
										<th>Latitude</th>
										<th>Longitude</th>
									</tr>
								</thead>
								<tbody>
									{locationHistory.map((l) => (
										<tr key={l.date + l.lat}>
											<td>{l.date}</td>
											<td>{l.lat}</td>
											<td>{l.lng}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<p className="text-muted mt-3">No location history.</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default DeviceDetails;
