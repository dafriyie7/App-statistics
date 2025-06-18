// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, useNavigate } from "react-router-dom";

// const SignUpPage = () => {
// 	const [formData, setFormData] = useState({
// 		firstName: "",
// 		lastName: "",
// 		email: "",
// 		password: "",
// 		confirmPassword: "",
// 	});
// 	const [showPassword, setShowPassword] = useState(false);
// 	const navigate = useNavigate();

// 	const handleChange = (e) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value });
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		const { firstName, lastName, email, password, confirmPassword } =
// 			formData;

// 		if (password !== confirmPassword) {
// 			alert("Passwords do not match!");
// 			return;
// 		}

// 		const users = JSON.parse(localStorage.getItem("users")) || [];
// 		const existingUser = users.find((u) => u.email === email);

// 		if (existingUser) {
// 			alert("Email already exists. Try signing in.");
// 			return;
// 		}

// 		const newUser = {
// 			id: Date.now(),
// 			firstName,
// 			lastName,
// 			email,
// 			password,
// 		};

// 		users.push(newUser);
// 		localStorage.setItem("users", JSON.stringify(users));
// 		alert("Account created successfully!");
// 		navigate("/signin");
// 	};

// 	const toggleShowPassword = () => (
// 		<button
// 			type="button"
// 			className="btn btn-outline-secondary"
// 			onClick={() => setShowPassword(!showPassword)}
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
// 			<nav
// 				className="navbar navbar-expand-lg navbar-light px-4 py-2 shadow-sm"
// 				style={{ backgroundColor: "#ffffff", minHeight: "56px" }}
// 			>
// 				<div className="container-fluid">
// 					<Link
// 						className="navbar-brand fw-bold"
// 						to="#"
// 						style={{ fontSize: "1.4rem", color: "#222922" }}
// 					>
// 						App Stats
// 					</Link>
// 				</div>
// 			</nav>

// 			<div
// 				className="d-flex vh-100"
// 				style={{ backgroundColor: "#f1f1f1" }}
// 			>
// 				<div
// 					className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white p-5"
// 					style={{ backgroundColor: "#222922" }}
// 				>
// 					<h1 className="display-3 fw-bold">SIGN UP</h1>
// 					<p className="fs-5 mt-3 text-center w-75">
// 						Join us to track your app's performance and get insights
// 						on user engagement.
// 					</p>
// 				</div>

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
// 								Hello
// 							</h3>
// 							<p
// 								className="text-muted text-center mb-4"
// 								style={{ fontSize: "1rem" }}
// 							>
// 								Create your account to get started
// 							</p>
// 							<form onSubmit={handleSubmit}>
// 								<div className="mb-3">
// 									<label
// 										htmlFor="firstName"
// 										className="form-label fs-6"
// 									>
// 										First Name
// 									</label>
// 									<input
// 										type="text"
// 										className="form-control fs-6"
// 										id="firstName"
// 										name="firstName"
// 										placeholder="John"
// 										value={formData.firstName}
// 										onChange={handleChange}
// 										required
// 									/>
// 								</div>

// 								<div className="mb-3">
// 									<label
// 										htmlFor="lastName"
// 										className="form-label fs-6"
// 									>
// 										Last Name
// 									</label>
// 									<input
// 										type="text"
// 										className="form-control fs-6"
// 										id="lastName"
// 										name="lastName"
// 										placeholder="Doe"
// 										value={formData.lastName}
// 										onChange={handleChange}
// 										required
// 									/>
// 								</div>

// 								<div className="mb-3">
// 									<label
// 										htmlFor="email"
// 										className="form-label fs-6"
// 									>
// 										Email address
// 									</label>
// 									<input
// 										type="email"
// 										className="form-control fs-6"
// 										id="email"
// 										name="email"
// 										placeholder="you@example.com"
// 										value={formData.email}
// 										onChange={handleChange}
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
// 											className="form-control fs-6"
// 											id="password"
// 											name="password"
// 											placeholder="••••••••"
// 											value={formData.password}
// 											onChange={handleChange}
// 											required
// 										/>
// 										{toggleShowPassword()}
// 									</div>
// 								</div>

// 								<div className="mb-4">
// 									<label
// 										htmlFor="confirmPassword"
// 										className="form-label fs-6"
// 									>
// 										Confirm Password
// 									</label>
// 									<div className="input-group">
// 										<input
// 											type={
// 												showPassword
// 													? "text"
// 													: "password"
// 											}
// 											className="form-control fs-6"
// 											id="confirmPassword"
// 											name="confirmPassword"
// 											placeholder="••••••••"
// 											value={formData.confirmPassword}
// 											onChange={handleChange}
// 											required
// 										/>
// 										{toggleShowPassword()}
// 									</div>
// 								</div>

// 								<button
// 									type="submit"
// 									className="btn w-100 fs-6"
// 									style={{
// 										backgroundColor: "#222922",
// 										color: "white",
// 									}}
// 								>
// 									Sign Up
// 								</button>
// 							</form>

