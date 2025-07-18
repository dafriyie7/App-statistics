// /src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import usersReducer from "../features/users/usersSlice";
import rolesReducer from "../features/roles/rolesSlice"
import devicesReducer from "../features/devices/devicesSlice"
import assignmentsReducer from "../features/assignments/assignmentsSlice"
import analyticsReducer from "../features/analytics/analyticsSlice"
import beneficiariesReducer from "../features/beneficiaries/beneficiariesSlice"
import dashboardFilterReducer from "../features/dashboard/dashboardFilterSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		users: usersReducer,
		roles: rolesReducer,
		devices: devicesReducer,
		assignmentsReducer,
		analyticsReducer,
		beneficiaries: beneficiariesReducer,
		dashboardFilter: dashboardFilterReducer,
	},
});
