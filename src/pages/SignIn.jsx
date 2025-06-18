// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// // Dummy user data (replace with real auth logic)
// const users = [{ email: "daniel@gmail.com", password: "daniel" }];

// const SignInPage = () => {
// 	const [formData, setFormData] = useState({
// 		email: "",
// 		password: "",
// 	});
// 	const [showPassword, setShowPassword] = useState(false);

// 	const handleChange = (e) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	const navigate = useNavigate();

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		const user = users.find(
// 			(u) =>
// 				u.email === formData.email && u.password === formData.password
// 		);

// 		if (!user) {
// 			alert("Invalid email or password");
// 			return;
// 		}

// 		alert("Signed in successfully!");
// 		navigate("/dashboard"); // Redirect to dashboard
// 	};


// 	const renderPasswordToggle = () => (
// 		<button
// 			type="button"
// 			className="btn btn-outline-secondary"
// 			onClick={() => setShowPassword((prev) => !prev)}
// 			aria-label={showPassword ? "Hide password" : "Show password"}
// 		>
// 			<i
// 				className={`fa-solid ${
// 					showPassword ? "fa-eye-slash" : "fa-eye"
// 				}`}
// 			></i>
// 		</button>
// 	);

// 	return (
// 		<>
// 			{/* Navbar */}
// 			<nav
// 				className="navbar navbar-expand-lg navbar-light px-4 py-2 shadow-sm"
// 				style={{ backgroundColor: "#ffffff", minHeight: "56px" }}
// 			>
// 				<div className="container-fluid">
// 					<Link
// 						className="navbar-brand fw-bold"
// 						to="/"
// 						style={{ fontSize: "1.4rem", color: "#222922" }}
// 					>
// 						App Stats
// 					</Link>
// 				</div>
// 			</nav>

// 			{/* Layout */}
// 			<div
// 				className="d-flex vh-100"
// 				style={{ backgroundColor: "#f1f1f1" }}
// 			>
// 				{/* Left Section */}
// 				<div
// 					className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white p-5"
// 					style={{ backgroundColor: "#222922" }}
// 				>
// 					<h1 className="display-3 fw-bold">SIGN IN</h1>
// 					<p className="fs-5 mt-3 text-center w-75">
// 						Log in to access your dashboard and monitor your app's
// 						performance.
// 					</p>
// 				</div>

// 				{/* Right Section */}
// 				<div className="col-md-6 d-flex justify-content-center align-items-center p-4">
// 					<div
// 						className="card shadow p-4 w-50"
// 						style={{
// 							backgroundColor: "#ffffff",
// 							borderRadius: "12px",
// 						}}
// 					>
// 						<div className="card-body">
// 							<h3
// 								className="fw-bold text-center mb-3"
// 								style={{ fontSize: "1.8rem" }}
// 							>
// 								Welcome Back
// 							</h3>
// 							<p
// 								className="text-muted text-center mb-4"
// 								style={{ fontSize: "1rem" }}
// 							>
// 								Sign in to continue
// 							</p>

// 							<form onSubmit={handleSubmit}>
// 								<div className="mb-3">
// 									<label
// 										htmlFor="email"
// 										className="form-label fs-6"
// 									>
// 										Email
// 									</label>
// 									<input
// 										type="email"
// 										name="email"
// 										value={formData.email}
// 										onChange={handleChange}
// 										className="form-control fs-6"
// 										id="email"
// 										placeholder="you@example.com"
// 										required
// 									/>
// 								</div>

// 								<div className="mb-3">
// 									<label
// 										htmlFor="password"
// 										className="form-label fs-6"
// 									>
// 										Password
// 									</label>
// 									<div className="input-group">
// 										<input
// 											type={
// 												showPassword
// 													? "text"
// 													: "password"
// 											}
// 											name="password"
// 											value={formData.password}
// 											onChange={handleChange}
// 											className="form-control fs-6"
// 											id="password"
// 											placeholder="••••••••"
// 											required
// 										/>
// 										{renderPasswordToggle()}
// 									</div>
// 								</div>

// 								<div className="mb-3 text-end">
// 									<Link
// 										to="/forgot-password"
// 										className="text-decoration-none small text-muted"
// 									>
// 										Forgot password?
// 									</Link>
// 								</div>

// 								<button
// 									type="submit"
// 									className="btn w-100 fs-6"
// 									style={{
// 										backgroundColor: "#222922",
// 										color: "white",
// 									}}
// 								>
// 									Sign In
// 								</button>
// 							</form>

// 							<p className="text-center mt-4 mb-2 text-muted fs-6">
// 								Don’t have an account?{" "}
// 								<Link
// 									to="/signup"
// 									className="text-decoration-none"
// 									style={{ color: "#222922" }}
// 								>
// 									Sign Up
// 								</Link>
// 							</p>

// 							<div className="d-flex justify-content-between text-muted small">
// 								<Link to="/help">Help</Link>
// 								<Link to="/privacy">Privacy</Link>
// 								<Link to="/terms">Terms</Link>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Footer */}
// 			<footer className="w-100 text-center py-3 bg-white border-top mt-auto">
// 				<p className="mb-0 text-muted">
// 					&copy; 2024 App Stats. All rights reserved.
// 				</p>
// 			</footer>
// 		</>
// 	);
// };

// export default SignInPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("12345678");
	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		// Replace with your login logic
		console.log("Logging in with:", { email, password, rememberMe });
		navigate("/dashboard");
	};

	return (
		<div className="auth-basic-wrapper d-flex align-items-center justify-content-center min-h-screen">
			<div className="container-fluid my-5 my-lg-0">
				<div className="row">
					<div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
						<div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
							<div className="card-body p-5">
								<img
									src="/assets/images/logo1.png"
									className="mb-4"
									width="145"
									alt="logo"
								/>
								<h4 className="fw-bold">Get Started Now</h4>
								<p className="mb-0">
									Enter your credentials to login your account
								</p>

								<form
									className="row g-3 my-5"
									onSubmit={handleLogin}
								>
									<div className="col-12">
										<label
											htmlFor="inputEmailAddress"
											className="form-label"
										>
											Email
										</label>
										<input
											type="email"
											className="form-control"
											id="inputEmailAddress"
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
											htmlFor="inputChoosePassword"
											className="form-label"
										>
											Password
										</label>
										<div className="input-group">
											<input
												type={
													showPassword
														? "text"
														: "password"
												}
												className="form-control border-end-0"
												id="inputChoosePassword"
												value={password}
												onChange={(e) =>
													setPassword(e.target.value)
												}
												placeholder="Enter Password"
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
												></i>
											</button>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												id="flexSwitchCheckChecked"
												checked={rememberMe}
												onChange={(e) =>
													setRememberMe(
														e.target.checked
													)
												}
											/>
											<label
												className="form-check-label"
												htmlFor="flexSwitchCheckChecked"
											>
												Remember Me
											</label>
										</div>
									</div>
									<div className="col-md-6 text-end">
										<a href="/forgot-password">
											Forgot Password ?
										</a>
									</div>
									<div className="col-12">
										<div className="d-grid">
											<button
												type="submit"
												className="btn btn-grd-primary"
											>
												Login
											</button>
										</div>
									</div>
									<div className="col-12 text-start">
										<p className="mb-0">
											Don't have an account yet?{" "}
											<a href="/register">Sign up here</a>
										</p>
									</div>
								</form>

								<div className="separator section-padding d-flex align-items-center">
									<div className="line flex-grow-1"></div>
									<p className="mb-0 fw-bold px-2">
										OR SIGN IN WITH
									</p>
									<div className="line flex-grow-1"></div>
								</div>

								<div className="d-flex gap-3 justify-content-center mt-4">
									<a
										href="#"
										className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-danger"
									>
										<i className="bi bi-google fs-5 text-white"></i>
									</a>
									<a
										href="#"
										className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-deep-blue"
									>
										<i className="bi bi-facebook fs-5 text-white"></i>
									</a>
									<a
										href="#"
										className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-info"
									>
										<i className="bi bi-linkedin fs-5 text-white"></i>
									</a>
									<a
										href="#"
										className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-royal"
									>
										<i className="bi bi-github fs-5 text-white"></i>
									</a>
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
