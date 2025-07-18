import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal as BsModal } from "bootstrap";
import {
	createUser,
	uploadUserImageBase64,
} from "../features/users/usersSlice";
import {
	fetchRoles,
	createRole,
} from "../features/roles/rolesSlice";

export default function CreateUserModal({ open, onClose, onSuccess }) {
	const dispatch = useDispatch();
	const status = useSelector((s) => s.users.status);
	const error = useSelector((s) => s.users.error);
	const roles = useSelector((s) => s.roles?.list || []);

	const dialogRef = useRef(null);
	useEffect(() => {
		if (!dialogRef.current) return;
		const instance = BsModal.getOrCreateInstance(dialogRef.current);
		open ? instance.show() : instance.hide();
	}, [open]);

	useEffect(() => {
		if (open) {
			dispatch(fetchRoles());
		}
	}, [open, dispatch]);

	const [form, setForm] = useState({
		designation: "",
		email: "",
		first_name: "",
		last_name: "",
		organization: "",
		password: "",
		phone: "",
		photo: "",
		username: "",
		role: "",
	});

	const update = (field) => (e) =>
		setForm((f) => ({ ...f, [field]: e.target.value }));

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onloadend = () => {
			setForm((f) => ({ ...f, photo: reader.result }));
		};
		reader.readAsDataURL(file);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (status === "loading") return;

		try {
			const { photo, role, ...rest } = form;

			// Check if role exists
			let roleObj = roles.find(
				(r) => r.name.toLowerCase() === role.trim().toLowerCase()
			);

			// Create new role if not found
			if (!roleObj && role.trim()) {
				const result = await dispatch(
					createRole({
						name: role.trim(),
						description: `${role} role`,
					})
				).unwrap();
				roleObj = result;
			}

			const userData = {
				...rest,
				role: roleObj?.id,
			};

			const created = await dispatch(createUser(userData)).unwrap();

			if (photo?.startsWith("data:")) {
				await dispatch(
					uploadUserImageBase64({ id: created.id, base64: photo })
				).unwrap();
			}

			onSuccess?.(created);
			onClose();
		} catch (_) {}
	};

	return (
		<div
			ref={dialogRef}
			className="modal fade"
			tabIndex="-1"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Create User</h5>
						<button
							type="button"
							className="btn-close"
							aria-label="Close"
							onClick={onClose}
						/>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="modal-body">
							{error && (
								<div className="alert alert-danger">
									{error}
								</div>
							)}

							<div className="row g-3">
								<div className="col-md-6">
									<label className="form-label">
										First name
									</label>
									<input
										className="form-control"
										value={form.first_name}
										onChange={update("first_name")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Last name
									</label>
									<input
										className="form-control"
										value={form.last_name}
										onChange={update("last_name")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Username
									</label>
									<input
										className="form-control"
										value={form.username}
										onChange={update("username")}
										required
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">Email</label>
									<input
										type="email"
										className="form-control"
										value={form.email}
										onChange={update("email")}
										required
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">Phone</label>
									<input
										className="form-control"
										value={form.phone}
										onChange={update("phone")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Organization
									</label>
									<input
										className="form-control"
										value={form.organization}
										onChange={update("organization")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Designation
									</label>
									<input
										className="form-control"
										value={form.designation}
										onChange={update("designation")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Upload Image
									</label>
									<input
										type="file"
										accept="image/*"
										className="form-control"
										onChange={handleImageUpload}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Password
									</label>
									<input
										type="password"
										className="form-control"
										value={form.password}
										onChange={update("password")}
										required
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">Role</label>
									<select
										className="form-select"
										value={form.role}
										onChange={update("role")}
									>
										<option value="">-- Select role --</option>
										{roles.map((r) => (
											<option key={r.id} value={r.name}>
												{r.name}
											</option>
										))}
									</select>
									<small className="text-muted">
										Select or type a new role
									</small>
								</div>
							</div>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-outline-secondary"
								onClick={onClose}
							>
								Cancel
							</button>
							<button
								type="submit"
								className="btn btn-grd-primary"
								disabled={status === "loading"}
							>
								{status === "loading"
									? "Saving…"
									: "Create User"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}


// import React, { useState, useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Modal as BsModal } from "bootstrap";
// import {
// 	createUser,
// 	uploadUserImageBase64,
// } from "../features/users/usersSlice";
// import { fetchRoles } from "../features/roles/rolesSlice"; // GET /roles – list
// import { assignRole } from "../features/users/usersSlice"; // POST /users/:id/roles – assign role
// import { createRole } from "../features/roles/rolesSlice"; // POST /roles – create

// export default function CreateUserModal({ open, onClose, onSuccess }) {
// 	const dispatch = useDispatch();
// 	const { status, error } = useSelector((s) => s.users);

// 	const dialogRef = useRef(null);
// 	useEffect(() => {
// 		if (!dialogRef.current) return;
// 		const instance = BsModal.getOrCreateInstance(dialogRef.current);
// 		open ? instance.show() : instance.hide();
// 	}, [open]);

// 	const [form, setForm] = useState({
// 		designation: "",
// 		email: "",
// 		first_name: "",
// 		last_name: "",
// 		organization: "",
// 		password: "",
// 		phone: "",
// 		photo: "",
// 		username: "",
// 	});

// 	useEffect(() => {
// 		if (open) {
// 			setForm({
// 				designation: "",
// 				email: "",
// 				first_name: "",
// 				last_name: "",
// 				organization: "",
// 				password: "",
// 				phone: "",
// 				photo: "",
// 				username: "",
// 			});
// 		}
// 	}, [open]);

// 	const update = (field) => (e) =>
// 		setForm((f) => ({ ...f, [field]: e.target.value }));

// 	const handleImageUpload = (e) => {
// 		const file = e.target.files[0];
// 		if (!file) return;

// 		const reader = new FileReader();
// 		reader.onloadend = () => {
// 			setForm((f) => ({ ...f, photo: reader.result }));
// 		};
// 		reader.readAsDataURL(file);
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if (status === "loading") return;

// 		try {
// 			const { photo, ...rest } = form;
// 			const created = await dispatch(createUser(rest)).unwrap();

// 			if (photo?.startsWith("data:")) {
// 				await dispatch(
// 					uploadUserImageBase64({ id: created.id, base64: photo })
// 				).unwrap();
// 			}

// 			onSuccess?.(created);
// 			onClose();
// 		} catch (_) {}
// 	};

// 	return (
// 		<div
// 			ref={dialogRef}
// 			className="modal fade"
// 			tabIndex="-1"
// 			aria-hidden="true"
// 		>
// 			<div className="modal-dialog modal-dialog-centered modal-lg">
// 				<div className="modal-content">
// 					<div className="modal-header">
// 						<h5 className="modal-title">Create User</h5>
// 						<button
// 							type="button"
// 							className="btn-close"
// 							aria-label="Close"
// 							onClick={onClose}
// 						/>
// 					</div>
// 					<form onSubmit={handleSubmit}>
// 						<div className="modal-body">
// 							{error && (
// 								<div className="alert alert-danger">
// 									{error}
// 								</div>
// 							)}

// 							<div className="row g-3">
// 								<div className="col-md-6">
// 									<label className="form-label">
// 										First name
// 									</label>
// 									<input
// 										className="form-control"
// 										value={form.first_name}
// 										onChange={update("first_name")}
// 									/>
// 								</div>
// 								<div className="col-md-6">
// 									<label className="form-label">
// 										Last name
// 									</label>
// 									<input
// 										className="form-control"
// 										value={form.last_name}
// 										onChange={update("last_name")}
// 									/>
// 								</div>
// 								<div className="col-md-6">
// 									<label className="form-label">
// 										Username
// 									</label>
// 									<input
// 										className="form-control"
// 										value={form.username}
// 										onChange={update("username")}
// 										required
// 									/>
// 								</div>
// 								<div className="col-md-6">
// 									<label className="form-label">Email</label>
// 									<input
// 										type="email"
// 										className="form-control"
// 										value={form.email}
// 										onChange={update("email")}
// 										required
// 									/>
// 								</div>
// 								<div className="col-md-6">
// 									<label className="form-label">Phone</label>
// 									<input
// 										className="form-control"
// 										value={form.phone}
// 										onChange={update("phone")}
// 									/>
// 								</div>
// 								<div className="col-md-6">
// 									<label className="form-label">
// 										Organization
// 									</label>
// 									<input
// 										className="form-control"
// 										value={form.organization}
// 										onChange={update("organization")}
// 									/>
// 								</div>
// 								<div className="col-md-6">
// 									<label className="form-label">
// 										Designation
// 									</label>
// 									<input
// 										className="form-control"
// 										value={form.designation}
// 										onChange={update("designation")}
// 									/>
// 								</div>
// 								<div className="col-md-6">
// 									<label className="form-label">
// 										Upload Image
// 									</label>
// 									<input
// 										type="file"
// 										accept="image/*"
// 										className="form-control"
// 										onChange={handleImageUpload}
// 									/>
// 								</div>
// 								<div className="col-md-6">
// 									<label className="form-label">
// 										Password
// 									</label>
// 									<input
// 										type="password"
// 										className="form-control"
// 										value={form.password}
// 										onChange={update("password")}
// 										required
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="modal-footer">
// 							<button
// 								type="button"
// 								className="btn btn-outline-secondary"
// 								onClick={onClose}
// 							>
// 								Cancel
// 							</button>
// 							<button
// 								type="submit"
// 								className="btn btn-grd-primary"
// 								disabled={status === "loading"}
// 							>
// 								{status === "loading"
// 									? "Saving…"
// 									: "Create User"}
// 							</button>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
