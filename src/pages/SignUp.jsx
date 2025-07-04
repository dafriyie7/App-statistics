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
												<a href="/signin">
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
