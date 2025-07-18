import React, { useEffect, useRef, useState } from "react";
import { Modal as BsModal } from "bootstrap";

const EditBeneficiaryModal = ({ open, onClose, beneficiary, onSave }) => {
	const dialogRef = useRef(null);
	const [form, setForm] = useState({ ...beneficiary });

	useEffect(() => {
		if (!dialogRef.current) return;
		const modal = BsModal.getOrCreateInstance(dialogRef.current);
		open ? modal.show() : modal.hide();
	}, [open]);

	useEffect(() => {
		setForm({ ...beneficiary });
	}, [beneficiary]);

	const update = (key) => (e) =>
		setForm((f) => ({ ...f, [key]: e.target.value }));

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
		onSave?.(form);
		onClose();
	};

	if (!beneficiary) return null;

	return (
		<div
			className="modal fade"
			tabIndex="-1"
			aria-hidden="true"
			ref={dialogRef}
		>
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Edit Beneficiary</h5>
						<button
							type="button"
							className="btn-close"
							onClick={onClose}
						/>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="modal-body">
							<div className="row g-3">
								{[
									["name", "Full Name"],
									["email", "Email", "email"],
									["phone", "Phone"],
									["district", "District"],
									["organisation", "Organisation"],
									["subProgramme", "Sub‑Programme"],
									["device", "Device"],
									["enrolled", "Date Enrolled", "date"],
								].map(([key, label, type = "text"]) => (
									<div className="col-md-6" key={key}>
										<label className="form-label">
											{label}
										</label>
										<input
											type={type}
											className="form-control"
											value={form[key] || ""}
											onChange={update(key)}
										/>
									</div>
								))}
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
								Save Changes
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditBeneficiaryModal;
