import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/*********************************************************************
 * AddUser Page                                                     *
 * ------------------------------------------------------------------*
 * Blank form to create a new system user.                           *
 * Swap the console.log with a real POST or context update later.    *
 *********************************************************************/

const ALL_PERMISSIONS = ["view", "create", "edit", "delete"];
const todayISO = () => new Date().toISOString().slice(0, 10);

const AddUser = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		id: Date.now(),
		avatar: "",
		name: "",
		email: "",
		organisation: "",
		role: "user",
		status: "Active",
		permissions: ["view"],
		enrolled: todayISO(),
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const togglePermission = (perm) => {
		setFormData((prev) => {
			const has = prev.permissions.includes(perm);
			return {
				...prev,
				permissions: has
					? prev.permissions.filter((p) => p !== perm)
					: [...prev.permissions, perm],
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Creating user:", formData); // 🔁 replace with POST
		navigate("/users", { state: { newUser: formData } });
	};

	return (
		<div className="container py-4">
			<h4>Add User</h4>
			<form onSubmit={handleSubmit} className="row g-3">
				{/* Name */}
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
				{/* Avatar URL */}
				<div className="col-md-6">
					<label className="form-label">Avatar URL</label>
					<input
						type="text"
						name="avatar"
						value={formData.avatar}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				{/* Role */}
				<div className="col-md-3">
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
				<div className="col-md-3">
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
				{/* Created (read‑only) */}
				<div className="col-md-6">
					<label className="form-label">Created At</label>
					<input
						type="text"
						name="enrolled"
						value={formData.enrolled}
						readOnly
						className="form-control-plaintext"
					/>
				</div>
				{/* Permissions */}
				<div className="col-12">
					<label className="form-label d-block">Permissions</label>
					<div className="d-flex flex-wrap gap-3">
						{ALL_PERMISSIONS.map((perm) => (
							<div className="form-check" key={perm}>
								<input
									className="form-check-input"
									type="checkbox"
									id={perm}
									checked={formData.permissions.includes(
										perm
									)}
									onChange={() => togglePermission(perm)}
								/>
								<label
									className="form-check-label"
									htmlFor={perm}
								>
									{perm.charAt(0).toUpperCase() +
										perm.slice(1)}
								</label>
							</div>
						))}
					</div>
				</div>
				{/* Actions */}
				<div className="col-12 d-flex justify-content-end gap-2">
					<button
						type="button"
						className="btn btn-outline-secondary"
						onClick={() => navigate(-1)}
					>
						Cancel
					</button>
					<button type="submit" className="btn btn-primary">
						Add User
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddUser;
