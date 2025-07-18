// src/features/users/usersSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
	list: [], // all users for tables & lists
	current: null, // single user view/edit page
	status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
};

/* ────────────────────────────  Thunks  ──────────────────────────── */

// GET /users        – fetch all users
export const fetchUsers = createAsyncThunk(
	"users/fetchUsers",
	async (_, { rejectWithValue }) => {
		try {
			const res = await axios.get("/users");
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch users failed"
			);
		}
	}
);

// GET /users/:id     – fetch single user
export const fetchUser = createAsyncThunk(
	"users/fetchUser",
	async (id, { rejectWithValue }) => {
		try {
			const res = await axios.get(`/users/${id}`);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Fetch user failed"
			);
		}
	}
);

// POST /users/       – create a new user
export const createUser = createAsyncThunk(
	"users/createUser",
	async (newUser, { rejectWithValue }) => {
		try {
			const res = await axios.post("/users/", newUser);
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Create user failed"
			);
		}
	}
);

// PUT /users/:id – update existing user
export const updateUser = createAsyncThunk(
	"users/updateUser",
	async ({ id, data }, { rejectWithValue }) => {
		try {
			const res = await axios.put(`/users/${id}`, data); // ← removed trailing slash
			return res.data;
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Update user failed"
			);
		}
	}
);

// DELETE /users/:id  – delete user
export const deleteUser = createAsyncThunk(
	"users/deleteUser",
	async (id, { rejectWithValue }) => {
		try {
			await axios.delete(`/users/${id}`);
			return id; // return deleted id so reducer can remove
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Delete user failed"
			);
		}
	}
);

// PUT /users/:id/password – change password
export const changePassword = createAsyncThunk(
	"users/changePassword",
	async ({ id, password }, { rejectWithValue }) => {
		try {
			await axios.put(`/users/${id}/password`, { password });
			return { id };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Change password failed"
			);
		}
	}
);

// POST /users/:id/roles – assign role
export const assignRole = createAsyncThunk(
	"users/assignRole",
	async ({ id, role_id }, { rejectWithValue }) => {
		try {
			const res = await axios.post(`/users/${id}/roles`, { role_id });
			return res.data; // updated user
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Assign role failed"
			);
		}
	}
);

// DELETE /users/:id/roles/:role_id – remove role
export const removeRole = createAsyncThunk(
	"users/removeRole",
	async ({ id, role_id }, { rejectWithValue }) => {
		try {
			const res = await axios.delete(`/users/${id}/roles/${role_id}`);
			return res.data; // updated user
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Remove role failed"
			);
		}
	}
);

// PUT /users/:id/admin-password – admin resets a user's password
export const adminUpdatePassword = createAsyncThunk(
	"users/adminUpdatePassword",
	async ({ id, password }, { rejectWithValue }) => {
		try {
			await axios.put(`/users/${id}/admin-password`, { password });
			return { id };
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Admin password update failed"
			);
		}
	}
);

// POST /users/:id/image – upload user image (multipart/form-data)
export const uploadUserImage = createAsyncThunk(
	"users/uploadUserImage",
	async ({ id, file }, { rejectWithValue }) => {
		try {
			const formData = new FormData();
			formData.append("image", file);
			const res = await axios.post(`/users/${id}/image`, formData, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			return res.data; // updated user with new image
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Image upload failed"
			);
		}
	}
);

// POST /users/:id/image-base64 – upload user image (base64 string)
export const uploadUserImageBase64 = createAsyncThunk(
	"users/uploadUserImageBase64",
	async ({ id, base64 }, { rejectWithValue }) => {
		try {
			const res = await axios.post(`/users/${id}/image-base64`, {
				image_base64: base64,
			});
			return res.data; // updated user with new image
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Base64 image upload failed"
			);
		}
	}
);

/* ───────────────────────────  Slice  ─────────────────────────── */
const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			/* ── fetchUsers ───────────────────────── */
			.addCase(fetchUsers.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* ── fetchUser ────────────────────────── */
			.addCase(fetchUser.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.current = action.payload;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* ── createUser ───────────────────────── */
			.addCase(createUser.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(createUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list.push(action.payload);
			})
			.addCase(createUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* ── updateUser ───────────────────────── */
			.addCase(updateUser.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(u) => u.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* ── deleteUser ───────────────────────── */
			.addCase(deleteUser.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(deleteUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = state.list.filter((u) => u.id !== action.payload);
				if (state.current?.id === action.payload) state.current = null;
			})
			.addCase(deleteUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* ── changePassword ───────────────────── */
			.addCase(changePassword.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(changePassword.fulfilled, (state) => {
				state.status = "succeeded"; // nothing else to update client‑side
			})
			.addCase(changePassword.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* ── assignRole / removeRole ──────────── */
			.addCase(assignRole.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(assignRole.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(u) => u.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(assignRole.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			.addCase(removeRole.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(removeRole.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(u) => u.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(removeRole.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})
			/* ── adminUpdatePassword ─────────────── */
			.addCase(adminUpdatePassword.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(adminUpdatePassword.fulfilled, (state) => {
				state.status = "succeeded";
			})
			.addCase(adminUpdatePassword.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})

			/* ── uploadUserImage ─────────────────── */
			.addCase(uploadUserImage.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(uploadUserImage.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(u) => u.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(uploadUserImage.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})

			/* ── uploadUserImageBase64 ───────────── */
			.addCase(uploadUserImageBase64.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(uploadUserImageBase64.fulfilled, (state, action) => {
				state.status = "succeeded";
				const idx = state.list.findIndex(
					(u) => u.id === action.payload.id
				);
				if (idx !== -1) state.list[idx] = action.payload;
				if (state.current?.id === action.payload.id)
					state.current = action.payload;
			})
			.addCase(uploadUserImageBase64.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default usersSlice.reducer;