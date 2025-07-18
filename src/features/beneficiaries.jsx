// src/features/beneficiaries/beneficiariesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

/**
 * NOTE  ▸ All endpoints now target `/beneficiaries` instead of `/users`.
 *        Additional thunk `fetchBeneficiaryDevices` hits
 *        GET /beneficiaries/{id}/devices.
 */

const initialState = {
	list: [], // all beneficiaries
	current: null, // single beneficiary
	devices: {}, // map: { [beneficiaryId]: devices[] }
	status: "idle", // request status flag (shared)
	error: null,
};

/* ────────────────────────────  Thunks  ──────────────────────────── */

// GET /beneficiaries            – fetch collection
export const fetchBeneficiaries = createAsyncThunk(
	"beneficiaries/fetchBeneficiaries",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get("/beneficiaries");
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch beneficiaries failed"
			);
		}
	}
);

// GET /beneficiaries/:id        – fetch single
export const fetchBeneficiary = createAsyncThunk(
	"beneficiaries/fetchBeneficiary",
	async (id, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/beneficiaries/${id}`);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch beneficiary failed"
			);
		}
	}
);

// POST /beneficiaries           – create
export const createBeneficiary = createAsyncThunk(
	"beneficiaries/createBeneficiary",
	async (payload, { rejectWithValue }) => {
		try {
			const res = await axios.post("/beneficiaries", payload);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Create beneficiary failed"
			);
		}
	}
);

// PUT /beneficiaries/:id        – update
export const updateBeneficiary = createAsyncThunk(
	"beneficiaries/updateBeneficiary",
	async ({ id, data }, { rejectWithValue }) => {
		try {
			const res = await axios.put(`/beneficiaries/${id}`, data);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Update beneficiary failed"
			);
		}
	}
);

// DELETE /beneficiaries/:id     – delete
export const deleteBeneficiary = createAsyncThunk(
	"beneficiaries/deleteBeneficiary",
	async (id, { rejectWithValue }) => {
		try {
			await axios.delete(`/beneficiaries/${id}`);
			return id;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Delete beneficiary failed"
			);
		}
	}
);

// GET /beneficiaries/:id/password – change password
export const changeBeneficiaryPassword = createAsyncThunk(
	"beneficiaries/changePassword",
	async ({ id, password }, { rejectWithValue }) => {
		try {
			await axios.put(`/beneficiaries/${id}/password`, { password });
			return { id };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Change password failed"
			);
		}
	}
);

// POST /beneficiaries/:id/roles – assign role
export const assignBeneficiaryRole = createAsyncThunk(
	"beneficiaries/assignRole",
	async ({ id, role_id }, { rejectWithValue }) => {
		try {
			const res = await axios.post(`/beneficiaries/${id}/roles`, {
				role_id,
			});
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Assign role failed"
			);
		}
	}
);

// DELETE /beneficiaries/:id/roles/:role_id – remove role
export const removeBeneficiaryRole = createAsyncThunk(
	"beneficiaries/removeRole",
	async ({ id, role_id }, { rejectWithValue }) => {
		try {
			const res = await axios.delete(
				`/beneficiaries/${id}/roles/${role_id}`
			);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Remove role failed"
			);
		}
	}
);

// GET /beneficiaries/:id/devices – list devices assigned to beneficiary
export const fetchBeneficiaryDevices = createAsyncThunk(
	"beneficiaries/fetchDevices",
	async (id, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/beneficiaries/${id}/devices`);
			return { id, devices: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch devices failed"
			);
		}
	}
);

/* ───────────────────────────  Slice  ─────────────────────────── */
const beneficiariesSlice = createSlice({
	name: "beneficiaries",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		/* fetch collection */
		builder
			.addCase(fetchBeneficiaries.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchBeneficiaries.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = action.payload;
			})
			.addCase(fetchBeneficiaries.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* fetch single */
			.addCase(fetchBeneficiary.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchBeneficiary.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.current = action.payload;
			})
			.addCase(fetchBeneficiary.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* create */
			.addCase(createBeneficiary.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(createBeneficiary.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list.push(action.payload);
			})
			.addCase(createBeneficiary.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* update */
			.addCase(updateBeneficiary.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(updateBeneficiary.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(b) => b.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(updateBeneficiary.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* delete */
			.addCase(deleteBeneficiary.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(deleteBeneficiary.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = state.list.filter((b) => b.id !== action.payload);
				if (state.current?.id === action.payload) state.current = null;
			})
			.addCase(deleteBeneficiary.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* change password */
			.addCase(changeBeneficiaryPassword.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(changeBeneficiaryPassword.fulfilled, (state) => {
				state.status = "succeeded"; // no state change
			})
			.addCase(changeBeneficiaryPassword.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* assign/remove role */
			.addCase(assignBeneficiaryRole.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(assignBeneficiaryRole.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(b) => b.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(assignBeneficiaryRole.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(removeBeneficiaryRole.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(removeBeneficiaryRole.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(b) => b.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(removeBeneficiaryRole.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* device list */
			.addCase(fetchBeneficiaryDevices.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchBeneficiaryDevices.fulfilled, (state, action) => {
				state.status = "succeeded";
				const { id, devices } = action.payload;
				state.devices[id] = devices;
			})
			.addCase(fetchBeneficiaryDevices.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default beneficiariesSlice.reducer;
