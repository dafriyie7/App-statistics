import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// ────────────────────────────────────────────────────────────────────
//  Mock helpers — swap with real API later
// ────────────────────────────────────────────────────────────────────
const mockFetchDeviceById = (id) =>
	Promise.resolve({
		id,
		deviceId: "SN-1234",
		model: "Google Pixel 9 Pro XL",
		organisation: "Parent Org A",
		subProgramme: "Programme Alpha",
		beneficiary: "Tiger Nixon",
		enrolled: "2024‑02‑10",
		lastSync: "2025‑06‑20 14:22",
		status: "Active",
	});

// ────────────────────────────────────────────────────────────────────
//  EditDevice Page — simple local‑state mock (no axios)
// ────────────────────────────────────────────────────────────────────
const EditDevice = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [formData, setFormData] = useState(null);

	useEffect(() => {
		mockFetchDeviceById(id).then(setFormData);
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// 🔁 Replace with real PUT/PATCH call
		console.log("Saving:", formData);
		navigate("/device-management");
	};

	if (!formData) return <div className="p-4">Loading…</div>;

	return (
		<div className="container py-4">
			<h4>Edit Device</h4>
			<form onSubmit={handleSubmit} className="row g-3">
				{/* read‑only device ID */}
				<div className="col-md-6">
					<label className="form-label">Device ID</label>
					<input
						type="text"
						value={formData.deviceId}
						readOnly
						className="form-control"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Model / Name</label>
					<input
						type="text"
						name="model"
						value={formData.model}
						onChange={handleChange}
						className="form-control"
						required
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Organisation</label>
					<input
						type="text"
						name="organisation"
						value={formData.organisation}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Sub‑Programme</label>
					<input
						type="text"
						name="subProgramme"
						value={formData.subProgramme}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Assigned Beneficiary</label>
					<input
						type="text"
						name="beneficiary"
						value={formData.beneficiary}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Status</label>
					<select
						name="status"
						value={formData.status}
						onChange={handleChange}
						className="form-select"
					>
						<option>Active</option>
						<option>Inactive</option>
						<option>Disabled</option>
					</select>
				</div>

				{/* read‑only metadata */}
				<div className="col-md-6">
					<label className="form-label">Date Enrolled</label>
					<input
						type="text"
						value={formData.enrolled}
						readOnly
						className="form-control-plaintext"
					/>
				</div>
				<div className="col-md-6">
					<label className="form-label">Last Sync</label>
					<input
						type="text"
						value={formData.lastSync}
						readOnly
						className="form-control-plaintext"
					/>
				</div>

				<div className="col-12 d-flex justify-content-end">
					<button type="submit" className="btn btn-primary">
						Save Changes
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditDevice;
