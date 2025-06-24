// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";
import logo from "../assets/images/logo1.png";

// 🔑  You can re-use these two exports anywhere in the app
const STORAGE_KEY = "loggedUser";
export const getCurrentUser = () =>
	JSON.parse(localStorage.getItem(STORAGE_KEY));

const AUTH_API = import.meta.env.VITE_AUTH_LOGIN_URL || "/api/auth/login";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("12345678");
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setError(""); // clear any previous error

		try {
			const res = await fetch(AUTH_API, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password, rememberMe }),
			});

			if (!res.ok) {
				// you could inspect res.status for more granularity
				throw new Error("Invalid credentials");
			}

			const data = await res.json();

			// 🌟 1. Build the user object you want to re-use everywhere
			const user = {
				id: data.user.id,
				name: data.user.name,
				email: data.user.email,
				token: data.token, // JWT or session token
			};

			// 🌟 2. Persist it (and optionally keep session shorter if !rememberMe)
			localStorage.setItem(STORAGE_KEY, JSON.stringify(user));

			// 🌟 3. Go to the dashboard
			navigate("/dashboard");
		} catch (err) {
			setError(err.message || "Something went wrong, please try again");
		}
	};

	return (
		<div className="auth-basic-wrapper d-flex align-items-center justify-content-center min-h-screen">
			<div className="container-fluid my-5 my-lg-0">
				<div className="row">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
						<div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
							<div className="card-body p-5">
								<img
									src={logo}
									className="mb-4"
									width="145"
									alt="logo"
								/>
								<h4 className="fw-bold">Get Started Now</h4>
								<p className="mb-0">
									Enter your credentials to login your account
								</p>

								{error && (
									<div
										className="alert alert-danger mt-4"
										role="alert"
									>
										{error}
									</div>
								)}

								<form
									className="row g-3 my-5"
									onSubmit={handleLogin}
								>
									{/* …(the rest of your form stays exactly the same)… */}
								</form>

								{/* …(social buttons + ThemeBtn)… */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<ThemeBtn />
		</div>
	);
};

export default LoginPage;
