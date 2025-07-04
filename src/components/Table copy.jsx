import React, { useState, useMemo } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

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
	/* ─────────────────────────── State */
	const [search, setSearch] = useState("");
	const [selectedIds, setSelectedIds] = useState([]);
	const [sort, setSort] = useState({ accessor: null, dir: null }); // dir: 'asc' | 'desc' | null

	/* ── filter → sort chain */
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

	const sorted = useMemo(() => {
		if (!sort.accessor || !sort.dir) return filtered;
		const dir = sort.dir === "asc" ? 1 : -1;
		return [...filtered].sort((a, b) => {
			const av = a[sort.accessor];
			const bv = b[sort.accessor];
			if (av === null || av === undefined) return 1;
			if (bv === null || bv === undefined) return -1;
			if (av === bv) return 0;
			return av > bv ? dir : -dir;
		});
	}, [filtered, sort]);

	/* ── select helpers */
	const toggleSelect = (id) =>
		setSelectedIds((s) =>
			s.includes(id) ? s.filter((i) => i !== id) : [...s, id]
		);

	const toggleSelectAll = () =>
		setSelectedIds((s) =>
			s.length === sorted.length ? [] : sorted.map((r) => r.id)
		);

	/* ── delete helpers */
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

	/* ── click header to sort */
	const handleSort = (accessor) => {
		setSort((prev) => {
			if (prev.accessor !== accessor) return { accessor, dir: "asc" };
			if (prev.dir === "asc") return { accessor, dir: "desc" };
			return { accessor: null, dir: null }; // third click removes sort
		});
	};

	/* ─────────────────────────── Render */
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

			{/* tabs (unchanged) */}
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
													sorted.length
											}
											onChange={toggleSelectAll}
										/>
									</th>

									{/* sortable headers */}
									{columns.map((c) => {
										const isSorted =
											sort.accessor === c.accessor;
										const arrow =
											isSorted && sort.dir
												? sort.dir === "asc"
													? " ▲"
													: " ▼"
												: "";
										return (
											<th
												key={c.accessor}
												style={{ cursor: "pointer" }}
												onClick={() =>
													handleSort(c.accessor)
												}
											>
												{c.header}
												{arrow}
											</th>
										);
									})}

									<th className="text-center">Actions</th>
								</tr>
							</thead>

							<tbody>
								{sorted.map((row) => (
									<tr
										key={row.id}
										style={{
											cursor: rowLink
												? "pointer"
												: "default",
										}}
										onClick={() => rowLink?.(row)}
									>
										{/* checkbox */}
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

										{/* data cells */}
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

										{/* actions */}
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

								{sorted.length === 0 && (
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
