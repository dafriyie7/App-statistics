import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";
import users from "../components/logins"
/** 🔑 TEMP – replace with fetch("/api/auth/login", …) later */

const LoginPage = () => {
	const navigate = useNavigate();

	// form state
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	// ui state
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	/** ───────── Handle Submit ───────── */
	const handleLogin = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		// mock auth
		const user = users.find(
			(u) => u.email === email.trim() && u.password === password
		);

		// simulate latency
		await new Promise((res) => setTimeout(res, 500));

		if (!user) {
			setError("Invalid email or password.");
			setLoading(false);
			return;
		}

		// persist “session” if Remember-me
		if (rememberMe) {
			localStorage.setItem("appTrackerUser", JSON.stringify(user));
		} else {
			sessionStorage.setItem("appTrackerUser", JSON.stringify(user));
		}

		// optional toast / snackbar → “Welcome back, …”
		navigate("/dashboard");
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
											htmlFor="email"
											className="form-label"
										>
											Email
										</label>
										<input
											id="email"
											type="email"
											className="form-control"
											placeholder="jhon@example.com"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
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

									<div className="col-md-6">
										<div className="form-check form-switch">
											<input
												id="remember"
												className="form-check-input"
												type="checkbox"
												checked={rememberMe}
												onChange={(e) =>
													setRememberMe(
														e.target.checked
													)
												}
											/>
											<label
												className="form-check-label"
												htmlFor="remember"
											>
												Remember Me
											</label>
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
												disabled={loading}
											>
												{loading
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

								{/* social buttons (unchanged) */}
								<div className="separator section-padding d-flex align-items-center gap-2">
									<div className="line flex-grow-1" />
									<p className="mb-0 fw-bold px-2 small">
										OR SIGN IN WITH
									</p>
									<div className="line flex-grow-1" />
								</div>

								<div className="d-flex gap-3 justify-content-center mt-4">
									{[
										"google",
										"facebook",
										"linkedin",
										"github",
									].map((p) => (
										<a
											key={p}
											href="#"
											className={`wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-${
												p === "google"
													? "danger"
													: p === "facebook"
													? "deep-blue"
													: p === "linkedin"
													? "info"
													: "royal"
											}`}
										>
											<i
												className={`bi bi-${p} fs-5 text-white`}
											/>
										</a>
									))}
								</div>
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
