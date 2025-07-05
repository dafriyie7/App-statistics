import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import devices from "../components/data/devicedata"; // ← actual dataset

/*********************************************************************
 * EditDevice Page – loads real device by deviceId                   *
 *********************************************************************/

// Mock “fetch” that simply finds the device locally
const mockFetchDeviceByDeviceId = (deviceId) =>
	Promise.resolve(devices.find((d) => d.deviceId === deviceId) ?? null);

// Local mock list of beneficiaries (replace with API later)
const initialBeneficiaries = [
	{ id: 1, name: "Asha Mensah" },
	{ id: 2, name: "Tiger Nixon" },
	{ id: 3, name: "Garrett Winters" },
];

const EditDevice = () => {
	const { id: deviceId } = useParams(); // id IS the deviceId string
	const navigate = useNavigate();

	const [device, setDevice] = useState(null);
	const [beneficiaries] = useState(initialBeneficiaries);
	const [saving, setSaving] = useState(false);

	/* ───── Load device once ───── */
	useEffect(() => {
		let mounted = true;
		mockFetchDeviceByDeviceId(deviceId).then((data) => {
			if (mounted) setDevice(data);
		});
		return () => {
			mounted = false;
		};
	}, [deviceId]);

	/* ───── Handlers ───── */
	const handleChange = (e) => {
		const { name, value } = e.target;
		setDevice((prev) => ({ ...prev, [name]: value }));
	};

	const handleBeneficiaryChange = (e) => {
		const beneficiaryId = e.target.value ? Number(e.target.value) : null;
		const beneficiary = beneficiaries.find((b) => b.id === beneficiaryId);
		setDevice((prev) => ({
			...prev,
			beneficiaryId,
			beneficiaryName: beneficiary?.name ?? null,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSaving(true);
		// 🔁 Replace with real PUT call later
		console.log("Saving", device);
		setTimeout(() => navigate("/device-management"), 500);
	};

	if (device === null) return <div className="p-4">Loading…</div>;
	if (device === undefined)
		return <div className="p-4 text-danger">Device not found</div>;

	return (
		<div className="container py-4">
			<h4>Edit Device</h4>
			<form onSubmit={handleSubmit} className="row g-3">
				{/* Device ID (read-only) */}
				<div className="col-md-6">
					<label className="form-label">Device ID</label>
					<input
						type="text"
						value={device.deviceId}
						readOnly
						className="form-control"
					/>
				</div>

				{/* Model */}
				<div className="col-md-6">
					<label className="form-label">Model / Name</label>
					<input
						type="text"
						name="model"
						value={device.model}
						onChange={handleChange}
						className="form-control"
						required
					/>
				</div>

				{/* Org / Sub‑Programme */}
				<div className="col-md-6">
					<label className="form-label">Organisation</label>
					<input
						type="text"
						name="organisation"
						value={device.organisation}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Sub-Programme</label>
					<input
						type="text"
						name="subProgramme"
						value={device.subProgramme}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				{/* Beneficiary assignment */}
				<div className="col-md-6">
					<label className="form-label">Assigned Beneficiary</label>
					<select
						value={device.beneficiaryId ?? ""}
						onChange={handleBeneficiaryChange}
						className="form-select"
					>
						<option value="">— Unassigned —</option>
						{beneficiaries.map((b) => (
							<option key={b.id} value={b.id}>
								{b.name}
							</option>
						))}
					</select>
				</div>

				{/* Status */}
				<div className="col-md-6">
					<label className="form-label">Status</label>
					<select
						name="status"
						value={device.status}
						onChange={handleChange}
						className="form-select"
					>
						<option>Active</option>
						<option>Inactive</option>
						<option>Disabled</option>
					</select>
				</div>

				{/* Read‑only metadata */}
				<div className="col-md-6">
					<label className="form-label">Date Enrolled</label>
					<input
						value={device.enrolled}
						readOnly
						className="form-control-plaintext"
					/>
				</div>
				<div className="col-md-6">
					<label className="form-label">Last Sync</label>
					<input
						value={device.lastSync}
						readOnly
						className="form-control-plaintext"
					/>
				</div>

				{/* Save */}
				<div className="col-12 d-flex justify-content-end">
					<button
						type="submit"
						className="btn btn-primary"
						disabled={saving}
					>
						{saving ? "Saving…" : "Save Changes"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditDevice;
