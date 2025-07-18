import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerDevice } from "../features/devices/devicesSlice";

const CreateDeviceModal = ({ show, onClose }) => {
	const dispatch = useDispatch();
	const [submitting, setSubmitting] = useState(false);

	const [form, setForm] = useState({
		device_name: "",
		android_version: "",
		app_version: "",
		date_enrolled: "",
		fingerprint: "",
		imei: "",
		mac_address: "",
		serial_number: "",
		organization: "",
		programme: "",
		details: {
			additionalProp1: "",
			additionalProp2: "",
			additionalProp3: "",
		},
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name.startsWith("details.")) {
			const key = name.split(".")[1];
			setForm((prev) => ({
				...prev,
				details: { ...prev.details, [key]: value },
			}));
		} else {
			setForm((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		try {
			await dispatch(registerDevice(form)).unwrap();
			onClose();
		} catch (err) {
			alert(err.message || "Failed to register device");
		} finally {
			setSubmitting(false);
		}
	};

	if (!show) return null;

	return (
		<div
			className="modal-overlay"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				zIndex: 1055,
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "1rem",
				overflowY: "auto",
			}}
		>
			<div
				className="modal-dialog modal-xl modal-dialog-centered"
				style={{
					width: "100%",
					maxWidth: "500px",
					maxHeight: "calc(100vh - 2rem)",
					overflow: "hidden",
				}}
			>
				<div
					className="modal-content bg-dark text-white"
					style={{
						borderRadius: "0.5rem",
						boxShadow: "0 0 15px rgba(0,0,0,0.5)",
					}}
				>
					<div className="modal-header border-bottom border-secondary px-4 py-3">
						<h5 className="modal-title">Add Device</h5>
						<button
							type="button"
							className="btn-close btn-close-white"
							onClick={onClose}
						></button>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="modal-body px-4 py-3">
							<div className="row g-4">
								{/* Row 1 */}
								<div className="col-md-6">
									<label className="form-label">
										Device Name
									</label>
									<input
										type="text"
										className="form-control"
										name="device_name"
										value={form.device_name}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Serial Number
									</label>
									<input
										type="text"
										className="form-control"
										name="serial_number"
										value={form.serial_number}
										onChange={handleChange}
										required
									/>
								</div>

								{/* Row 2 */}
								<div className="col-md-6">
									<label className="form-label">IMEI</label>
									<input
										type="text"
										className="form-control"
										name="imei"
										value={form.imei}
										onChange={handleChange}
										required
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										MAC Address
									</label>
									<input
										type="text"
										className="form-control"
										name="mac_address"
										value={form.mac_address}
										onChange={handleChange}
									/>
								</div>

								{/* Row 3 */}
								<div className="col-md-6">
									<label className="form-label">
										Android Version
									</label>
									<input
										type="text"
										className="form-control"
										name="android_version"
										value={form.android_version}
										onChange={handleChange}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										App Version
									</label>
									<input
										type="text"
										className="form-control"
										name="app_version"
										value={form.app_version}
										onChange={handleChange}
									/>
								</div>

								{/* Row 4 */}
								<div className="col-md-6">
									<label className="form-label">
										Organization
									</label>
									<input
										type="text"
										className="form-control"
										name="organization"
										value={form.organization}
										onChange={handleChange}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Programme
									</label>
									<input
										type="text"
										className="form-control"
										name="programme"
										value={form.programme}
										onChange={handleChange}
									/>
								</div>

								{/* Row 5 */}
								<div className="col-md-6">
									<label className="form-label">
										Date Enrolled
									</label>
									<input
										type="date"
										className="form-control"
										name="date_enrolled"
										value={form.date_enrolled}
										onChange={handleChange}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Fingerprint
									</label>
									<input
										type="text"
										className="form-control"
										name="fingerprint"
										value={form.fingerprint}
										onChange={handleChange}
									/>
								</div>

								{/* Details nested object */}
								<div className="col-md-4">
									<label className="form-label">
										Details: Prop 1
									</label>
									<input
										type="text"
										className="form-control"
										name="details.additionalProp1"
										value={form.details.additionalProp1}
										onChange={handleChange}
									/>
								</div>
								<div className="col-md-4">
									<label className="form-label">
										Details: Prop 2
									</label>
									<input
										type="text"
										className="form-control"
										name="details.additionalProp2"
										value={form.details.additionalProp2}
										onChange={handleChange}
									/>
								</div>
								<div className="col-md-4">
									<label className="form-label">
										Details: Prop 3
									</label>
									<input
										type="text"
										className="form-control"
										name="details.additionalProp3"
										value={form.details.additionalProp3}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>

						<div className="modal-footer border-top border-secondary px-4 py-3">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={onClose}
								disabled={submitting}
							>
								Cancel
							</button>
							<button
								type="submit"
								className="btn btn-primary"
								disabled={submitting}
							>
								{submitting ? "Saving..." : "Create Device"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateDeviceModal;
