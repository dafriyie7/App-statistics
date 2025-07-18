// // src/features/devices/devicesSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../api/axios";

// /**
//  * Device slice – handles lifecycle of physical devices in the system.
//  * Endpoints:
//  *   • GET    /devices                       – list all devices
//  *   • POST   /devices/register              – register a new device
//  *   • GET    /devices/:id                   – fetch single device
//  *   • PUT    /devices/:id                   – update device info
//  *   • DELETE /devices/:id                   – delete device
//  *   • GET    /devices/:id/assignments       – list beneficiary/user assignments
//  */

// const initialState = {
// 	list: [], // all devices
// 	current: null, // single device detail
// 	assignments: {}, // map: { [deviceId]: assignments[] }
// 	status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
// 	error: null,
// };

// /* ────────────────────────────  Thunks  ──────────────────────────── */

// // GET /devices
// export const fetchDevices = createAsyncThunk(
// 	"devices/fetchDevices",
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const res = await axios.get("/devices");
// 			return res.data;
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Fetch devices failed"
// 			);
// 		}
// 	}
// );

// // GET /devices/:id
// export const fetchDevice = createAsyncThunk(
// 	"devices/fetchDevice",
// 	async (id, { rejectWithValue }) => {
// 		try {
// 			const res = await axios.get(`/devices/${id}`);
// 			return res.data;
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Fetch device failed"
// 			);
// 		}
// 	}
// );

// // POST /devices/register – register new hardware (accepts form data/payload)
// export const registerDevice = createAsyncThunk(
// 	"devices/registerDevice",
// 	async (payload, { rejectWithValue }) => {
// 		try {
// 			const res = await axios.post("/devices/register", payload);
// 			return res.data;
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Register device failed"
// 			);
// 		}
// 	}
// );

// // PUT /devices/:id – update existing device metadata
// export const updateDevice = createAsyncThunk(
// 	"devices/updateDevice",
// 	async ({ id, data }, { rejectWithValue }) => {
// 		try {
// 			const res = await axios.put(`/devices/${id}`, data);
// 			return res.data;
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Update device failed"
// 			);
// 		}
// 	}
// );

// // DELETE /devices/:id – decommission/remove device
// export const deleteDevice = createAsyncThunk(
// 	"devices/deleteDevice",
// 	async (id, { rejectWithValue }) => {
// 		try {
// 			await axios.delete(`/devices/${id}`);
// 			return id;
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Delete device failed"
// 			);
// 		}
// 	}
// );

// // GET /devices/:id/assignments – who/what is using this device
// export const fetchDeviceAssignments = createAsyncThunk(
// 	"devices/fetchAssignments",
// 	async (id, { rejectWithValue }) => {
// 		try {
// 			const res = await axios.get(`/devices/${id}/assignments`);
// 			return { id, assignments: res.data };
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Fetch assignments failed"
// 			);
// 		}
// 	}
// );

// /* ───────────────────────────  Slice  ─────────────────────────── */
// const devicesSlice = createSlice({
// 	name: "devices",
// 	initialState,
// 	reducers: {},
// 	extraReducers: (builder) => {
// 		builder
// 			/* list */
// 			.addCase(fetchDevices.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(fetchDevices.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				state.list = action.payload;
// 			})
// 			.addCase(fetchDevices.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			})
// 			/* fetch single */
// 			.addCase(fetchDevice.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(fetchDevice.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				state.current = action.payload;
// 			})
// 			.addCase(fetchDevice.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			})
// 			/* register */
// 			.addCase(registerDevice.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(registerDevice.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				state.list.push(action.payload);
// 			})
// 			.addCase(registerDevice.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			})
// 			/* update */
// 			.addCase(updateDevice.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(updateDevice.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				const idx = state.list.findIndex(
// 					(d) => d.id === action.payload.id
// 				);
// 				if (idx !== -1) state.list[idx] = action.payload;
// 				if (state.current?.id === action.payload.id)
// 					state.current = action.payload;
// 			})
// 			.addCase(updateDevice.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			})
// 			/* delete */
// 			.addCase(deleteDevice.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(deleteDevice.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				state.list = state.list.filter((d) => d.id !== action.payload);
// 				if (state.current?.id === action.payload) state.current = null;
// 			})
// 			.addCase(deleteDevice.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			})
// 			/* assignments */
// 			.addCase(fetchDeviceAssignments.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(fetchDeviceAssignments.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				const { id, assignments } = action.payload;
// 				state.assignments[id] = assignments;
// 			})
// 			.addCase(fetchDeviceAssignments.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			});
// 	},
// });

// export default devicesSlice.reducer;

// src/features/devices/devicesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
	list: [],
	current: null,
	assignments: {},
	status: "idle",
	error: null,
};

// GET /devices
export const fetchDevices = createAsyncThunk(
	"devices/fetchDevices",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get("/devices");
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch devices failed"
			);
		}
	}
);

// GET /devices/:id
export const fetchDevice = createAsyncThunk(
	"devices/fetchDevice",
	async (id, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/devices/${id}`);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch device failed"
			);
		}
	}
);

// POST /devices/register
export const registerDevice = createAsyncThunk(
	"devices/registerDevice",
	async (payload, { rejectWithValue }) => {
		try {
			const res = await axios.post("/devices/register", payload);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Register device failed"
			);
		}
	}
);

// PUT /devices/:id
export const updateDevice = createAsyncThunk(
	"devices/updateDevice",
	async ({ id, data }, { rejectWithValue }) => {
		try {
			const res = await axios.put(`/devices/${id}`, data);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Update device failed"
			);
		}
	}
);

// DELETE /devices/:id
export const deleteDevice = createAsyncThunk(
	"devices/deleteDevice",
	async (id, { rejectWithValue }) => {
		try {
			await axios.delete(`/devices/${id}`);
			return id;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Delete device failed"
			);
		}
	}
);

// GET /devices/:id/assignments
export const fetchDeviceAssignments = createAsyncThunk(
	"devices/fetchAssignments",
	async (id, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/devices/${id}/assignments`);
			return { id, assignments: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch assignments failed"
			);
		}
	}
);

const devicesSlice = createSlice({
	name: "devices",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDevices.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchDevices.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = action.payload;
			})
			.addCase(fetchDevices.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(fetchDevice.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchDevice.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.current = action.payload.data; // ✅ FIXED: extract `.data`
			})
			.addCase(fetchDevice.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(registerDevice.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(registerDevice.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list.push(action.payload);
			})
			.addCase(registerDevice.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(updateDevice.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(updateDevice.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(d) => d.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(updateDevice.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(deleteDevice.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(deleteDevice.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = state.list.filter((d) => d.id !== action.payload);
				if (state.current?.id === action.payload) state.current = null;
			})
			.addCase(deleteDevice.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(fetchDeviceAssignments.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchDeviceAssignments.fulfilled, (state, action) => {
				state.status = "succeeded";
				const { id, assignments } = action.payload;
				state.assignments[id] = assignments;
			})
			.addCase(fetchDeviceAssignments.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default devicesSlice.reducer;
