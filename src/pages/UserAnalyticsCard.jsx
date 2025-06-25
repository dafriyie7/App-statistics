import { Link } from "react-router-dom";
import skype from "../assets/images/apps/02.png";
import slack from "../assets/images/apps/03.png";
import instagram from "../assets/images/apps/19.png";
import facebook from "../assets/images/apps/17.png";
import paypal from "../assets/images/apps/11.png";
import google from "../assets/images/apps/05.png";
import avatar from "../assets/images/avatars/01.png";

const UserAnalyticsCard = () => {
	return (
		<main className="main-wrapper">
			<div className="main-content">
				{/* <!--breadcrumb--> */}
				<div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
					<div className="breadcrumb-title pe-3">Components</div>
					<div className="ps-3">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item">
									<Link to="#">
										<i className="bx bx-home-alt"></i>
									</Link>
								</li>
								<li
									className="breadcrumb-item active"
									aria-current="page"
								>
									User Profile
								</li>
							</ol>
						</nav>
					</div>
					<div className="ms-auto">
						<div className="btn-group">
							<button type="button" className="btn btn-primary">
								Settings
							</button>
							<button
								type="button"
								className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
								data-bs-toggle="dropdown"
							>
								{" "}
								<span className="visually-hidden">
									Toggle Dropdown
								</span>
							</button>
							<div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
								{" "}
								<Link className="dropdown-item" to="#">
									Action
								</Link>
								<Link className="dropdown-item" to="#">
									Another action
								</Link>
								<Link className="dropdown-item" to="#">
									Something else here
								</Link>
								<div className="dropdown-divider"></div>{" "}
								<Link className="dropdown-item" to="#">
									Separated link
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/* <!--end breadcrumb--> */}

				<div className="card rounded-4">
					<div className="card-body p-4">
						<div className="position-relative mb-5">
							<img
								src="../assets/images/gallery/profile-cover.png"
								className="img-fluid rounded-4 shadow"
								alt=""
							/>
							<div className="profile-avatar position-absolute top-100 start-50 translate-middle">
								<img
									src={avatar}
									className="img-fluid rounded-circle p-1 bg-grd-danger shadow"
									width="170"
									height="170"
									alt=""
								/>
							</div>
						</div>
						<div className="profile-info pt-5 d-flex align-items-center justify-content-between">
							<div className="">
								<h3>Jhon Deo</h3>
								<p className="mb-0">
									Engineer at BB Agency Industry
									<br />
									New York, United States
								</p>
							</div>
							<div className="">
								<Link
									to="#"
									className="btn btn-grd-primary rounded-5 px-4"
								>
									<i className="bi bi-chat me-2"></i>Send
									Message
								</Link>
							</div>
						</div>
						<div className="kewords d-flex align-items-center gap-3 mt-4 overflow-x-auto">
							<button
								type="button"
								className="btn btn-sm btn-light rounded-5 px-4"
							>
								UX Research
							</button>
							<button
								type="button"
								className="btn btn-sm btn-light rounded-5 px-4"
							>
								CX Strategy
							</button>
							<button
								type="button"
								className="btn btn-sm btn-light rounded-5 px-4"
							>
								Management
							</button>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12 col-xl-8">
						<div className="card rounded-4 border-top border-4 border-primary border-gradient-1">
							<div className="card-body p-4">
								<div className="d-flex align-items-start justify-content-between mb-3">
									<div className="">
										<h5 className="mb-0 fw-bold">
											Edit Profile
										</h5>
									</div>
									<div className="dropdown">
										<Link
											to="#"
											className="dropdown-toggle-nocaret options dropdown-toggle"
											data-bs-toggle="dropdown"
										>
											<span className="material-icons-outlined fs-5">
												more_vert
											</span>
										</Link>
										<ul className="dropdown-menu">
											<li>
												<Link
													className="dropdown-item"
													to="#"
												>
													Action
												</Link>
											</li>
											<li>
												<Link
													className="dropdown-item"
													to="#"
												>
													Another action
												</Link>
											</li>
											<li>
												<Link
													className="dropdown-item"
													to="#"
												>
													Something else here
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<form className="row g-4">
									<div className="col-md-6">
										<label
											htmlFor="input1"
											className="form-label"
										>
											First Name
										</label>
										<input
											type="text"
											className="form-control"
											id="input1"
											placeholder="First Name"
										/>
									</div>
									<div className="col-md-6">
										<label
											htmlFor="input2"
											className="form-label"
										>
											Last Name
										</label>
										<input
											type="text"
											className="form-control"
											id="input2"
											placeholder="Last Name"
										/>
									</div>
									<div className="col-md-12">
										<label
											htmlFor="input3"
											className="form-label"
										>
											Phone
										</label>
										<input
											type="text"
											className="form-control"
											id="input3"
											placeholder="Phone"
										/>
									</div>
									<div className="col-md-12">
										<label
											htmlFor="input4"
											className="form-label"
										>
											Email
										</label>
										<input
											type="email"
											className="form-control"
											id="input4"
										/>
									</div>
									<div className="col-md-12">
										<label
											htmlFor="input5"
											className="form-label"
										>
											Password
										</label>
										<input
											type="password"
											className="form-control"
											id="input5"
										/>
									</div>
									<div className="col-md-12">
										<label
											htmlFor="input6"
											className="form-label"
										>
											DOB
										</label>
										<input
											type="date"
											className="form-control"
											id="input6"
										/>
									</div>
									<div className="col-md-12">
										<label
											htmlFor="input7"
											className="form-label"
										>
											Country
										</label>
										<select
											id="input7"
											className="form-select"
										>
											<option selected="">
												Choose...
											</option>
											<option>One</option>
											<option>Two</option>
											<option>Three</option>
										</select>
									</div>

									<div className="col-md-6">
										<label
											htmlFor="input8"
											className="form-label"
										>
											City
										</label>
										<input
											type="text"
											className="form-control"
											id="input8"
											placeholder="City"
										/>
									</div>
									<div className="col-md-4">
										<label
											htmlFor="input9"
											className="form-label"
										>
											State
										</label>
										<select
											id="input9"
											className="form-select"
										>
											<option selected="">
												Choose...
											</option>
											<option>One</option>
											<option>Two</option>
											<option>Three</option>
										</select>
									</div>
									<div className="col-md-2">
										<label
											htmlFor="input10"
											className="form-label"
										>
											Zip
										</label>
										<input
											type="text"
											className="form-control"
											id="input10"
											placeholder="Zip"
										/>
									</div>
									<div className="col-md-12">
										<label
											htmlFor="input11"
											className="form-label"
										>
											Address
										</label>
										<textarea
											className="form-control"
											id="input11"
											placeholder="Address ..."
											rows="4"
											cols="4"
										></textarea>
									</div>
									<div className="col-md-12">
										<div className="d-md-flex d-grid align-items-center gap-3">
											<button
												type="button"
												className="btn btn-grd-primary px-4"
											>
												Update Profile
											</button>
											<button
												type="button"
												className="btn btn-light px-4"
											>
												Reset
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-12 col-xl-4">
						<div className="card rounded-4">
							<div className="card-body">
								<div className="d-flex align-items-start justify-content-between mb-3">
									<div className="">
										<h5 className="mb-0 fw-bold">About</h5>
									</div>
									<div className="dropdown">
										<Link
											to="#"
											className="dropdown-toggle-nocaret options dropdown-toggle"
											data-bs-toggle="dropdown"
										>
											<span className="material-icons-outlined fs-5">
												more_vert
											</span>
										</Link>
										<ul className="dropdown-menu">
											<li>
												<Link
													className="dropdown-item"
													to="#"
												>
													Action
												</Link>
											</li>
											<li>
												<Link
													className="dropdown-item"
													to="#"
												>
													Another action
												</Link>
											</li>
											<li>
												<Link
													className="dropdown-item"
													to="#"
												>
													Something else here
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="full-info">
									<div className="info-list d-flex flex-column gap-3">
										<div className="info-list-item d-flex align-items-center gap-3">
											<span className="material-icons-outlined">
												account_circle
											</span>
											<p className="mb-0">
												Full Name: Jhon Deo
											</p>
										</div>
										<div className="info-list-item d-flex align-items-center gap-3">
											<span className="material-icons-outlined">
												done
											</span>
											<p className="mb-0">
												Status: active
											</p>
										</div>
										<div className="info-list-item d-flex align-items-center gap-3">
											<span className="material-icons-outlined">
												code
											</span>
											<p className="mb-0">
												Role: Developer
											</p>
										</div>
										<div className="info-list-item d-flex align-items-center gap-3">
											<span className="material-icons-outlined">
												flag
											</span>
											<p className="mb-0">Country: USA</p>
										</div>
										<div className="info-list-item d-flex align-items-center gap-3">
											<span className="material-icons-outlined">
												language
											</span>
											<p className="mb-0">
												Language: English
											</p>
										</div>
										<div className="info-list-item d-flex align-items-center gap-3">
											<span className="material-icons-outlined">
												send
											</span>
											<p className="mb-0">
												Email: jhon.xyz
											</p>
										</div>
										<div className="info-list-item d-flex align-items-center gap-3">
											<span className="material-icons-outlined">
												call
											</span>
											<p className="mb-0">
												Phone: (124) 895-6724
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card rounded-4">
							<div className="card-body">
								<div className="d-flex align-items-start justify-content-between mb-3">
									<div className="">
										<h5 className="mb-0 fw-bold">
											Accounts
										</h5>
									</div>
									<div className="dropdown">
										<Link
											to="#"
											className="dropdown-toggle-nocaret options dropdown-toggle"
											data-bs-toggle="dropdown"
										>
											<span className="material-icons-outlined fs-5">
												more_vert
											</span>
										</Link>
										<ul className="dropdown-menu">
											<li>
												<Link
													className="dropdown-item"
													to="#"
												>
													Action
												</Link>
											</li>
											<li>
												<Link
													className="dropdown-item"
													to="#"
												>
													Another action
												</Link>
											</li>
											<li>
												<Link
													className="dropdown-item"
													to="#"
												>
													Something else here
												</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className="account-list d-flex flex-column gap-4">
									<div className="account-list-item d-flex align-items-center gap-3">
										<img src={google} width="35" alt="" />
										<div className="flex-grow-1">
											<h6 className="mb-0">Google</h6>
											<p className="mb-0">
												Events and Reserch
											</p>
										</div>
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												checked
											/>
										</div>
									</div>
									<div className="account-list-item d-flex align-items-center gap-3">
										<img src={skype} width="35" alt="" />
										<div className="flex-grow-1">
											<h6 className="mb-0">Skype</h6>
											<p className="mb-0">
												Events and Reserch
											</p>
										</div>
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												checked
											/>
										</div>
									</div>
									<div className="account-list-item d-flex align-items-center gap-3">
										<img src={slack} width="35" alt="" />
										<div className="flex-grow-1">
											<h6 className="mb-0">Slack</h6>
											<p className="mb-0">
												Communication
											</p>
										</div>
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												checked
											/>
										</div>
									</div>
									<div className="account-list-item d-flex align-items-center gap-3">
										<img
											src={instagram}
											width="35"
											alt=""
										/>
										<div className="flex-grow-1">
											<h6 className="mb-0">Instagram</h6>
											<p className="mb-0">
												Social Network
											</p>
										</div>
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												checked
											/>
										</div>
									</div>
									<div className="account-list-item d-flex align-items-center gap-3">
										<img src={facebook} width="35" alt="" />
										<div className="flex-grow-1">
											<h6 className="mb-0">Facebook</h6>
											<p className="mb-0">
												Social Network
											</p>
										</div>
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												checked
											/>
										</div>
									</div>
									<div className="account-list-item d-flex align-items-center gap-3">
										<img src={paypal} width="35" alt="" />
										<div className="flex-grow-1">
											<h6 className="mb-0">Paypal</h6>
											<p className="mb-0">
												Social Network
											</p>
										</div>
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												checked
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--end row--> */}
			</div>
		</main>
	);
};

export default UserAnalyticsCard;
