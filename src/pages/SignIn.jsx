

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
									src="../assets/images/logo1.png"
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
