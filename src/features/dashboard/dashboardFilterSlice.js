// src/features/dashboard/dashboardFilterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filter: "week", // default filter
};

const dashboardFilterSlice = createSlice({
	name: "dashboardFilter",
	initialState,
	reducers: {
		setDashboardFilter: (state, action) => {
			state.filter = action.payload;
		},
	},
});

export const { setDashboardFilter } = dashboardFilterSlice.actions;
export default dashboardFilterSlice.reducer;