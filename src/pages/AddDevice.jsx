import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const blank = {
	deviceId: "",
	model: "",
	organisation: "",
	subProgramme: "",
	beneficiaryId: null,
	enrolled: new Date().toISOString().slice(0, 10),
	lastSync: "",
	status: "Active",
};

const initialBeneficiaries = [
	{ id: 1, name: "Asha Mensah" },
	{ id: 2, name: "Tiger Nixon" },
	{ id: 3, name: "Garrett Winters" },
];

const AddDevice = () => {
	const navigate = useNavigate();
	const [device, setDevice] = useState(blank);
	const [saving, setSaving] = useState(false);

	const handleChange = (e) =>
		setDevice({ ...device, [e.target.name]: e.target.value });

	const handleBeneficiaryChange = (e) => {
		const id = e.target.value ? Number(e.target.value) : null;
		setDevice({ ...device, beneficiaryId: id });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSaving(true);
		// 🔁 POST to backend here
		console.log("Creating device:", device);
		setTimeout(() => navigate("/device-management"), 500);
	};

	return (
		<div className="container py-4">
			<h4>Add Device</h4>
			<form onSubmit={handleSubmit} className="row g-3">
				<div className="col-md-6">
					<label className="form-label">Device ID*</label>
					<input
						required
						name="deviceId"
						value={device.deviceId}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Model / Name*</label>
					<input
						required
						name="model"
						value={device.model}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Organisation</label>
					<input
						name="organisation"
						value={device.organisation}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Sub‑Programme</label>
					<input
						name="subProgramme"
						value={device.subProgramme}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Assigned Beneficiary</label>
					<select
						value={device.beneficiaryId ?? ""}
						onChange={handleBeneficiaryChange}
						className="form-select"
					>
						<option value="">— Unassigned —</option>
						{initialBeneficiaries.map((b) => (
							<option key={b.id} value={b.id}>
								{b.name}
							</option>
						))}
					</select>
				</div>

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

				<div className="col-12 d-flex justify-content-end">
					<button
						type="submit"
						className="btn btn-primary"
						disabled={saving}
					>
						{saving ? "Saving…" : "Create Device"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddDevice;
