// import React, { useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

// /**********************************************************************
//  * Generic ManagementTable component                                 *
//  * ------------------------------------------------------------------*
//  * Turns any array of objects into a searchable, selectable data     *
//  * table with:                                                       *
//  *   • Per‑row Edit / Delete actions                                 *
//  *   • Click‑row navigation                                          *
//  *   • Select‑all & bulk action toolbar                              *
//  *   • Optional extra tabs (e.g. Stats, History)                     *
//  * ------------------------------------------------------------------*
//  * Props                                                             *
//  *   title            (string)            – page heading             *
//  *   data             (array<object>)     – rows to display          *
//  *   columns          (array)             – [{ header, accessor,     *
//  *                                          render?: fn(row) }]      *
//  *   searchKeys       (string[])          – fields to filter on      *
//  *   onAdd            (fn)               – Add‑button click handler  *
//  *   onEdit           (fn, row)          – per‑row edit action       *
//  *   onDelete         (fn, rowId)        – per‑row delete action     *
//  *   onBulkDelete     (fn, ids[])        – bulk delete action        *
//  *   rowLink          (fn, row)          – navigate when row clicked *
//  *   addButtonLabel   (string)           – label for the add button  *
//  *   tabs             (array)            – [{ id, label, content }]  *
//  *********************************************************************/

// export const ManagementTable = ({
// 	title,
// 	data = [],
// 	columns = [],
// 	searchKeys = [],
// 	onAdd,
// 	onEdit,
// 	onDelete,
// 	onBulkDelete,
// 	rowLink,
// 	addButtonLabel = "Add",
// 	tabs = [],
// }) => {
// 	const navigate = useNavigate();
// 	const [search, setSearch] = useState("");
// 	const [selectedIds, setSelectedIds] = useState([]);

// 	/* ------------ Filtered list ------------- */
// 	const filtered = useMemo(() => {
// 		const term = search.toLowerCase();
// 		return data.filter((row) =>
// 			searchKeys.some((key) =>
// 				String(row[key] ?? "")
// 					.toLowerCase()
// 					.includes(term)
// 			)
// 		);
// 	}, [data, search, searchKeys]);

// 	/* ------------ Selection helpers ---------- */
// 	const toggleSelect = (id) => {
// 		setSelectedIds((prev) =>
// 			prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
// 		);
// 	};

// 	const toggleSelectAll = () => {
// 		setSelectedIds((prev) =>
// 			prev.length === filtered.length ? [] : filtered.map((r) => r.id)
// 		);
// 	};

// 	/* ------------ Delete helpers ------------- */
// 	const handleDelete = (id) => {
// 		if (window.confirm("Are you sure you want to delete this record?")) {
// 			onDelete?.(id);
// 			setSelectedIds((s) => s.filter((i) => i !== id));
// 		}
// 	};

// 	const handleBulkDelete = () => {
// 		if (
// 			selectedIds.length &&
// 			window.confirm(`Delete ${selectedIds.length} selected records?`)
// 		) {
// 			onBulkDelete?.(selectedIds);
// 			setSelectedIds([]);
// 		}
// 	};

// 	/* ------------ Render --------------------- */
// 	return (
// 		<div className="container-fluid py-3">
// 			{/* Header */}
// 			<div className="d-flex flex-column flex-md-row gap-2 justify-content-between align-items-md-center mb-3">
// 				<h4 className="mb-0">{title}</h4>
// 				<div className="d-flex gap-2">
// 					<input
// 						type="text"
// 						className="form-control"
// 						placeholder="Search…"
// 						style={{ maxWidth: 280 }}
// 						value={search}
// 						onChange={(e) => setSearch(e.target.value)}
// 					/>
// 					{onAdd && (
// 						<button
// 							className="btn btn-primary d-flex align-items-center"
// 							onClick={onAdd}
// 						>
// 							<FaPlus className="me-1" /> {addButtonLabel}
// 						</button>
// 					)}
// 				</div>
// 			</div>

// 			{/* Bulk toolbar */}
// 			{selectedIds.length > 0 && (
// 				<div className="alert alert-warning d-flex justify-content-between align-items-center">
// 					<span>{selectedIds.length} selected</span>
// 					<button
// 						className="btn btn-sm btn-outline-danger"
// 						onClick={handleBulkDelete}
// 					>
// 						Delete Selected
// 					</button>
// 				</div>
// 			)}

// 			{/* Tabs (optional) */}
// 			{tabs.length > 0 && (
// 				<ul className="nav nav-tabs mb-3" role="tablist">
// 					{[{ id: "list", label: title }, ...tabs].map(
// 						({ id, label }, idx) => (
// 							<li
// 								className="nav-item"
// 								role="presentation"
// 								key={id}
// 							>
// 								<button
// 									className={`nav-link ${
// 										idx === 0 ? "active" : ""
// 									}`}
// 									id={`${id}-tab`}
// 									data-bs-toggle="tab"
// 									data-bs-target={`#${id}`}
// 									type="button"
// 									role="tab"
// 								>
// 									{label}
// 								</button>
// 							</li>
// 						)
// 					)}
// 				</ul>
// 			)}

