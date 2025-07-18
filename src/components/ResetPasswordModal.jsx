import React, { useState, useEffect, useRef } from "react";
import { Modal as BsModal } from "bootstrap";

export default function ResetPasswordModal({ open, user, onClose, onSave }) {
	const dialogRef = useRef(null);
	const [password, setPassword] = useState("");

	useEffect(() => {
		if (!dialogRef.current) return;
		const modal = BsModal.getOrCreateInstance(dialogRef.current);
		open ? modal.show() : modal.hide();
	}, [open]);

	useEffect(() => {
		if (!open) setPassword("");
	}, [open]);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSave(password);
	};

	return (
		<div ref={dialogRef} className="modal fade" tabIndex="-1">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">
							Reset Password for {user?.username}
						</h5>
						<button className="btn-close" onClick={onClose} />
					</div>
					<form onSubmit={handleSubmit}>
						<div className="modal-body">
							<label className="form-label">New Password</label>
							<input
								type="password"
								className="form-control"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-outline-secondary"
								onClick={onClose}
							>
								Cancel
							</button>
							<button type="submit" className="btn btn-primary">
								Save Password
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
