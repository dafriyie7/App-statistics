import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
	fetchDevice,
	deleteDevice,
} from "../features/devices/devicesSlice";
import { fetchBeneficiary } from "../features/beneficiaries/beneficiariesSlice";
import EditDeviceModal from "../components/EditDeviceModal"; // ✅ import modal

const DeviceDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const rawDevice = useSelector((state) => state.devices.current);
	const beneficiaries = useSelector((state) => state.beneficiaries.entities);

	const [assignmentHistory] = useState([]); // placeholder
	const [locationHistory] = useState([]); // placeholder
	const [showEditModal, setShowEditModal] = useState(false); // ✅ modal trigger state

	useEffect(() => {
		if (id) dispatch(fetchDevice(id));
	}, [id, dispatch]);

	useEffect(() => {
		if (
			rawDevice?.current_beneficiary_id &&
			!beneficiaries?.[rawDevice.current_beneficiary_id]
		) {
			dispatch(fetchBeneficiary(rawDevice.current_beneficiary_id));
		}
	}, [rawDevice, beneficiaries, dispatch]);

	const device = useMemo(() => {
		if (!rawDevice) return null;

		const benId = rawDevice.current_beneficiary_id;
		const beneficiary = beneficiaries?.[benId];
		const beneficiaryName = beneficiary
			? `${beneficiary.first_name} ${beneficiary.last_name}`
			: benId
			? "Loading..."
			: "—";

		return {
			deviceId: rawDevice.id,
			model: rawDevice.device_name,
			mac: rawDevice.mac_address,
			status: rawDevice.is_active ? "Active" : "Inactive",
			organisation: rawDevice.organization,
			subProgramme: rawDevice.programme,
			enrolled: new Date(rawDevice.date_enrolled).toLocaleDateString(),
			lastSync: rawDevice.last_synced
				? new Date(rawDevice.last_synced).toLocaleString()
				: "—",
			beneficiary: beneficiaryName,
		};
	}, [rawDevice, beneficiaries]);

	const handleDelete = (deviceId) => {
		if (window.confirm("Are you sure you want to delete this device?")) {
			dispatch(deleteDevice(deviceId)).then(() => navigate("/devices"));
		}
	};

	if (!device)
		return <div className="container py-5">Loading device details...</div>;

	return (
		<div className="container py-4">
			<button
				className="btn btn-outline-secondary mb-3"
				onClick={() => navigate(-1)}
			>
				← Back
			</button>

			{/* Device Summary Section */}
			<section className="mb-5">
				<div className="d-flex justify-content-between align-items-center mb-3">
					<h4 className="mb-0">Device Summary</h4>

					<div className="d-flex gap-2 align-items-center">
						<span
							className={`badge rounded-pill ${
								device.status === "Active"
									? "bg-success"
									: "bg-secondary"
							}`}
						>
							{device.status}
						</span>

						<div className="btn-group" role="group">
							<button
								type="button"
								className="btn btn-sm btn-outline-primary"
								title="Edit Device"
								onClick={() => setShowEditModal(true)} // ✅ OPEN MODAL
							>
								<i className="bi bi-pencil-square me-1"></i>
								Edit
							</button>
							<button
								type="button"
								className="btn btn-sm btn-outline-danger"
								title="Delete Device"
								onClick={() => handleDelete(device.deviceId)}
							>
								<i className="bi bi-trash me-1"></i>
								Delete
							</button>
						</div>
					</div>
				</div>

				<div className="card shadow-sm">
					<div className="card-body">
						<div className="row g-4">
							<Info label="Device ID" value={device.deviceId} />
							<Info label="Model" value={device.model} />
							<Info label="MAC Address" value={device.mac} />
							<Info
								label="Organisation"
								value={device.organisation}
							/>
							<Info
								label="Sub‑Programme"
								value={device.subProgramme}
							/>
							<Info
								label="Assigned To"
								value={device.beneficiary}
							/>
							<Info
								label="Date Enrolled"
								value={device.enrolled}
							/>
							<Info label="Last Sync" value={device.lastSync} />
						</div>
					</div>
				</div>
			</section>

			{/* Assignment History Section */}
			<section className="mb-5">
				<h4 className="mb-3">Assignment History</h4>
				{assignmentHistory.length ? (
					<DataTable
						columns={["Date", "Assigned To", "Notes"]}
						rows={assignmentHistory.map((a) => [
							a.date,
							a.to,
							a.notes,
						])}
					/>
				) : (
					<p className="text-muted">
						No assignment history available.
					</p>
				)}
			</section>

			{/* Location History Section */}
			<section className="mb-5">
				<h4 className="mb-3">Location History</h4>
				{locationHistory.length ? (
					<DataTable
						columns={["Date", "Latitude", "Longitude"]}
						rows={locationHistory.map((l) => [
							l.date,
							l.lat,
							l.lng,
						])}
					/>
				) : (
					<p className="text-muted">No location history available.</p>
				)}
			</section>

			{/* ✅ Edit Modal */}
			<EditDeviceModal
				open={showEditModal}
				onClose={() => setShowEditModal(false)}
				device={rawDevice}
				onSuccess={(updated) => {
					// Optional: refresh view or show toast
				}}
			/>
		</div>
	);
};

const Info = ({ label, value }) => (
	<div className="col-md-6">
		<div className="small text-muted">{label}</div>
		<div className="fw-semibold">{value || "—"}</div>
	</div>
);

const DataTable = ({ columns, rows }) => (
	<div className="table-responsive">
		<table className="table table-hover table-sm align-middle">
			<thead className="table-light">
				<tr>
					{columns.map((c) => (
						<th key={c}>{c}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, idx) => (
					<tr key={idx}>
						{row.map((cell, i) => (
							<td key={i}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default DeviceDetails;
