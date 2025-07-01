import React from "react";

const Drect = () => {
	return (
		<div className="d-flex flex-column flex-lg-row align-items-start justify-content-around border p-3 rounded-4 mt-3 gap-3">
			{/* Daily Usage */}
			<div className="d-flex align-items-center gap-4">
				<div>
					<p className="mb-0 data-attributes">
						<span data-peity='{ "fill": ["#2196f3", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
							5/8
						</span>
					</p>
				</div>
				<div>
					<p className="mb-1 fs-6 fw-bold">Daily Usage</p>
					<h2 className="mb-0">10.5 hrs</h2>
					<p className="mb-0">
						<span className="text-success me-2 fw-medium">
							+8.2%
						</span>
						<span>vs yesterday</span>
					</p>
				</div>
			</div>

			<div className="vr"></div>

			{/* Weekly Usage */}
			<div className="d-flex align-items-center gap-4">
				<div>
					<p className="mb-0 data-attributes">
						<span data-peity='{ "fill": ["#ffd200", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
							6/7
						</span>
					</p>
				</div>
				<div>
					<p className="mb-1 fs-6 fw-bold">Weekly Usage</p>
					<h2 className="mb-0">72 hrs</h2>
					<p className="mb-0">
						<span className="text-success me-2 fw-medium">
							+14.1%
						</span>
						<span>vs last week</span>
					</p>
				</div>
			</div>

			<div className="vr"></div>

			{/* Monthly Usage */}
			<div className="d-flex align-items-center gap-4">
				<div>
					<p className="mb-0 data-attributes">
						<span data-peity='{ "fill": ["#4caf50", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
							25/30
						</span>
					</p>
				</div>
				<div>
					<p className="mb-1 fs-6 fw-bold">Monthly Usage</p>
					<h2 className="mb-0">312 hrs</h2>
					<p className="mb-0">
						<span className="text-success me-2 fw-medium">
							+19.5%
						</span>
						<span>vs last month</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Drect;
