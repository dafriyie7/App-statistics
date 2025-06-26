import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// ────────────────────────────────────────────────────────────────────
//  Mock helpers — swap with real API later
// ────────────────────────────────────────────────────────────────────
const mockFetchBeneficiaryById = (id) =>
	Promise.resolve({
		id: 10,
		avatar: "https://randomuser.me/api/portraits/women/10.jpg",
		name: "Abena Korkor",
		email: "abena.korkor@example.com",
		district: "Savannah",
		organisation: "AgriGirls",
		subProgramme: "Agri Training",
		device: "Tablet F7",
		enrolled: "2025-06-10",
		role: "user",
		status: "Active",
	});

// ────────────────────────────────────────────────────────────────────
//  EditBeneficiary Page — simple local‑state mock (no axios)
// ────────────────────────────────────────────────────────────────────
const EditBeneficiary = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [formData, setFormData] = useState(null);

	useEffect(() => {
		mockFetchBeneficiaryById(id).then(setFormData);
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// 🔁 Replace with real PUT/PATCH call
		console.log("Saving:", formData);
		navigate("/beneficiaries");
	};

	if (!formData) return <div className="p-4">Loading…</div>;

	return (
		<div className="container py-4">
			<h4>Edit Beneficiary</h4>
			<form onSubmit={handleSubmit} className="row g-3">
				{/* Full Name */}
				<div className="col-md-6">
					<label className="form-label">Full Name</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="form-control"
						required
					/>
				</div>

				{/* Email */}
				<div className="col-md-6">
					<label className="form-label">Email</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="form-control"
						required
					/>
				</div>

				{/* District */}
				<div className="col-md-6">
					<label className="form-label">District</label>
					<input
						type="text"
						name="district"
						value={formData.district}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				{/* Organisation */}
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

				{/* Sub‑Programme */}
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

				{/* Assigned Device */}
				<div className="col-md-6">
					<label className="form-label">Assigned Device</label>
					<input
						type="text"
						name="device"
						value={formData.device}
						onChange={handleChange}
						className="form-control"
					/>
				</div>

				{/* Role */}
				<div className="col-md-6">
					<label className="form-label">Role</label>
					<select
						name="role"
						value={formData.role}
						onChange={handleChange}
						className="form-select"
					>
						<option value="user">User</option>
						<option value="admin">Admin</option>
					</select>
				</div>

				{/* Status */}
				<div className="col-md-6">
					<label className="form-label">Status</label>
					<select
						name="status"
						value={formData.status}
						onChange={handleChange}
						className="form-select"
					>
						<option value="Active">Active</option>
						<option value="Inactive">Inactive</option>
						<option value="Disabled">Disabled</option>
					</select>
				</div>

				{/* Date Enrolled (read‑only) */}
				<div className="col-md-6">
					<label className="form-label">Date Enrolled</label>
					<input
						type="text"
						value={formData.enrolled}
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

export default EditBeneficiary;
