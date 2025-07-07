// Drect.jsx
import React from "react";

const Drect = ({ data }) => {
	const order = ["daily", "weekly", "monthly"];

	return (
		<div className="d-flex flex-column flex-lg-row align-items-start justify-content-around border p-3 rounded-4 mt-3 gap-3">
			{order.map((period, idx) => {
				const block = data?.[period];
				if (!block) return null;

				const positive = !block.growth?.startsWith("-");
				const badgeCls = positive ? "text-success" : "text-danger";

				return (
					<React.Fragment key={period}>
						<div className="d-flex align-items-center gap-4">
							<div>
								<p className="mb-0 data-attributes">
									<span data-peity='{ "fill": ["#2196f3", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
										5/8
									</span>
								</p>
							</div>

							<div>
								<p className="mb-1 fs-6 fw-bold">
									{block.label}
								</p>
								<h2 className="mb-0">{block.value}</h2>
								<p className="mb-0">
									<span
										className={`${badgeCls} me-2 fw-medium`}
									>
										{block.growth}
									</span>
									<span>{block.subLabel}</span>
								</p>
							</div>
						</div>
						{idx !== order.length - 1 && <div className="vr"></div>}
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default Drect;
