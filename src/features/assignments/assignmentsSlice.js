// src/features/assignments/assignmentsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

/**
 * Assignment slice – tracks which beneficiary currently holds a device.
 * Endpoints:
 *   • GET    /assignments                  – list all (history) assignments
 *   • POST   /assignments                  – create assignment (device ➜ beneficiary)
 *   • GET    /assignments/active           – list active assignments only
 *   • POST   /assignments/:id/unassign     – mark assignment as returned
 */

const initialState = {
	list: [], // full assignment records (history)
	active: [], // currently active assignments
	status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
};

/* ────────────────────────────  Thunks  ──────────────────────────── */

// GET /assignments – full list (historical)
export const fetchAssignments = createAsyncThunk(
	"assignments/fetchAssignments",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get("/assignments");
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch assignments failed"
			);
		}
	}
);

// POST /assignments – create new assignment (expects { device_id, beneficiary_id, … })
export const createAssignment = createAsyncThunk(
	"assignments/createAssignment",
	async (payload, { rejectWithValue }) => {
		try {
			const res = await axios.post("/assignments", payload);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Create assignment failed"
			);
		}
	}
);

// GET /assignments/active – list active assignments
export const fetchActiveAssignments = createAsyncThunk(
	"assignments/fetchActive",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get("/assignments/active");
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch active assignments failed"
			);
		}
	}
);

// POST /assignments/:id/unassign – end assignment
export const unassignDevice = createAsyncThunk(
	"assignments/unassign",
	async (id, { rejectWithValue }) => {
		try {
			const res = await axios.post(`/assignments/${id}/unassign`);
			return res.data; // updated assignment
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Unassign device failed"
			);
		}
	}
);

/* ───────────────────────────  Slice  ─────────────────────────── */
const assignmentsSlice = createSlice({
	name: "assignments",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			/* fetch all */
			.addCase(fetchAssignments.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchAssignments.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = action.payload;
			})
			.addCase(fetchAssignments.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* create */
			.addCase(createAssignment.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(createAssignment.fulfilled, (state, action) => {
				state.status = "succeeded";
				// push into historical list and active assignments
				state.list.push(action.payload);
				state.active.push(action.payload);
			})
			.addCase(createAssignment.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* fetch active */
			.addCase(fetchActiveAssignments.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchActiveAssignments.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.active = action.payload;
			})
			.addCase(fetchActiveAssignments.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* unassign */
			.addCase(unassignDevice.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(unassignDevice.fulfilled, (state, action) => {
				state.status = "succeeded";
				// update record in list
				const idx = state.list.findIndex(
					(a) => a.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				// remove from active array
				state.active = state.active.filter(
					(a) => a.id !== action.payload.id
				);
			})
			.addCase(unassignDevice.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default assignmentsSlice.reducer;
