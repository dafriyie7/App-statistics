import React from "react";
import Dropdown from "./Dropdown";

/**
 * UsageCard
 * @param {string} title          – card heading
 * @param {string} totalLabel     – text under the big figure
 * @param {string|number} total   – main figure (e.g. 654)
 * @param {number} totalTrend     – % change for the main figure
 * @param {string} unit           – unit for per‑row value (e.g. "hrs", "sessions")
 * @param {Array} data            – rows: [{icon, name, category, value, trend}]
 */
const UsageCard = ({
	title = "App Usage",
	totalLabel = "Total usage this month",
	total = 0,
	totalTrend = 0,
	unit = "hrs",
	data = [],
}) => {
	const TrendBadge = ({ value }) => {
		const up = value >= 0;
		const cls = up ? "bg-success text-success" : "bg-danger text-danger";
		const icon = up ? "arrow_upward" : "arrow_downward";
		return (
			<span
				className={`badge rounded-pill bg-opacity-10 ${cls} d-flex align-items-center gap-1`}
			>
				{Math.abs(value).toFixed(1)}%
				<span className="material-icons-outlined fs-6">{icon}</span>
			</span>
		);
	};

	return (
		<div className="col-12 col-lg-6 col-xxl-4 d-flex">
			<div className="card w-100 rounded-4">
				<div className="card-body">
					{/* Header */}
					<div className="d-flex align-items-start justify-content-between mb-3">
						<h5 className="mb-0">{title}</h5>
						<Dropdown />
					</div>

					{/* Summary */}
					<div className="mb-4">
						<div className="d-flex align-items-center gap-3">
							<h3 className="mb-0">
								{total}&nbsp;{unit}
							</h3>
							<p className="mb-0 text-success d-flex align-items-center gap-1">
								{totalTrend >= 0 ? "+" : ""}
								{totalTrend}%
								<span className="material-icons-outlined fs-6">
									{totalTrend >= 0
										? "arrow_upward"
										: "arrow_downward"}
								</span>
							</p>
						</div>
						<p className="mb-0 font-13">{totalLabel}</p>
					</div>

					{/* Usage list */}
					<div className="table-responsive">
						<table className="table align-middle mb-0">
							<tbody>
								{data.map(
									({
										icon,
										name,
										category,
										value,
										trend,
									}) => (
										<tr key={name}>
											{/* icon + name */}
											<td className="border-0">
												<div className="d-flex align-items-center gap-3">
													<img
														src={icon}
														width="40"
														alt={name}
													/>
													<div>
														<h6 className="mb-0">
															{name}
														</h6>
														<small className="text-muted">
															{category}
														</small>
													</div>
												</div>
											</td>

											{/* value */}
											<td className="border-0">
												<h6 className="mb-0">
													{value}&nbsp;{unit}
												</h6>
											</td>

											{/* trend */}
											<td className="border-0">
												<TrendBadge value={trend} />
											</td>
										</tr>
									)
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UsageCard;
