import React, { useState, useMemo } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

/**********************************************************************
 * Generic ManagementTable component  – reusable, no demo code below  *
 *********************************************************************/

export const ManagementTable = ({
	title,
	data = [],
	columns = [],
	searchKeys = [],
	onAdd,
	onEdit,
	onDelete,
	onBulkDelete,
	rowLink,
	addButtonLabel = "Add",
	tabs = [],
}) => {
	const [search, setSearch] = useState("");
	const [selectedIds, setSelectedIds] = useState([]);

	/* ---------- filter ----------- */
	const filtered = useMemo(() => {
		const term = search.toLowerCase();
		return data.filter((row) =>
			searchKeys.some((k) =>
				String(row[k] ?? "")
					.toLowerCase()
					.includes(term)
			)
		);
	}, [data, search, searchKeys]);

	/* ---------- selection -------- */
	const toggleSelect = (id) =>
		setSelectedIds((s) =>
			s.includes(id) ? s.filter((i) => i !== id) : [...s, id]
		);

	const toggleSelectAll = () =>
		setSelectedIds((s) =>
			s.length === filtered.length ? [] : filtered.map((r) => r.id)
		);

	/* ---------- delete helpers --- */
	const handleDelete = (id) => {
		if (window.confirm("Delete this record?")) {
			onDelete?.(id);
			setSelectedIds((s) => s.filter((i) => i !== id));
		}
	};

	const handleBulkDelete = () => {
		if (
			selectedIds.length &&
			window.confirm(`Delete ${selectedIds.length} records?`)
		) {
			onBulkDelete?.(selectedIds);
			setSelectedIds([]);
		}
	};

	/* ---------- render ----------- */
	return (
		<div className="container-fluid py-3">
			{/* header */}
			<div className="d-flex flex-column flex-md-row gap-2 justify-content-between align-items-md-center mb-3">
				<h4 className="mb-0">{title}</h4>
				<div className="d-flex gap-2">
					<input
						type="text"
						className="form-control"
						placeholder="Search…"
						style={{ maxWidth: 280 }}
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					{onAdd && (
						<button
							className="btn btn-primary d-flex align-items-center"
							onClick={onAdd}
						>
							<FaPlus className="me-1" /> {addButtonLabel}
						</button>
					)}
				</div>
			</div>

			{/* bulk bar */}
			{selectedIds.length > 0 && (
				<div className="alert alert-warning d-flex justify-content-between align-items-center">
					<span>{selectedIds.length} selected</span>
					<button
						className="btn btn-sm btn-outline-danger"
						onClick={handleBulkDelete}
					>
						Delete Selected
					</button>
				</div>
			)}

			{/* tabs */}
			{tabs.length > 0 && (
				<ul className="nav nav-tabs mb-3" role="tablist">
					{[{ id: "list", label: title }, ...tabs].map(
						({ id, label }, idx) => (
							<li
								key={id}
								className="nav-item"
								role="presentation"
							>
								<button
									className={`nav-link ${
										idx === 0 ? "active" : ""
									}`}
									id={`${id}-tab`}
									data-bs-toggle="tab"
									data-bs-target={`#${id}`}
									type="button"
									role="tab"
								>
									{label}
								</button>
							</li>
						)
					)}
				</ul>
			)}

			<div className="tab-content">
				{/* table */}
				<div
					className="tab-pane fade show active"
					id="list"
					role="tabpanel"
				>
					<div className="table-responsive border rounded">
						<table className="table table-hover align-middle mb-0">
							<thead className="table-light text-nowrap">
								<tr>
									<th
										className="text-center"
										style={{ width: 32 }}
									>
										<input
											type="checkbox"
											className="form-check-input"
											checked={
												selectedIds.length > 0 &&
												selectedIds.length ===
													filtered.length
											}
											onChange={toggleSelectAll}
										/>
									</th>
									{columns.map((c) => (
										<th key={c.accessor}>{c.header}</th>
									))}
									<th className="text-center">Actions</th>
								</tr>
							</thead>
							<tbody>
								{filtered.map((row) => (
									<tr
										key={row.id}
										style={{
											cursor: rowLink
												? "pointer"
												: "default",
										}}
										onClick={() => rowLink?.(row)}
									>
										<td
											className="text-center"
											onClick={(e) => e.stopPropagation()}
										>
											<input
												type="checkbox"
												className="form-check-input"
												checked={selectedIds.includes(
													row.id
												)}
												onChange={() =>
													toggleSelect(row.id)
												}
											/>
										</td>
										{columns.map((c) => (
											<td
												key={c.accessor}
												onClick={(e) =>
													e.stopPropagation()
												}
											>
												{c.render
													? c.render(row)
													: row[c.accessor]}
											</td>
										))}
										<td
											className="text-center"
											onClick={(e) => e.stopPropagation()}
										>
											<button
												className="btn btn-sm btn-link me-2"
												title="Edit"
												onClick={() => onEdit?.(row)}
											>
												<FaEdit />
											</button>
											<button
												className="btn btn-sm btn-link text-danger"
												title="Delete"
												onClick={() =>
													handleDelete(row.id)
												}
											>
												<FaTrash />
											</button>
										</td>
									</tr>
								))}
								{filtered.length === 0 && (
									<tr>
										<td
											colSpan={columns.length + 2}
											className="text-center py-5 text-muted"
										>
											No records found.
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>

				{/* extra tabs */}
				{tabs.map(({ id, content }) => (
					<div
						key={id}
						className="tab-pane fade"
						id={id}
						role="tabpanel"
					>
						{content}
					</div>
				))}
			</div>
		</div>
	);
};
