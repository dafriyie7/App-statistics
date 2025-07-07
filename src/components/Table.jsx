import React, { useMemo, useState } from "react";
import {
	FaEdit,
	FaTrash,
	FaPlus,
	FaSort,
	FaSortUp,
	FaSortDown,
} from "react-icons/fa";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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
	/**
	 * Set to false to remove the Edit/Delete column and its header.
	 * Useful for read‑only screens such as the Apps‑usage table.
	 */
	showActions = true,
}) => {
	/* ──────────────────────────── state */
	const [search, setSearch] = useState("");
	const [pageSize, setPageSize] = useState(10);
	const [page, setPage] = useState(1);
	const [selectedIds, setSelectedIds] = useState([]);
	const [sort, setSort] = useState({ accessor: null, dir: null });

	/* ──────────────────────────── derived */
	const filtered = useMemo(() => {
		const term = search.trim().toLowerCase();
		return data.filter((row) =>
			searchKeys.some((k) =>
				String(row[k] ?? "")
					.toLowerCase()
					.includes(term)
			)
		);
	}, [data, search, searchKeys]);

	const sorted = useMemo(() => {
		if (!sort.accessor) return filtered;
		const dir = sort.dir === "asc" ? 1 : -1;
		return [...filtered].sort((a, b) => {
			const av = a[sort.accessor];
			const bv = b[sort.accessor];
			if (av === bv) return 0;
			if (av === undefined || av === null) return 1;
			if (bv === undefined || bv === null) return -1;
			return av > bv ? dir : -dir;
		});
	}, [filtered, sort]);

	const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
	const currentPage = Math.min(page, pageCount);
	const paged = useMemo(
		() =>
			sorted.slice(
				(currentPage - 1) * pageSize,
				(currentPage - 1) * pageSize + pageSize
			),
		[sorted, currentPage, pageSize]
	);

	/* ──────────────────────────── helpers */
	const toggleSelect = (id) =>
		setSelectedIds((s) =>
			s.includes(id) ? s.filter((i) => i !== id) : [...s, id]
		);

	const toggleSelectAll = () =>
		setSelectedIds((s) =>
			s.length === paged.length ? [] : paged.map((r) => r.id)
		);

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

	const handleSort = (accessor) => {
		setSort((prev) => {
			if (prev.accessor !== accessor) return { accessor, dir: "asc" };
			if (prev.dir === "asc") return { accessor, dir: "desc" };
			return { accessor: null, dir: null };
		});
	};

	/* ──────────────────────────── export helpers  */
	const buildExportRows = () => [
		columns.map((c) => c.header),
		...sorted.map((row) =>
			columns.map((c) => {
				const cell = row[c.accessor];
				return typeof cell === "string" || typeof cell === "number"
					? cell
					: "";
			})
		),
	];

	const exportCopy = async () => {
		try {
			await navigator.clipboard.writeText(
				buildExportRows()
					.map((r) => r.join("\t"))
					.join("\n")
			);
			alert("Copied to clipboard");
		} catch (e) {
			alert("Copy failed: " + e.message);
		}
	};

	const exportExcel = () => {
		const wb = XLSX.utils.book_new();
		const ws = XLSX.utils.aoa_to_sheet(buildExportRows());
		XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
		XLSX.writeFile(wb, `${title || "table"}.xlsx`);
	};

	const exportPdf = () => {
		const doc = new jsPDF({
			orientation: "landscape",
			unit: "pt",
			format: "a4",
		});
		doc.text(title || "Table", 40, 30);
		autoTable(doc, {
			head: [columns.map((c) => c.header)],
			body: sorted.map((r) =>
				columns.map((c) => {
					const cell = r[c.accessor];
					return typeof cell === "string" || typeof cell === "number"
						? cell
						: "";
				})
			),
			styles: { fontSize: 8 },
			headStyles: { fillColor: [40, 40, 40] },
			margin: { left: 40, right: 40, top: 45 },
		});
		doc.save(`${title || "table"}.pdf`);
	};

	const exportPrint = () => {
		const html = document.getElementById(
			`${title}-table-wrapper`
		).innerHTML;
		const w = window.open("", "print");
		w.document.write(
			`<!doctype html><html><head><title>${title}</title>` +
				'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"></head>' +
				`<body class="p-3">${html}</body></html>`
		);
		w.document.close();
		w.focus();
		w.print();
		w.close();
	};

	/* ──────────────────────────── ui building blocks */
	const renderHeaderBtn = (label, onClick) => (
		<button
			className="btn btn-sm btn-outline-secondary bg-opacity-25 border-0"
			onClick={onClick}
		>
			{label}
		</button>
	);

	const renderTable = () => (
		<div className="table-responsive border rounded">
			<table className="table table-dark table-striped table-hover align-middle mb-0 text-nowrap">
				<thead>
					<tr>
						<th className="text-center" style={{ width: 32 }}>
							<input
								type="checkbox"
								className="form-check-input"
								checked={
									selectedIds.length > 0 &&
									selectedIds.length === paged.length
								}
								onChange={toggleSelectAll}
							/>
						</th>
						{columns.map((c) => {
							const isSorted = sort.accessor === c.accessor;
							const Icon = !isSorted
								? FaSort
								: sort.dir === "asc"
								? FaSortUp
								: FaSortDown;
							return (
								<th
									key={c.accessor}
									role="button"
									className="user-select-none"
									onClick={() => handleSort(c.accessor)}
								>
									<div className="d-flex align-items-center gap-1">
										{c.header}
										<Icon size={12} />
									</div>
								</th>
							);
						})}
						{showActions && (
							<th className="text-center">Actions</th>
						)}
					</tr>
				</thead>
				<tbody>
					{paged.map((row) => (
						<tr
							key={row.id}
							style={{ cursor: rowLink ? "pointer" : "default" }}
							onClick={() => rowLink?.(row)}
						>
							{/* selection checkbox – keep stopPropagation so row click isn’t triggered */}
							<td
								className="text-center"
								onClick={(e) => e.stopPropagation()}
							>
								<input
									type="checkbox"
									className="form-check-input"
									checked={selectedIds.includes(row.id)}
									onChange={() => toggleSelect(row.id)}
								/>
							</td>

							{/* data cells – NO stopPropagation so the row click works */}
							{columns.map((c) => (
								<td key={c.accessor}>
									{c.render ? c.render(row) : row[c.accessor]}
								</td>
							))}

							{showActions && (
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
										onClick={() => handleDelete(row.id)}
									>
										<FaTrash />
									</button>
								</td>
							)}
						</tr>
					))}

					{paged.length === 0 && (
						<tr>
							<td
								colSpan={columns.length + (showActions ? 2 : 1)}
								className="text-center py-5 text-muted"
							>
								No records found.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);

	const renderPagination = () => (
		<nav className="mt-3 d-flex justify-content-end">
			<ul className="pagination pagination-sm mb-0">
				<li
					className={`page-item ${
						currentPage === 1 ? "disabled" : ""
					}`}
				>
					<button
						className="page-link"
						onClick={() => setPage((p) => Math.max(1, p - 1))}
					>
						«
					</button>
				</li>
				{Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
					<li
						key={p}
						className={`page-item ${
							currentPage === p ? "active" : ""
						}`}
					>
						<button
							className="page-link"
							onClick={() => setPage(p)}
						>
							{p}
						</button>
					</li>
				))}
				<li
					className={`page-item ${
						currentPage === pageCount ? "disabled" : ""
					}`}
				>
					<button
						className="page-link"
						onClick={() =>
							setPage((p) => Math.min(pageCount, p + 1))
						}
					>
						»
					</button>
				</li>
			</ul>
		</nav>
	);

	/* ──────────────────────────── render */
	const hasTabs = tabs.length > 0;

	return (
		<div className="container-fluid py-3" id={`${title}-table-wrapper`}>
			{/* ---------- nav tabs (optional) ---------- */}
			{hasTabs && (
				<ul className="nav nav-tabs mb-3" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className="nav-link active"
							id="main-tab"
							data-bs-toggle="tab"
							data-bs-target="#main"
							type="button"
							role="tab"
						>
							{title}
						</button>
					</li>
					{tabs.map(({ id, label }) => (
						<li key={id} className="nav-item" role="presentation">
							<button
								className="nav-link"
								id={`${id}-tab`}
								data-bs-toggle="tab"
								data-bs-target={`#${id}`}
								type="button"
								role="tab"
							>
								{label}
							</button>
						</li>
					))}
				</ul>
			)}

			<div className={hasTabs ? "tab-content" : ""}>
				{/* -------- main list / table -------- */}
				<div
					className={hasTabs ? "tab-pane fade show active" : ""}
					id={hasTabs ? "main" : undefined}
					role="tabpanel"
				>
					{/* controls */}
					<div className="d-flex flex-column flex-lg-row justify-content-between mb-2 gap-2">
						{/* export buttons */}
						<div className="d-flex flex-wrap gap-2">
							{renderHeaderBtn("Copy", exportCopy)}
							{renderHeaderBtn("Excel", exportExcel)}
							{renderHeaderBtn("PDF", exportPdf)}
							{renderHeaderBtn("Print", exportPrint)}
						</div>

						{/* page size */}
						<div className="d-flex align-items-center gap-2">
							<span className="text-white-50">Show</span>
							<select
								className="form-select form-select-sm w-auto"
								value={pageSize}
								onChange={(e) => {
									setPageSize(Number(e.target.value));
									setPage(1);
								}}
							>
								{[10, 25, 50, 100].map((n) => (
									<option key={n}>{n}</option>
								))}
							</select>
							<span className="text-white-50">entries</span>
						</div>

						{/* add + search */}
						<div className="d-flex gap-2 ms-lg-auto">
							{onAdd && (
								<button
									className="btn btn-primary d-flex align-items-center"
									onClick={onAdd}
								>
									<FaPlus className="me-1" /> {addButtonLabel}
								</button>
							)}
							<input
								type="text"
								className="form-control form-control-sm"
								placeholder="Search"
								style={{ maxWidth: 230 }}
								value={search}
								onChange={(e) => {
									setSearch(e.target.value);
									setPage(1);
								}}
							/>
						</div>
					</div>

					{/* bulk bar */}
					{selectedIds.length > 0 && (
						<div className="alert alert-warning py-2 d-flex justify-content-between align-items-center">
							<span>{selectedIds.length} selected</span>
							<button
								className="btn btn-sm btn-outline-danger"
								onClick={handleBulkDelete}
							>
								Delete Selected
							</button>
						</div>
					)}

					{/* actual table */}
					{renderTable()}

					{/* pagination + footer */}
					<div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mt-2">
						<span className="text-white-50 mb-2 mb-lg-0">
							Showing{" "}
							{sorted.length === 0
								? 0
								: (currentPage - 1) * pageSize + 1}{" "}
							to {Math.min(currentPage * pageSize, sorted.length)}{" "}
							of {sorted.length} entries
						</span>
						{renderPagination()}
					</div>
				</div>

				{/* -------- extra tabs -------- */}
				{tabs.map(({ id, content }) => (
					<div
						key={id}
						className="tab-pane fade"
						id={id}
						role="tabpanel"
					>
						<div className="p-3">{content}</div>
					</div>
				))}
			</div>
		</div>
	);
};
