// src/features/roles/rolesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
	list: [], // all roles
	current: null, // single role detail
	status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
};

export const fetchRoles = createAsyncThunk(
	"roles/fetchRoles",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get("/roles");
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch roles failed"
			);
		}
	}
);

export const fetchRole = createAsyncThunk(
	"roles/fetchRole",
	async (id, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/roles/${id}`);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch role failed"
			);
		}
	}
);

export const createRole = createAsyncThunk(
	"roles/createRole",
	async (payload, { rejectWithValue }) => {
		try {
			const res = await axios.post("/roles", payload);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Create role failed"
			);
		}
	}
);

export const updateRole = createAsyncThunk(
	"roles/updateRole",
	async ({ id, data }, { rejectWithValue }) => {
		try {
			const res = await axios.put(`/roles/${id}`, data);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Update role failed"
			);
		}
	}
);

export const deleteRole = createAsyncThunk(
	"roles/deleteRole",
	async (id, { rejectWithValue }) => {
		try {
			await axios.delete(`/roles/${id}`);
			return id;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Delete role failed"
			);
		}
	}
);

export const addPermissionToRole = createAsyncThunk(
	"roles/addPermission",
	async ({ id, permission_id }, { rejectWithValue }) => {
		try {
			const res = await axios.post(`/roles/${id}/permissions`, {
				permission_id,
			});
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Add permission failed"
			);
		}
	}
);

export const removePermissionFromRole = createAsyncThunk(
	"roles/removePermission",
	async ({ id, permission_id }, { rejectWithValue }) => {
		try {
			const res = await axios.delete(
				`/roles/${id}/permissions/${permission_id}`
			);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Remove permission failed"
			);
		}
	}
);

const rolesSlice = createSlice({
	name: "roles",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRoles.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchRoles.fulfilled, (state, action) => {
				state.status = "succeeded";
                state.list = action.payload.data; // ✅ Use the "data" array from API
                console.log(state.list)
			})
			.addCase(fetchRoles.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(fetchRole.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchRole.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.current = action.payload;
			})
			.addCase(fetchRole.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(createRole.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(createRole.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list.push(action.payload);
			})
			.addCase(createRole.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(updateRole.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(updateRole.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(r) => r.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(updateRole.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(deleteRole.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(deleteRole.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = state.list.filter((r) => r.id !== action.payload);
				if (state.current?.id === action.payload) state.current = null;
			})
			.addCase(deleteRole.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(addPermissionToRole.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(addPermissionToRole.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(r) => r.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(addPermissionToRole.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(removePermissionFromRole.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(removePermissionFromRole.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(r) => r.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(removePermissionFromRole.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default rolesSlice.reducer;

// // src/features/roles/rolesSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../api/axios";

// /**
//  * Redux Toolkit slice for RBAC Roles
//  * Endpoints:
//  *   • GET    /roles                     – list roles
//  *   • POST   /roles                     – create role
//  *   • GET    /roles/:id                 – get role by id
//  *   • PUT    /roles/:id                 – update role
//  *   • DELETE /roles/:id                 – delete role
//  *   • POST   /roles/:id/permissions     – add permission
//  *   • DELETE /roles/:id/permissions/:pid – remove permission
//  */

// const initialState = {
// 	list: [], // all roles
// 	current: null, // single role detail
// 	status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
// 	error: null,
// };

// /* ────────────────────────────  Thunks  ──────────────────────────── */

// // GET /roles – list
// export const fetchRoles = createAsyncThunk(
// 	"roles/fetchRoles",
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const res = await axios.get("/roles");
// 			return res.data;
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Fetch roles failed"
// 			);
// 		}
// 	}
// );

// // GET /roles/:id – single
// export const fetchRole = createAsyncThunk(
// 	"roles/fetchRole",
// 	async (id, { rejectWithValue }) => {
// 		try {
// 			const res = await axios.get(`/roles/${id}`);
// 			return res.data;
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Fetch role failed"
// 			);
// 		}
// 	}
// );

// // POST /roles – create
// export const createRole = createAsyncThunk(
// 	"roles/createRole",
// 	async (payload, { rejectWithValue }) => {
// 		try {
// 			const res = await axios.post("/roles", payload);
// 			return res.data;
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Create role failed"
// 			);
// 		}
// 	}
// );

// // PUT /roles/:id – update
// export const updateRole = createAsyncThunk(
// 	"roles/updateRole",
// 	async ({ id, data }, { rejectWithValue }) => {
// 		try {
// 			const res = await axios.put(`/roles/${id}`, data);
// 			return res.data;
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Update role failed"
// 			);
// 		}
// 	}
// );

// // DELETE /roles/:id – delete
// export const deleteRole = createAsyncThunk(
// 	"roles/deleteRole",
// 	async (id, { rejectWithValue }) => {
// 		try {
// 			await axios.delete(`/roles/${id}`);
// 			return id;
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Delete role failed"
// 			);
// 		}
// 	}
// );

// // POST /roles/:id/permissions – add permission
// export const addPermissionToRole = createAsyncThunk(
// 	"roles/addPermission",
// 	async ({ id, permission_id }, { rejectWithValue }) => {
// 		try {
// 			const res = await axios.post(`/roles/${id}/permissions`, {
// 				permission_id,
// 			});
// 			return res.data; // updated role
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Add permission failed"
// 			);
// 		}
// 	}
// );

// // DELETE /roles/:id/permissions/:permission_id – remove permission
// export const removePermissionFromRole = createAsyncThunk(
// 	"roles/removePermission",
// 	async ({ id, permission_id }, { rejectWithValue }) => {
// 		try {
// 			const res = await axios.delete(
// 				`/roles/${id}/permissions/${permission_id}`
// 			);
// 			return res.data; // updated role
// 		} catch (err) {
// 			return rejectWithValue(
// 				err.response?.data?.message ?? "Remove permission failed"
// 			);
// 		}
// 	}
// );

// /* ───────────────────────────  Slice  ─────────────────────────── */
// const rolesSlice = createSlice({
// 	name: "roles",
// 	initialState,
// 	reducers: {},
// 	extraReducers: (builder) => {
// 		builder
// 			/* list */
// 			.addCase(fetchRoles.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(fetchRoles.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				state.list = action.payload;
// 			})
// 			.addCase(fetchRoles.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			})
// 			/* fetch single */
// 			.addCase(fetchRole.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(fetchRole.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				state.current = action.payload;
// 			})
// 			.addCase(fetchRole.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			})
// 			/* create */
// 			.addCase(createRole.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(createRole.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				state.list.push(action.payload);
// 			})
// 			.addCase(createRole.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			})
// 			/* update */
// 			.addCase(updateRole.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(updateRole.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				const idx = state.list.findIndex(
// 					(r) => r.id === action.payload.id
// 				);
// 				if (idx !== -1) state.list[idx] = action.payload;
// 				if (state.current?.id === action.payload.id)
// 					state.current = action.payload;
// 			})
// 			.addCase(updateRole.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			})
// 			/* delete */
// 			.addCase(deleteRole.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(deleteRole.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				state.list = state.list.filter((r) => r.id !== action.payload);
// 				if (state.current?.id === action.payload) state.current = null;
// 			})
// 			.addCase(deleteRole.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			})
// 			/* add/remove permission */
// 			.addCase(addPermissionToRole.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(addPermissionToRole.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				const idx = state.list.findIndex(
// 					(r) => r.id === action.payload.id
// 				);
// 				if (idx !== -1) state.list[idx] = action.payload;
// 				if (state.current?.id === action.payload.id)
// 					state.current = action.payload;
// 			})
// 			.addCase(addPermissionToRole.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			})
// 			.addCase(removePermissionFromRole.pending, (state) => {
// 				state.status = "loading";
// 				state.error = null;
// 			})
// 			.addCase(removePermissionFromRole.fulfilled, (state, action) => {
// 				state.status = "succeeded";
// 				const idx = state.list.findIndex(
// 					(r) => r.id === action.payload.id
// 				);
// 				if (idx !== -1) state.list[idx] = action.payload;
// 				if (state.current?.id === action.payload.id)
// 					state.current = action.payload;
// 			})
// 			.addCase(removePermissionFromRole.rejected, (state, action) => {
// 				state.status = "failed";
// 				state.error = action.payload;
// 			});
// 	},
// });

// export default rolesSlice.reducer;
