import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
	list: [], // all beneficiaries
	entities: {}, // ✅ new: map of { [id]: beneficiary }
	current: null,
	devices: {},
	status: "idle",
	error: null,
};

/* ────────────────────────────  Thunks  ──────────────────────────── */

export const fetchBeneficiaries = createAsyncThunk(
	"beneficiaries/fetchAll",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get("/beneficiaries");
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Failed to fetch beneficiaries"
			);
		}
	}
);

export const fetchBeneficiary = createAsyncThunk(
	"beneficiaries/fetchOne",
	async (id, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/beneficiaries/${id}`);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Failed to fetch beneficiary"
			);
		}
	}
);

export const createBeneficiary = createAsyncThunk(
	"beneficiaries/create",
	async (payload, { rejectWithValue }) => {
		try {
			const res = await axios.post("/beneficiaries", payload);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Failed to create beneficiary"
			);
		}
	}
);

export const updateBeneficiary = createAsyncThunk(
	"beneficiaries/update",
	async ({ id, data }, { rejectWithValue }) => {
		try {
			const res = await axios.put(`/beneficiaries/${id}`, data);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Failed to update beneficiary"
			);
		}
	}
);

export const deleteBeneficiary = createAsyncThunk(
	"beneficiaries/delete",
	async (id, { rejectWithValue }) => {
		try {
			await axios.delete(`/beneficiaries/${id}`);
			return id;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Failed to delete beneficiary"
			);
		}
	}
);

export const fetchBeneficiaryDevices = createAsyncThunk(
	"beneficiaries/fetchDevices",
	async (id, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/beneficiaries/${id}/devices`);
			return { id, devices: res.data };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ??
					"Failed to fetch beneficiary devices"
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
		builder
			.addCase(fetchBeneficiaries.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchBeneficiaries.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = action.payload;
				state.entities = {}; // ✅ rebuild map
				action.payload.forEach((b) => {
					state.entities[b.id] = b;
				});
			})
			.addCase(fetchBeneficiaries.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})

			.addCase(fetchBeneficiary.fulfilled, (state, action) => {
				state.current = action.payload;
				state.entities[action.payload.id] = action.payload; // ✅ update map
			})

			.addCase(createBeneficiary.fulfilled, (state, action) => {
				state.list.push(action.payload);
				state.entities[action.payload.id] = action.payload; // ✅ add to map
			})

			.addCase(updateBeneficiary.fulfilled, (state, action) => {
				const idx = state.list.findIndex(
					(b) => b.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
				state.entities[action.payload.id] = action.payload; // ✅ update map
			})

			.addCase(deleteBeneficiary.fulfilled, (state, action) => {
				state.list = state.list.filter((b) => b.id !== action.payload);
				if (state.current?.id === action.payload) state.current = null;
				delete state.entities[action.payload]; // ✅ remove from map
			})

			.addCase(fetchBeneficiaryDevices.fulfilled, (state, action) => {
				const { id, devices } = action.payload;
				state.devices[id] = devices;
			});
	},
});

export default beneficiariesSlice.reducer;
