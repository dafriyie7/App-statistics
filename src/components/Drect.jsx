import React from "react";

const Drect = () => {
	return (
		<div className="d-flex flex-column flex-lg-row align-items-start justify-content-around border p-3 rounded-4 mt-3 gap-3">
			<div className="d-flex align-items-center gap-4">
				<div className="">
					<p className="mb-0 data-attributes">
						<span data-peity='{ "fill": ["#2196f3", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
							5/7
						</span>
					</p>
				</div>
				<div className="">
					<p className="mb-1 fs-6 fw-bold">Monthly</p>
					<h2 className="mb-0">65,127</h2>
					<p className="mb-0">
						<span className="text-success me-2 fw-medium">
							16.5%
						</span>
						<span>55.21 USD</span>
					</p>
				</div>
			</div>
			<div className="vr"></div>
			<div className="d-flex align-items-center gap-4">
				<div className="">
					<p className="mb-0 data-attributes">
						<span data-peity='{ "fill": ["#ffd200", "rgb(255 255 255 / 12%)"], "innerRadius": 32, "radius": 40 }'>
							5/7
						</span>
					</p>
				</div>
				<div className="">
					<p className="mb-1 fs-6 fw-bold">Yearly</p>
					<h2 className="mb-0">984,246</h2>
					<p className="mb-0">
						<span className="text-success me-2 fw-medium">
							24.9%
						</span>
						<span>267.35 USD</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Drect;
