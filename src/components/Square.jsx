// components/Square.jsx
import React from "react";
import Dropdown from "./Dropdown";

/**
 * Square card – purely presentational
 * @prop {string}  title
 * @prop {string}  totalLabel
 * @prop {number}  total
 * @prop {number}  totalTrend
 * @prop {string}  unit
 * @prop {Array}   data  [{icon,name,category,value,trend}]
 */
const Square = ({
	title = "",
	totalLabel = "",
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
								{total} {unit}
							</h3>
							<p
								className={`mb-0 ${
									totalTrend >= 0
										? "text-success"
										: "text-danger"
								} d-flex align-items-center gap-1`}
							>
								{totalTrend >= 0 ? "+" : ""}
								{totalTrend.toFixed(1)}%
								<span className="material-icons-outlined fs-6">
									{totalTrend >= 0
										? "arrow_upward"
										: "arrow_downward"}
								</span>
							</p>
						</div>
						<p className="mb-0 font-13">{totalLabel}</p>
					</div>

					{/* Scrollable table (max ≈ 5 rows) */}
					<div
						className="table-responsive"
						style={{ maxHeight: "260px", overflowY: "auto" }}
					>
						<table className="table align-middle mb-0">
							<tbody>
								{data.map(
									(
										{ icon, name, category, value, trend },
										i
									) => (
										<tr key={i}>
											<td className="border-0">
												<div className="d-flex align-items-center gap-3">
													{typeof icon ===
													"string" ? (
														<img
															src={icon}
															width="32"
															alt={name}
														/>
													) : (
														/* icon is a react‑icon component */
														React.createElement(
															icon,
															{ size: 28 }
														)
													)}
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
											<td className="border-0">
												<h6 className="mb-0">
													{value} {unit}
												</h6>
											</td>
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

export default Square;
