import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal as BsModal } from "bootstrap";
import { updateDevice } from "../features/devices/devicesSlice";

export default function EditDeviceModal({ open, device, onClose, onSuccess }) {
	const dispatch = useDispatch();
	const { status, error } = useSelector((s) => s.devices);

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
		device_name: "",
		mac_address: "",
		android_version: "",
		app_version: "",
		date_enrolled: "",
		fingerprint: "",
		imei: "",
		serial_number: "",
		organization: "",
		programme: "",
		details: {
			additionalProp1: "",
			additionalProp2: "",
			additionalProp3: "",
		},
	});

	useEffect(() => {
		if (open && device) {
			setForm({
				device_name: device.device_name || "",
				mac_address: device.mac_address || "",
				android_version: device.android_version || "",
				app_version: device.app_version || "",
				date_enrolled: device.date_enrolled?.split("T")[0] || "",
				fingerprint: device.fingerprint || "",
				imei: device.imei || "",
				serial_number: device.serial_number || "",
				organization: device.organization || "",
				programme: device.programme || "",
				details: {
					additionalProp1: device.details?.additionalProp1 || "",
					additionalProp2: device.details?.additionalProp2 || "",
					additionalProp3: device.details?.additionalProp3 || "",
				},
			});
		}
	}, [open, device]);

	const update = (field) => (e) =>
		setForm((f) => ({ ...f, [field]: e.target.value }));

	const updateDetail = (key) => (e) =>
		setForm((f) => ({
			...f,
			details: {
				...f.details,
				[key]: e.target.value,
			},
		}));

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!device || status === "loading") return;

		try {
			const updated = await dispatch(
				updateDevice({ id: device.id, ...form })
			).unwrap();

			onSuccess?.(updated);
			onClose();
			forceModalCleanup();
		} catch (_) {}
	};

	if (!device) return null;

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
						<h5 className="modal-title">Edit Device</h5>
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
										Device Name
									</label>
									<input
										className="form-control"
										value={form.device_name}
										onChange={update("device_name")}
										required
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										MAC Address
									</label>
									<input
										className="form-control"
										value={form.mac_address}
										onChange={update("mac_address")}
										required
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Android Version
									</label>
									<input
										className="form-control"
										value={form.android_version}
										onChange={update("android_version")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										App Version
									</label>
									<input
										className="form-control"
										value={form.app_version}
										onChange={update("app_version")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Date Enrolled
									</label>
									<input
										type="date"
										className="form-control"
										value={form.date_enrolled}
										onChange={update("date_enrolled")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Fingerprint
									</label>
									<input
										className="form-control"
										value={form.fingerprint}
										onChange={update("fingerprint")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">IMEI</label>
									<input
										className="form-control"
										value={form.imei}
										onChange={update("imei")}
									/>
								</div>
								<div className="col-md-6">
									<label className="form-label">
										Serial Number
									</label>
									<input
										className="form-control"
										value={form.serial_number}
										onChange={update("serial_number")}
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
										Sub-Programme
									</label>
									<input
										className="form-control"
										value={form.programme}
										onChange={update("programme")}
									/>
								</div>

								{/* Device Details */}
								<div className="col-12">
									<label className="form-label">
										Additional Details
									</label>
								</div>
								{[
									"additionalProp1",
									"additionalProp2",
									"additionalProp3",
								].map((key) => (
									<div className="col-md-4" key={key}>
										<input
											className="form-control"
											placeholder={key}
											value={form.details[key]}
											onChange={updateDetail(key)}
										/>
									</div>
								))}
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