// 							<p className="text-center mt-4 mb-2 text-muted fs-6">
// 								Already have an account?{" "}
// 								<Link
// 									to="/signin"
// 									className="text-decoration-none"
// 									style={{ color: "#222922" }}
// 								>
// 									Sign in
// 								</Link>
// 							</p>

// 							<div className="d-flex justify-content-between text-muted small">
// 								<a href="#help">Help</a>
// 								<a href="#privacy">Privacy</a>
// 								<a href="#terms">Terms</a>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<footer className="w-100 text-center py-3 bg-white border-top mt-auto">
// 				<p className="mb-0 text-muted">
// 					&copy; 2024. All rights reserved.
// 				</p>
// 			</footer>
// 		</>
// 	);
// };

// export default SignUpPage;

import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import ThemeBtn from "../components/ThemeBtn";

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		country: "India",
		agree: false,
	});

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Submitted", formData);
	};

	return (
		<div
			className="container-fluid d-flex justify-content-center align-items-center"
			style={{ minHeight: "100vh" }}
		>
			<div className="row w-100">
				<div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-5 mx-auto">
					<div className="card rounded-4 mb-0 border-top border-4 border-primary border-gradient-1">
						<div className="card-body p-5">
							<img
								src="/assets/images/logo1.png"
								className="mb-4"
								width="145"
								alt="Logo"
							/>
							<h4 className="fw-bold">Get Started Now</h4>
							<p className="mb-0">
								Enter your credentials to create your account
							</p>

							<div className="form-body my-4">
								<form
									className="row g-3"
									onSubmit={handleSubmit}
								>
									<div className="col-12">
										<label
											htmlFor="inputUsername"
											className="form-label"
										>
											Username
										</label>
										<input
											type="text"
											className="form-control"
											id="inputUsername"
											name="username"
											placeholder="Jhon"
											value={formData.username}
											onChange={handleChange}
										/>
									</div>

									<div className="col-12">
										<label
											htmlFor="inputEmailAddress"
											className="form-label"
										>
											Email Address
										</label>
										<input
											type="email"
											className="form-control"
											id="inputEmailAddress"
											name="email"
											placeholder="example@user.com"
											value={formData.email}
											onChange={handleChange}
										/>
									</div>

									<div className="col-12">
										<label
											htmlFor="inputChoosePassword"
											className="form-label"
										>
											Password
										</label>
										<div
											className="input-group"
											id="show_hide_password"
										>
											<input
												type={
													showPassword
														? "text"
														: "password"
												}
												className="form-control border-end-0"
												id="inputChoosePassword"
												name="password"
												placeholder="Enter Password"
												value={formData.password}
												onChange={handleChange}
											/>
											<button
												type="button"
												className="input-group-text bg-transparent"
												onClick={
													togglePasswordVisibility
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

									<div className="col-12">
										<label
											htmlFor="inputSelectCountry"
											className="form-label"
										>
											Country
										</label>
										<select
											className="form-select"
											id="inputSelectCountry"
											name="country"
											value={formData.country}
											onChange={handleChange}
										>
											<option value="India">India</option>
											<option value="United Kingdom">
												United Kingdom
											</option>
											<option value="America">
												America
											</option>
											<option value="Dubai">Dubai</option>
										</select>
									</div>

									<div className="col-12">
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												id="flexSwitchCheckChecked"
												name="agree"
												checked={formData.agree}
												onChange={handleChange}
											/>
											<label
												className="form-check-label"
												htmlFor="flexSwitchCheckChecked"
											>
												I read and agree to Terms &
												Conditions
											</label>
										</div>
									</div>

									<div className="col-12">
										<div className="d-grid">
											<button
												type="submit"
												className="btn btn-grd-danger"
											>
												Register
											</button>
										</div>
									</div>

									<div className="col-12">
										<div className="text-start">
											<p className="mb-0">
												Already have an account?{" "}
												<a href="/auth-basic-login">
													Sign in here
												</a>
											</p>
										</div>
									</div>
								</form>
							</div>

							<div className="separator section-padding">
								<div className="line"></div>
								<p className="mb-0 fw-bold">OR</p>
								<div className="line"></div>
							</div>

							<div className="d-flex gap-3 justify-content-center mt-4">
								<a
									href="javascript:;"
									className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-danger"
								>
									<i className="bi bi-google fs-5 text-white"></i>
								</a>
								<a
									href="javascript:;"
									className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-deep-blue"
								>
									<i className="bi bi-facebook fs-5 text-white"></i>
								</a>
								<a
									href="javascript:;"
									className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-info"
								>
									<i className="bi bi-linkedin fs-5 text-white"></i>
								</a>
								<a
									href="javascript:;"
									className="wh-42 d-flex align-items-center justify-content-center rounded-circle bg-grd-royal"
								>
									<i className="bi bi-github fs-5 text-white"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ThemeBtn />
		</div>
	);
};

export default Register;
