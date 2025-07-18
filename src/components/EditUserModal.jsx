import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal as BsModal } from "bootstrap";
import {
	updateUser,
	adminUpdatePassword,
	uploadUserImageBase64,
} from "../features/users/usersSlice";

export default function EditUserModal({ open, user, onClose, onSuccess }) {
	const dispatch = useDispatch();
	const { status, error } = useSelector((s) => s.users);

	const dialogRef = useRef(null);
	const modalInstance = useRef(null);

	useEffect(() => {
		if (!dialogRef.current) return;
		modalInstance.current = BsModal.getOrCreateInstance(dialogRef.current);
		open ? modalInstance.current.show() : modalInstance.current.hide();
	}, [open]);

	useEffect(() => {
		return () => {
			if (modalInstance.current) {
				modalInstance.current.dispose();
				modalInstance.current = null;
			}
		};
	}, []);

	const forceModalCleanup = () => {
		document.querySelectorAll(".modal-backdrop").forEach((b) => b.remove());
		document.body.classList.remove("modal-open");
		document.body.style.overflow = "";
	};

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
	});

	useEffect(() => {
		if (open && user) {
			setForm({
				designation: user.designation || "",
				email: user.email || "",
				first_name: user.first_name || "",
				last_name: user.last_name || "",
				organization: user.organization || "",
				password: "",
				phone: user.phone || "",
				photo: "",
				username: user.username || "",
			});
		}
	}, [open, user]);

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
		if (!user || status === "loading") return;

		try {
			const { password, photo, ...rest } = form;

			const updated = await dispatch(
				updateUser({ id: user.id, data: rest })
			).unwrap();

			if (password.trim()) {
				await dispatch(
					adminUpdatePassword({
						id: user.id,
						password: password.trim(),
					})
				).unwrap();
			}

			if (photo?.startsWith("data:")) {
				await dispatch(
					uploadUserImageBase64({ id: user.id, base64: photo })
				).unwrap();
			}

			onSuccess?.(updated);
			onClose();
			forceModalCleanup();
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
						<h5 className="modal-title">Edit User</h5>
						<button
							type="button"
							className="btn-close"
							aria-label="Close"
							onClick={() => {
								onClose();
								forceModalCleanup();
							}}
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
										Password (leave blank to keep)
									</label>
									<input
										type="password"
										className="form-control"
										value={form.password}
										onChange={update("password")}
									/>
								</div>
							</div>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-outline-secondary"
								onClick={() => {
									onClose();
									forceModalCleanup();
								}}
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
									: "Save Changes"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