// 			<div className="tab-content">
// 				{/* Main table tab */}
// 				<div
// 					className="tab-pane fade show active"
// 					id="list"
// 					role="tabpanel"
// 				>
// 					<div className="table-responsive border rounded">
// 						<table className="table table-hover align-middle mb-0">
// 							<thead className="table-light text-nowrap">
// 								<tr>
// 									<th
// 										className="text-center"
// 										style={{ width: 32 }}
// 									>
// 										<input
// 											type="checkbox"
// 											className="form-check-input"
// 											checked={
// 												selectedIds.length > 0 &&
// 												selectedIds.length ===
// 													filtered.length
// 											}
// 											onChange={toggleSelectAll}
// 										/>
// 									</th>
// 									{columns.map((col) => (
// 										<th key={col.accessor}>{col.header}</th>
// 									))}
// 									<th className="text-center">Actions</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								{filtered.map((row) => (
// 									<tr
// 										key={row.id}
// 										style={{
// 											cursor: rowLink
// 												? "pointer"
// 												: "default",
// 										}}
// 										onClick={() => rowLink?.(row)}
// 									>
// 										<td
// 											className="text-center"
// 											onClick={(e) => e.stopPropagation()}
// 										>
// 											<input
// 												type="checkbox"
// 												className="form-check-input"
// 												checked={selectedIds.includes(
// 													row.id
// 												)}
// 												onChange={() =>
// 													toggleSelect(row.id)
// 												}
// 											/>
// 										</td>
// 										{columns.map((col) => (
// 											<td
// 												key={col.accessor}
// 												onClick={(e) =>
// 													e.stopPropagation()
// 												}
// 											>
// 												{col.render
// 													? col.render(row)
// 													: row[col.accessor]}
// 											</td>
// 										))}
// 										<td
// 											className="text-center"
// 											onClick={(e) => e.stopPropagation()}
// 										>
// 											<button
// 												className="btn btn-sm btn-link text-decoration-none me-2"
// 												title="Edit"
// 												onClick={() => onEdit?.(row)}
// 											>
// 												<FaEdit />
// 											</button>
// 											<button
// 												className="btn btn-sm btn-link text-danger text-decoration-none"
// 												title="Delete"
// 												onClick={() =>
// 													handleDelete(row.id)
// 												}
// 											>
// 												<FaTrash />
// 											</button>
// 										</td>
// 									</tr>
// 								))}
// 								{filtered.length === 0 && (
// 									<tr>
// 										<td
// 											colSpan={columns.length + 2}
// 											className="text-center py-5 text-muted"
// 										>
// 											No records found.
// 										</td>
// 									</tr>
// 								)}
// 							</tbody>
// 						</table>
// 					</div>
// 				</div>

// 				{/* Extra tabs */}
// 				{tabs.map(({ id, content }) => (
// 					<div
// 						key={id}
// 						className="tab-pane fade"
// 						id={id}
// 						role="tabpanel"
// 					>
// 						{content}
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// /**********************************************************************
//  * DeviceManagement Page – passes props to ManagementTable            *
//  *********************************************************************/

// // 🔰 Sample data – swap with API
// const initialDevices = [
// 	{
// 		id: 1,
// 		deviceId: "SN-1234",
// 		model: "Google Pixel 9 pro XL",
// 		organisation: "Parent Org A",
// 		subProgramme: "Programme Alpha",
// 		beneficiary: "Tiger Nixon",
// 		enrolled: "2024-02-10",
// 		lastSync: "2025-06-20 14:22",
// 		status: "Active",
// 	},
// 	{
// 		id: 2,
// 		deviceId: "SN-5678",
// 		model: "Nokia XR20",
// 		organisation: "Parent Org B",
// 		subProgramme: "Programme Beta",
// 		beneficiary: "Garrett Winters",
// 		enrolled: "2024-05-02",
// 		lastSync: "2025-06-24 09:10",
// 		status: "Inactive",
// 	},
// ];

// const DeviceManagement = () => {
// 	const navigate = useNavigate();
// 	const [devices, setDevices] = useState(initialDevices);

// 	/* --- Column config passed to ManagementTable --- */
// 	const deviceColumns = [
// 		{ header: "Device ID", accessor: "deviceId" },
// 		{ header: "Model", accessor: "model" },
// 		{ header: "Org.", accessor: "organisation" },
// 		{ header: "Sub‑Programme", accessor: "subProgramme" },
// 		{ header: "Beneficiary", accessor: "beneficiary" },
// 		{ header: "Date Enrolled", accessor: "enrolled" },
// 		{ header: "Last Sync", accessor: "lastSync" },
// 		{ header: "Status", accessor: "status" },
// 	];

// 	/* --- Handlers wired to generic actions --- */
// 	const addDevice = () => navigate("/devices/new");

