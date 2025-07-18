// src/features/analytics/analyticsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

/**
 * Usage‑analytics slice – one file to cache every analytics endpoint.
 * All thunks follow the same convention: `fetchXyz(params)` returns
 * the raw JSON the API delivers and stores it under a keyed bucket in state.
 *
 * Periods supported: `daily`, `weekly`, `monthly`.
 */

const initialState = {
	status: "idle", // global request flag (last fired)
	error: null,
	// All analytics cached here:
	aggregate: {}, //   { [period]: data }
	appDailyUsage: {}, //   { [pkg|period]: data }
	beneficiaryUsage: {}, //   { [`${id}|${period}`]: data }
	deviceStats: {}, //   { [period]: data }
	deviceUsage: {}, //   { [`${id}|${period}`]: data }
	topDailyNetwork: {}, //   { [period]: data }
	topDailyScreenTime: {}, //   { [period]: data }
	topNetworkAll: {}, //   { [period]: data }
	topNetworkDevice: {}, //   { [`${id}|${period}`]: data }
	topOpenedAll: {}, //   { [period]: data }
	topOpenedDevice: {}, //   { [`${id}|${period}`]: data }
	topScreenTimeAll: {}, //   { [period]: data }
	topScreenTimeDevice: {}, //   { [`${id}|${period}`]: data }
};

/* ────────────────────────────  Helpers  ──────────────────────────── */
const key = (id, period) => (id != null ? `${id}|${period}` : period);

/* ────────────────────────────  Thunks  ──────────────────────────── */

export const fetchAggregateAnalytics = createAsyncThunk(
	"analytics/fetchAggregateAnalytics",
	async (period, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/analytics/aggregate/${period}`);
			return { period, data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ??
					"Fetch aggregate analytics failed"
			);
		}
	}
);

export const fetchAppDailyUsage = createAsyncThunk(
	"analytics/fetchAppDailyUsage",
	async ({ packageName, period }, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				`/analytics/app-daily-usage${packageName}/${period}`
			);
			return { k: `${packageName}|${period}`, data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch app daily usage failed"
			);
		}
	}
);

export const fetchBeneficiaryUsage = createAsyncThunk(
	"analytics/fetchBeneficiaryUsage",
	async ({ id, period }, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				`/analytics/beneficiry${id}/usage/${period}`
			);
			return { k: key(id, period), data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch beneficiary usage failed"
			);
		}
	}
);

export const fetchDeviceStats = createAsyncThunk(
	"analytics/fetchDeviceStats",
	async (period, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/analytics/device-stats/${period}`);
			return { period, data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch device stats failed"
			);
		}
	}
);

export const fetchDeviceUsage = createAsyncThunk(
	"analytics/fetchDeviceUsage",
	async ({ id, period }, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				`/analytics/device/${id}/usage/${period}`
			);
			return { k: key(id, period), data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch device usage failed"
			);
		}
	}
);

export const fetchTopDailyNetwork = createAsyncThunk(
	"analytics/fetchTopDailyNetwork",
	async (period, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				`/analytics/top-daily-network/${period}`
			);
			return { period, data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch top daily network failed"
			);
		}
	}
);

export const fetchTopDailyScreenTime = createAsyncThunk(
	"analytics/fetchTopDailyScreenTime",
	async (period, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				`/analytics/top-daily-screen-time/${period}`
			);
			return { period, data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ??
					"Fetch top daily screen time failed"
			);
		}
	}
);

export const fetchTopNetworkAll = createAsyncThunk(
	"analytics/fetchTopNetworkAll",
	async (period, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/analytics/top-network/all/${period}`);
			return { period, data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch top network all failed"
			);
		}
	}
);

export const fetchTopNetworkDevice = createAsyncThunk(
	"analytics/fetchTopNetworkDevice",
	async ({ id, period }, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				`/analytics/top-network/device/${id}${period}`
			);
			return { k: key(id, period), data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch top network device failed"
			);
		}
	}
);

export const fetchTopOpenedAll = createAsyncThunk(
	"analytics/fetchTopOpenedAll",
	async (period, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/analytics/top-opened/all/${period}`);
			return { period, data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch top opened all failed"
			);
		}
	}
);

export const fetchTopOpenedDevice = createAsyncThunk(
	"analytics/fetchTopOpenedDevice",
	async ({ id, period }, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				`/analytics/top-opened/device/${id}/${period}`
			);
			return { k: key(id, period), data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch top opened device failed"
			);
		}
	}
);

export const fetchTopScreenTimeAll = createAsyncThunk(
	"analytics/fetchTopScreenTimeAll",
	async (period, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				`/analytics/top-screen-time/all/${period}`
			);
			return { period, data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ??
					"Fetch top screen time all failed"
			);
		}
	}
);

export const fetchTopScreenTimeDevice = createAsyncThunk(
	"analytics/fetchTopScreenTimeDevice",
	async ({ id, period }, { rejectWithValue }) => {
		try {
			const res = await axios.get(
				`/analytics/top-screen-time/${id}/${period}`
			);
			return { k: key(id, period), data: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ??
					"Fetch top screen time device failed"
			);
		}
	}
);

/* ───────────────────────────  Slice  ─────────────────────────── */
const analyticsSlice = createSlice({
	name: "analytics",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		const addHandlers = (thunk, bucket) => {
			builder
				.addCase(thunk.pending, (state) => {
					state.status = "loading";
					state.error = null;
				})
				.addCase(thunk.fulfilled, (state, action) => {
					state.status = "succeeded";
					const { period, k, data } = action.payload;
					// decide key to store
					const storeKey = k ?? period;
					state[bucket][storeKey] = data;
				})
				.addCase(thunk.rejected, (state, action) => {
					state.status = "failed";
					state.error = action.payload;
				});
		};

		addHandlers(fetchAggregateAnalytics, "aggregate");
		addHandlers(fetchAppDailyUsage, "appDailyUsage");
		addHandlers(fetchBeneficiaryUsage, "beneficiaryUsage");
		addHandlers(fetchDeviceStats, "deviceStats");
		addHandlers(fetchDeviceUsage, "deviceUsage");
		addHandlers(fetchTopDailyNetwork, "topDailyNetwork");
		addHandlers(fetchTopDailyScreenTime, "topDailyScreenTime");
		addHandlers(fetchTopNetworkAll, "topNetworkAll");
		addHandlers(fetchTopNetworkDevice, "topNetworkDevice");
		addHandlers(fetchTopOpenedAll, "topOpenedAll");
		addHandlers(fetchTopOpenedDevice, "topOpenedDevice");
		addHandlers(fetchTopScreenTimeAll, "topScreenTimeAll");
		addHandlers(fetchTopScreenTimeDevice, "topScreenTimeDevice");
	},
});

export default analyticsSlice.reducer;
