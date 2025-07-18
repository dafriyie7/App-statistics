// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { jwtDecode } from "jwt-decode";

const initialState = {
	user: null,
	accessToken: null,
	hydrated: false,
	status: "idle",
	error: null,
};

/* ─────────────────────────── Helpers ─────────────────────────── */
const saveSession = ({ token, user }) => {
	localStorage.setItem("accessToken", token);
	if (user) localStorage.setItem("user", JSON.stringify(user));
};

const loadSession = () => {
	const token = localStorage.getItem("accessToken") || null;

	// safe‑parse user json
	let user = null;
	const raw = localStorage.getItem("user");
	if (raw && raw !== "undefined") {
		try {
			user = JSON.parse(raw);
		} catch (_) {
			console.warn("Corrupted user JSON in localStorage — clearing it");
			localStorage.removeItem("user");
		}
	}

	return { token, user };
};

/* ─────────────────────────── Thunks ─────────────────────────── */
export const login = createAsyncThunk(
	"auth/login",
	async ({ username, password }, { rejectWithValue }) => {
		try {
			const res = await axios.post("/auth/login", { username, password });
			return res.data; // { token, user }
		} catch (err) {
			return rejectWithValue(
				err.response?.data?.message ?? "Login failed"
			);
		}
	}
);

/* ─────────────────────────── Slice ─────────────────────────── */
const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout(state) {
			state.user = null;
			state.accessToken = null;
			state.hydrated = true;
			localStorage.removeItem("accessToken");
			localStorage.removeItem("user");
		},
		loadFromStorage(state) {
			const { token, user } = loadSession();

			if (token) {
				state.accessToken = token;

				// prefer user from LS; fallback to decoding token
				if (user) {
					state.user = user;
				} else {
					try {
						state.user = jwtDecode(token);
					} catch (_) {
						console.warn("Invalid JWT in storage, logging out");
						localStorage.removeItem("accessToken");
						state.accessToken = null;
					}
				}
			}

			state.hydrated = true;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload.user;
				state.accessToken = action.payload.token;
				state.hydrated = true;
				saveSession(action.payload);
			})
			.addCase(login.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export const { logout, loadFromStorage } = authSlice.actions;
export default authSlice.reducer;
