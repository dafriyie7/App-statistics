import React, { useEffect, useRef, useState } from "react";
import { Modal as BsModal } from "bootstrap";

export default function CreateBeneficiaryModal({ open, onClose, onSuccess }) {
	const dialogRef = useRef(null);

	useEffect(() => {
		if (!dialogRef.current) return;
		const modal = BsModal.getOrCreateInstance(dialogRef.current);
		open ? modal.show() : modal.hide();
	}, [open]);

	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		district: "",
		organisation: "",
		subProgramme: "",
		device: "",
		enrolled: "",
		avatar: "",
	});

	const update = (field) => (e) =>
		setForm((f) => ({ ...f, [field]: e.target.value }));

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onloadend = () => {
			setForm((f) => ({ ...f, avatar: reader.result }));
		};
		reader.readAsDataURL(file);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Replace this with Redux dispatch if needed
		const newBeneficiary = {
			id: Date.now(),
			...form,
		};

		onSuccess?.(newBeneficiary);
		onClose();
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
						<h5 className="modal-title">Add Beneficiary</h5>
						<button
							type="button"
							className="btn-close"
							onClick={onClose}
						/>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="modal-body">
							<div className="row g-3">
								<div className="col-md-6">
									<label className="form-label">
										Full Name
									</label>
									<input
										className="form-control"
										value={form.name}
										onChange={update("name")}
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
										District
									</label>
									<input
										className="form-control"
										value={form.district}
										onChange={update("district")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Organisation
									</label>
									<input
										className="form-control"
										value={form.organisation}
										onChange={update("organisation")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Sub‑Programme
									</label>
									<input
										className="form-control"
										value={form.subProgramme}
										onChange={update("subProgramme")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">Device</label>
									<input
										className="form-control"
										value={form.device}
										onChange={update("device")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Date Enrolled
									</label>
									<input
										type="date"
										className="form-control"
										value={form.enrolled}
										onChange={update("enrolled")}
									/>
								</div>
								<div className="col-md-12">
									<label className="form-label">
										Upload Avatar
									</label>
									<input
										type="file"
										accept="image/*"
										className="form-control"
										onChange={handleImageUpload}
									/>
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
							>
								Add Beneficiary
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
