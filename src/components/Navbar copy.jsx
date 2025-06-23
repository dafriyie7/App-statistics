import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

  /* <!--plugins--> */
  import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css"
  import "../assets/plugins/simplebar/css/simplebar.css"
  import "../assets/plugins/metismenu/metisMenu.min.css"
  import "../assets/plugins/metismenu/mm-vertical.css"
	/* <!--bootstrap css--> */
//   import "../../assets/css/bootstrap.min.css"
	/* <!--main css--> */
  import "../../assets/css/bootstrap-extended.css"
  import "../sass/main.css"
  import "../sass/dark-theme.css"
  import "../sass/blue-theme.css"
  import "../sass/semi-dark.css"
  import "../sass/bordered-theme.css"
  import "../sass/responsive.css"

const Navbar = () => {
	return (
			<header className="top-header">
				<nav className="navbar navbar-expand align-items-center gap-4">
					<div className="btn-toggle">
						<a href="javascript:;">
							<i className="material-icons-outlined">menu</i>
						</a>
					</div>
					<div className="search-bar flex-grow-1">
						<div className="position-relative">
							<input
								className="form-control rounded-5 px-5 search-control d-lg-block d-none"
								type="text"
								placeholder="Search"
							/>
							<span className="material-icons-outlined position-absolute d-lg-block d-none ms-3 translate-middle-y start-0 top-50">
								search
							</span>
							<span className="material-icons-outlined position-absolute me-3 translate-middle-y end-0 top-50 search-close">
								close
							</span>
						</div>
					</div>
					<ul className="navbar-nav gap-1 nav-right-links align-items-center">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
								data-bs-auto-close="outside"
								data-bs-toggle="dropdown"
								href="javascript:;"
							>
								<i className="material-icons-outlined">
									notifications
								</i>
								<span className="badge-notify">5</span>
							</a>
							<div className="dropdown-menu dropdown-notify dropdown-menu-end shadow">
								<div className="px-3 py-1 d-flex align-items-center justify-content-between border-bottom">
									<h5 className="notiy-title mb-0">
										Notifications
									</h5>
									<div className="dropdown">
										<button
											className="btn btn-secondary dropdown-toggle dropdown-toggle-nocaret option"
											type="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<span className="material-icons-outlined">
												more_vert
											</span>
										</button>
										<div className="dropdown-menu dropdown-option dropdown-menu-end shadow">
											<div>
												<a
													className="dropdown-item d-flex align-items-center gap-2 py-2"
													href="javascript:;"
												>
													<i className="material-icons-outlined fs-6">
														inventory_2
													</i>
													Archive All
												</a>
											</div>
											<div>
												<a
													className="dropdown-item d-flex align-items-center gap-2 py-2"
													href="javascript:;"
												>
													<i className="material-icons-outlined fs-6">
														done_all
													</i>
													Mark all as read
												</a>
											</div>
											<div>
												<a
													className="dropdown-item d-flex align-items-center gap-2 py-2"
													href="javascript:;"
												>
													<i className="material-icons-outlined fs-6">
														mic_off
													</i>
													Disable Notifications
												</a>
											</div>
											<div>
												<a
													className="dropdown-item d-flex align-items-center gap-2 py-2"
													href="javascript:;"
												>
													<i className="material-icons-outlined fs-6">
														grade
													</i>
													What's new ?
												</a>
											</div>
											<div>
												<hr className="dropdown-divider" />
											</div>
											<div>
												<a
													className="dropdown-item d-flex align-items-center gap-2 py-2"
													href="javascript:;"
												>
													<i className="material-icons-outlined fs-6">
														leaderboard
													</i>
													Reports
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="notify-list">
									<div>
										<a
											className="dropdown-item border-bottom py-2"
											href="javascript:;"
										>
											<div className="d-flex align-items-center gap-3">
												<div className="">
													<img
														src="../../assets/images/avatars/01.png"
														className="rounded-circle"
														width="45"
														height="45"
														alt=""
													/>
												</div>
												<div className="">
													<h5 className="notify-title">
														Congratulations Jhon
													</h5>
													<p className="mb-0 notify-desc">
														Many congtars jhon. You
														have won the gifts.
													</p>
													<p className="mb-0 notify-time">
														Today
													</p>
												</div>
												<div className="notify-close position-absolute end-0 me-3">
													<i className="material-icons-outlined fs-6">
														close
													</i>
												</div>
											</div>
										</a>
									</div>
									<div>
										<a
											className="dropdown-item border-bottom py-2"
											href="javascript:;"
										>
											<div className="d-flex align-items-center gap-3">
												<div className="user-wrapper bg-primary text-primary bg-opacity-10">
													<span>RS</span>
												</div>
												<div className="">
													<h5 className="notify-title">
														New Account Created
													</h5>
													<p className="mb-0 notify-desc">
														From USA an user has
														registered.
													</p>
													<p className="mb-0 notify-time">
														Yesterday
													</p>
												</div>
												<div className="notify-close position-absolute end-0 me-3">
													<i className="material-icons-outlined fs-6">
														close
													</i>
												</div>
											</div>
										</a>
									</div>
									<div>
										<a
											className="dropdown-item border-bottom py-2"
											href="javascript:;"
										>
											<div className="d-flex align-items-center gap-3">
												<div className="">
													<img
														src="../../assets/images/apps/13.png"
														className="rounded-circle"
														width="45"
														height="45"
														alt=""
													/>
												</div>
												<div className="">
													<h5 className="notify-title">
														Payment Recived
													</h5>
													<p className="mb-0 notify-desc">
														New payment recived
														successfully
													</p>
													<p className="mb-0 notify-time">
														1d ago
													</p>
												</div>
												<div className="notify-close position-absolute end-0 me-3">
													<i className="material-icons-outlined fs-6">
														close
													</i>
												</div>
											</div>
										</a>
									</div>
									<div>
										<a
											className="dropdown-item border-bottom py-2"
											href="javascript:;"
										>
											<div className="d-flex align-items-center gap-3">
												<div className="">
													<img
														src="../../assets/images/apps/14.png"
														className="rounded-circle"
														width="45"
														height="45"
														alt=""
													/>
												</div>
												<div className="">
													<h5 className="notify-title">
														New Order Recived
													</h5>
													<p className="mb-0 notify-desc">
														Recived new order from
														michle
													</p>
													<p className="mb-0 notify-time">
														2:15 AM
													</p>
												</div>
												<div className="notify-close position-absolute end-0 me-3">
													<i className="material-icons-outlined fs-6">
														close
													</i>
												</div>
											</div>
										</a>
									</div>
									<div>
										<a
											className="dropdown-item border-bottom py-2"
											href="javascript:;"
										>
											<div className="d-flex align-items-center gap-3">
												<div className="">
													<img
														src="../../assets/images/avatars/06.png"
														className="rounded-circle"
														width="45"
														height="45"
														alt=""
													/>
												</div>
												<div className="">
													<h5 className="notify-title">
														Congratulations Jhon
													</h5>
													<p className="mb-0 notify-desc">
														Many congtars jhon. You
														have won the gifts.
													</p>
													<p className="mb-0 notify-time">
														Today
													</p>
												</div>
												<div className="notify-close position-absolute end-0 me-3">
													<i className="material-icons-outlined fs-6">
														close
													</i>
												</div>
											</div>
										</a>
									</div>
									<div>
										<a
											className="dropdown-item py-2"
											href="javascript:;"
										>
											<div className="d-flex align-items-center gap-3">
												<div className="user-wrapper bg-danger text-danger bg-opacity-10">
													<span>PK</span>
												</div>
												<div className="">
													<h5 className="notify-title">
														New Account Created
													</h5>
													<p className="mb-0 notify-desc">
														From USA an user has
														registered.
													</p>
													<p className="mb-0 notify-time">
														Yesterday
													</p>
												</div>
												<div className="notify-close position-absolute end-0 me-3">
													<i className="material-icons-outlined fs-6">
														close
													</i>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</li>
					<li className="nav-item d-md-flex d-none">
						
						{/* Account */}
							<a
								className="nav-link position-relative"
								data-bs-toggle="offcanvas"
								href="#offcanvasCart"
							>
								<i className="material-icons-outlined">
									shopping_cart
								</i>
								<span className="badge-notify">8</span>
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								href="javascrpt:;"
								className="dropdown-toggle dropdown-toggle-nocaret"
								data-bs-toggle="dropdown"
							>
								<img
									src="../../assets/images/avatars/01.png"
									className="rounded-circle p-1 border"
									width="45"
									height="45"
									alt=""
								/>
						</a>
						
						{/* // acccount dropdown */}
							<div className="dropdown-menu dropdown-user dropdown-menu-end shadow">
								<a
									className="dropdown-item  gap-2 py-2"
									href="javascript:;"
								>
									<div className="text-center">
										<img
											src="../../assets/images/avatars/01.png"
											className="rounded-circle p-1 shadow mb-3"
											width="90"
											height="90"
											alt=""
										/>
										<h5 className="user-name mb-0 fw-bold">
											Hello, Jhon
										</h5>
									</div>
								</a>
								<hr className="dropdown-divider" />
								<a
									className="dropdown-item d-flex align-items-center gap-2 py-2"
									href="javascript:;"
								>
									<i className="material-icons-outlined">
										person_outline
									</i>
									Profile
								</a>
								<a
									className="dropdown-item d-flex align-items-center gap-2 py-2"
									href="javascript:;"
								>
									<i className="material-icons-outlined">
										local_bar
									</i>
									Setting
								</a>
								<a
									className="dropdown-item d-flex align-items-center gap-2 py-2"
									href="javascript:;"
								>
									<i className="material-icons-outlined">
										dashboard
									</i>
									Dashboard
								</a>
								<a
									className="dropdown-item d-flex align-items-center gap-2 py-2"
									href="javascript:;"
								>
									<i className="material-icons-outlined">
										account_balance
									</i>
									Earning
								</a>
								<a
									className="dropdown-item d-flex align-items-center gap-2 py-2"
									href="javascript:;"
								>
									<i className="material-icons-outlined">
										cloud_download
									</i>
									Downloads
								</a>
								<hr className="dropdown-divider" />
								<a
									className="dropdown-item d-flex align-items-center gap-2 py-2"
									href="javascript:;"
								>
									<i className="material-icons-outlined">
										power_settings_new
									</i>
									Logout
								</a>
							</div>
						</li>
					</ul>
				</nav>
			</header>
	);
};

export default Navbar;