// 	const editDevice = (device) => navigate(`/devices/${device.id}/edit`);

// 	const deleteDevice = (id) => {
// 		// TODO: Replace with API call
// 		setDevices((prev) => prev.filter((d) => d.id !== id));
// 	};

// 	const bulkDeleteDevices = (ids) => {
// 		// TODO: Replace with API call
// 		setDevices((prev) => prev.filter((d) => !ids.includes(d.id)));
// 	};

// 	/* --- Extra tabs for device page --- */
// 	const extraTabs = [
// 		{
// 			id: "stats",
// 			label: "Device Stats",
// 			content: (
// 				<div className="p-4 text-center text-muted">
// 					Charts coming soon…
// 				</div>
// 			),
// 		},
// 		{
// 			id: "history",
// 			label: "History",
// 			content: (
// 				<div className="p-4 text-center text-muted">
// 					Location & assignment history…
// 				</div>
// 			),
// 		},
// 	];

// 	return (
// 		<ManagementTable
// 			title="Devices"
// 			data={devices}
// 			columns={deviceColumns}
// 			searchKeys={["deviceId", "model", "beneficiary"]}
// 			addButtonLabel="Add Device"
// 			onAdd={addDevice}
// 			onEdit={editDevice}
// 			onDelete={deleteDevice}
// 			onBulkDelete={bulkDeleteDevices}
// 			rowLink={(d) => navigate(`/devices/${d.id}`)}
// 			tabs={extraTabs}
// 		/>
// 	);
// };

// export default DeviceManagement;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ManagementTable } from "../components/Table"; // adjust path as needed

/*********************************************************************
 * BeneficiariesManagement                                           *
 * ------------------------------------------------------------------*
 *   • Table columns: thumbnail/initials, name, email, district, etc *
 *   • Search by name/email/phone                                    *
 *   • Add, Edit, Delete, Bulk‑select                                *
 *   • Extra tab: Device Stats                                       *
 *********************************************************************/

const getInitials = (name = "") =>
	name
		.split(" ")
		.map((w) => w[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();

const BeneficiariesManagement = () => {
	const navigate = useNavigate();

	/* --------------------------------------------------------------- */
	const [beneficiaries, setBeneficiaries] = useState([
		{
			id: 1,
			photo: null,
			name: "Tiger Nixon",
			email: "tiger.nixon@example.com",
			phone: "+233555010101",
			district: "Accra Metro",
			organisation: "Parent Org A",
			subProgramme: "Programme Alpha",
			device: "SN‑1234 (Pixel 9)",
			enrolled: "2024-03-12",
		},
		{
			id: 2,
			photo: null,
			name: "Garrett Winters",
			email: "g.winters@example.com",
			phone: "+233555020202",
			district: "Kumasi",
			organisation: "Parent Org B",
			subProgramme: "Programme Beta",
			device: "SN‑5678 (Galaxy S25)",
			enrolled: "2024-05-07",
		},
	]);

	/* --------------------------------------------------------------- */
	const renderAvatar = (b) =>
		b.photo ? (
			<img
				src={b.photo}
				alt={b.name}
				className="rounded-circle object-fit-cover"
				width={32}
				height={32}
			/>
		) : (
			<div
				className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
				style={{ width: 32, height: 32, fontSize: 12 }}
			>
				{getInitials(b.name)}
			</div>
		);

	const columns = [
		{ header: "", accessor: "avatar", render: renderAvatar },
		{ header: "Name", accessor: "name" },
		{ header: "Email", accessor: "email" },
		{ header: "District", accessor: "district" },
		{ header: "Org.", accessor: "organisation" },
		{ header: "Sub‑Programme", accessor: "subProgramme" },
		{ header: "Device", accessor: "device" },
		{ header: "Enrolled", accessor: "enrolled" },
	];

	/* -------------------- handlers --------------------------------- */
	const addBeneficiary = () => navigate("/beneficiaries/new");
	const editBeneficiary = (b) => navigate(`/beneficiaries/${b.id}/edit`);
	const deleteBeneficiary = (id) =>
		setBeneficiaries((prev) => prev.filter((b) => b.id !== id));
	const bulkDelete = (ids) =>
		setBeneficiaries((prev) => prev.filter((b) => !ids.includes(b.id)));

	const extraTabs = [
		{
			id: "stats",
			label: "Device Stats",
			content: (
				<div className="p-4 text-muted">Device charts coming soon…</div>
			),
		},
	];

	return (
		<ManagementTable
			title="Beneficiaries"
			data={beneficiaries}
			columns={columns}
			searchKeys={["name", "email", "phone"]}
			addButtonLabel="Add Beneficiary"
			onAdd={addBeneficiary}
			onEdit={editBeneficiary}
			onDelete={deleteBeneficiary}
			onBulkDelete={bulkDelete}
			rowLink={(b) => navigate(`/beneficiaries/${b.id}`)}
			tabs={extraTabs}
		/>
	);
};

export default BeneficiariesManagement;
