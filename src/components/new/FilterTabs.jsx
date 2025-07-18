// // src/components/FilterTabs.jsx
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setDashboardFilter } from "../../features/dashboard/dashboardFilterSlice";

// const tabs = ["today", "yesterday", "week", "month"];

// const FilterTabs = () => {
// 	const dispatch = useDispatch();
// 	const activeFilter = useSelector((state) => state.dashboardFilter.filter);

// 	return (
// 		<div className="btn-group mb-4">
// 			{tabs.map((tab) => (
// 				<button
// 					key={tab}
// 					className={`btn btn-outline-primary ${
// 						activeFilter === tab ? "active" : ""
// 					}`}
// 					onClick={() => dispatch(setDashboardFilter(tab))}
// 				>
// 					{tab.charAt(0).toUpperCase() + tab.slice(1)}
// 				</button>
// 			))}
// 		</div>
// 	);
// };

// export default FilterTabs;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDashboardFilter } from "../../features/dashboard/dashboardFilterSlice";

const tabs = ["today", "yesterday", "week", "month"];

const FilterTabs = () => {
	const dispatch = useDispatch();
	const activeFilter = useSelector((state) => state.dashboardFilter.filter);

	return (
		<ul className="nav nav-tabs justify-content-center mb-4">
			{tabs.map((tab) => (
				<li className="nav-item" key={tab}>
					<button
						type="button"
						className={`nav-link text-capitalize ${
							activeFilter === tab ? "active" : ""
						}`}
						onClick={() => dispatch(setDashboardFilter(tab))}
					>
						{tab}
					</button>
				</li>
			))}
		</ul>
	);
};

export default FilterTabs;
