
// import Row1 from "../components/new/Row1";
// import Row2 from "../components/new/Row2";
// import Row3 from "../components/new/Row3";
// import Row4 from "../components/new/Row4";

// const Dashboard1j = () => {
// 	return (
// 		<>
// 			<div className="main-content">
// 				{/* start row 1 */}
// 				<Row1 />
// 				{/* <!--end row 1--> */}
// 				{/* start row 2 */}
// 				<Row2 />
// 				{/* <!--end row 2--> */}

// 				{/* start row 3 */}
// 				<Row3 />
// 				{/* <!--end row--> 3*/}

// 				{/* start row 4 */}
// 				<Row4 />
// 				{/* <!--end row 4--> */}
// 			</div>
// 		</>
// 	);
// };

// export default Dashboard1j;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDashboardFilter } from "../features/dashboard/dashboardFilterSlice";
import FilterTabs from "../components/new/FilterTabs";

import Row1 from "../components/new/Row1";
import Row2 from "../components/new/Row2";
import Row3 from "../components/new/Row3";
import Row4 from "../components/new/Row4";

const Dashboard1j = () => {
	const dispatch = useDispatch();
	const activeFilter = useSelector((state) => state.dashboardFilter.filter);
	const filterOptions = ["today", "yesterday", "week", "month"];

	return (
		<div className="main-content">
			{/* Global Filter Tabs */}
			<div className="d-flex justify-content-center mb-4">
				<FilterTabs
					options={filterOptions}
					active={activeFilter}
					onChange={(val) => dispatch(setDashboardFilter(val))}
				/>
			</div>

			{/* Rows */}
			<Row1 />
			<Row2 />
			<Row3 />
			<Row4 />
		</div>
	);
};

export default Dashboard1j;

