// src/pages/LoginPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ThemeBtn from "../components/ThemeBtn";
import { login } from "../features/auth/authSlice";

const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// redux auth state
	const { status, error } = useSelector((s) => s.auth);

	// form state
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	/** ───────── Navigate away on success ───────── */
	useEffect(() => {
		if (status === "succeeded") navigate("/"); // or /dashboard
	}, [status, navigate]);

	/** ───────── Handle Submit ───────── */
	const handleLogin = (e) => {
		e.preventDefault();
		if (status !== "loading") dispatch(login({ username, password }));
	};

	return (
		<div className="auth-basic-wrapper d-flex align-items-center justify-content-center min-h-screen">
			<div className="container-fluid my-5 my-lg-0">
				<div className="row">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
						<div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
							<div className="card-body p-5">
								<h4 className="fw-bold">Get Started Now</h4>
								<p className="mb-0">
									Enter your credentials to log in
								</p>

								{/* error banner */}
								{error && (
									<div className="alert alert-danger mt-4 py-2">
										{error}
									</div>
								)}

								<form
									className="row g-3 my-4"
									onSubmit={handleLogin}
								>
									<div className="col-12">
										<label
											htmlFor="username"
											className="form-label"
										>
											User Name
										</label>
										<input
											id="username"
											type="text"
											className="form-control"
											placeholder="john_doe"
											value={username}
											onChange={(e) =>
												setUsername(e.target.value)
											}
											required
											
										/>
									</div>

									<div className="col-12">
										<label
											htmlFor="password"
											className="form-label"
										>
											Password
										</label>
										<div className="input-group">
											<input
												id="password"
												type={
													showPassword
														? "text"
														: "password"
												}
												className="form-control border-end-0"
												placeholder="••••••••"
												value={password}
												onChange={(e) =>
													setPassword(e.target.value)
												}
												required
											/>
											<button
												type="button"
												className="input-group-text bg-transparent"
												onClick={() =>
													setShowPassword(
														!showPassword
													)
												}
											>
												<i
													className={`bi ${
														showPassword
															? "bi-eye-fill"
															: "bi-eye-slash-fill"
													}`}
												/>
											</button>
										</div>
									</div>

									<div className="col-md-6 text-end">
										<a href="/reset-password">
											Forgot Password?
										</a>
									</div>

									<div className="col-12">
										<div className="d-grid">
											<button
												type="submit"
												className="btn btn-grd-primary"
												disabled={status === "loading"}
											>
												{status === "loading"
													? "Signing in…"
													: "Login"}
											</button>
										</div>
									</div>

									<div className="col-12 text-start">
										<p className="mb-0">
											Don’t have an account?{" "}
											<a href="/register">Sign up here</a>
										</p>
									</div>
								</form>
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
