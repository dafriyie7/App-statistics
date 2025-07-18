// import React, { useState } from "react";
// import StatsCard from "./StatsCard";
// import FilterTabs from "./FilterTabs"; // Adjust path if needed

// const Row1 = () => {
// 	const [filter, setFilter] = useState("daily");
// 	const filters = ["daily", "weekly", "monthly"];

// 	return (
// 		<>
// 			{/* Filter at the top right */}
// 			<div className="d-flex justify-content-end mb-3">
// 				<FilterTabs
// 					options={filters}
// 					active={filter}
// 					onChange={setFilter}
// 				/>
// 			</div>

// 			<div className="row g-3">
// 				<div className="col-12 col-lg-4 col-xxl-4 d-flex">
// 					<div className="card rounded-4 w-100">
// 						<div className="card-body">
// 							<div>
// 								<div className="d-flex align-items-center gap-2 mb-2">
// 									<h5 className="mb-0">
// 										Facebook 250hrs | TikTok 106hrs
// 									</h5>
// 									<img
// 										src="assets/images/apps/party-popper.png"
// 										width="24"
// 										height="24"
// 										alt=""
// 									/>
// 								</div>
// 								<p className="mb-4">
// 									TikTok led usage of this month with the most
// 									active users
// 								</p>
// 								<div className="d-flex align-items-center justify-content-between">
// 									<div>
// 										<h3 className="mb-0 text-indigo">
// 											254 hours
// 										</h3>
// 										<p className="mb-3">
// 											58% from the last month
// 										</p>
// 										<button className="btn btn-grd btn-grd-primary rounded-5 border-0 px-4">
// 											View Details
// 										</button>
// 									</div>
// 									<img
// 										src="assets/images/apps/gift-box-3.png"
// 										width="100"
// 										alt=""
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<StatsCard filter={filter} />
// 			</div>
// 		</>
// 	);
// };

// export default Row1;


import React from "react";
import StatsCard from "./StatsCard";

const Row1 = () => {
	return (
		<div className="row g-3">
			<div className="col-12 col-lg-4 col-xxl-4 d-flex">
				<div className="card rounded-4 w-100">
					<div className="card-body">
						<div>
							<div className="d-flex align-items-center gap-2 mb-2">
								<h5 className="mb-0">
									Facebook 250hrs | TikTok 106hrs
								</h5>
								<img
									src="assets/images/apps/party-popper.png"
									width="24"
									height="24"
									alt=""
								/>
							</div>
							<p className="mb-4">
								TikTok led usage of this month with the most
								active users
							</p>
							<div className="d-flex align-items-center justify-content-between">
								<div>
									<h3 className="mb-0 text-indigo">
										254 hours
									</h3>
									<p className="mb-3">
										58% from the last month
									</p>
									<button className="btn btn-grd btn-grd-primary rounded-5 border-0 px-4">
										View Details
									</button>
								</div>
								<img
									src="assets/images/apps/gift-box-3.png"
									width="100"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<StatsCard />
		</div>
	);
};

export default Row1;
