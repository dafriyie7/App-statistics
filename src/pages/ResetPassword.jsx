import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";
import logo from "../assets/images/logo1.png";

const ResetPassword = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	const handleReset = async (e) => {
		e.preventDefault();
		setError("");
		setMessage("");
		setLoading(true);

		// 🔁 Replace with real API call
		await new Promise((res) => setTimeout(res, 1000));

		if (email.trim() === "") {
			setError("Please enter your email address.");
			setLoading(false);
			return;
		}

		setMessage("If this email is registered, a reset link has been sent.");
		setLoading(false);
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
								<h4 className="fw-bold">Reset Your Password</h4>
								<p className="mb-0">
									Enter your email to receive a reset link
								</p>

								{error && (
									<div className="alert alert-danger mt-4 py-2">
										{error}
									</div>
								)}
								{message && (
									<div className="alert alert-success mt-4 py-2">
										{message}
									</div>
								)}

								<form
									className="row g-3 my-4"
									onSubmit={handleReset}
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
											placeholder="you@example.com"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
											required
										/>
									</div>
									<div className="col-12">
										<div className="d-grid">
											<button
												type="submit"
												className="btn btn-grd-primary"
												disabled={loading}
											>
												{loading
													? "Sending…"
													: "Send Reset Link"}
											</button>
										</div>
									</div>
									<div className="col-12 text-start">
										<p className="mb-0">
											Remembered your password?{" "}
											<a href="/signin">Login</a>
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

export default ResetPassword;
