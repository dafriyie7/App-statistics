// import "bootstrap/dist/css/bootstrap.min.css";

// /* <!--plugins--> */
// import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
// import "../assets/plugins/metismenu/metisMenu.min.css";
// import "../assets/plugins/metismenu/mm-vertical.css";
// import "../assets/plugins/simplebar/css/simplebar.css";
// /* <!--main css--> */
// import "../assets/css/bootstrap-extended.css";
// import "../sass/main.css";
// import "../sass/dark-theme.css";
// import "../sass/blue-theme.css";
// import "../sass/semi-dark.css";
// import "../sass/bordered-theme.css";
// import "../sass/responsive.css";

// import user from "../assets/images/avatars/01.png";

// const Navbar = () => {
// 	return (
// 		<header className="top-header shadow-sm bg-white">
// 			<nav className="navbar navbar-expand-lg px-3 py-2 align-items-center justify-content-between">
// 				<div className="d-flex align-items-center gap-3">
// 					<button
// 						className="btn btn-outline-primary d-lg-none"
// 						type="button"
// 						data-bs-toggle="offcanvas"
// 					>
// 						<i className="bi bi-list"></i>
// 					</button>
// 				</div>

// 				<form className="d-none d-lg-block w-50 mx-auto">
// 					<input
// 						type="search"
// 						className="form-control rounded-pill px-4"
// 						placeholder="Search tasks, apps, users..."
// 						aria-label="Search"
// 					/>
// 				</form>

// 				<ul className="navbar-nav d-flex align-items-center gap-3">
// 					<li className="nav-item">
// 						<a className="nav-link position-relative" href="#">
// 							<i className="bi bi-bell fs-5"></i>
// 							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
// 								3
// 							</span>
// 						</a>
// 					</li>
// 					<li className="nav-item dropdown">
// 						<a
// 							className="nav-link dropdown-toggle d-flex align-items-center"
// 							href="#"
// 							id="userDropdown"
// 							role="button"
// 							data-bs-toggle="dropdown"
// 							aria-expanded="false"
// 						>
// 							<img
// 								src={user}
// 								alt="User Avatar"
// 								width="40"
// 								height="40"
// 								className="rounded-circle border"
// 							/>
// 						</a>
// 						<ul
// 							className="dropdown-menu dropdown-menu-end"
// 							aria-labelledby="userDropdown"
// 						>
// 							<li>
// 								<a className="dropdown-item" href="#">
// 									Profile
// 								</a>
// 							</li>
// 							<li>
// 								<a className="dropdown-item" href="#">
// 									Settings
// 								</a>
// 							</li>
// 							<li>
// 								<a className="dropdown-item" href="#">
// 									Dashboard
// 								</a>
// 							</li>
// 							<li>
// 								<hr className="dropdown-divider" />
// 							</li>
// 							<li>
// 								<a
// 									className="dropdown-item text-danger"
// 									href="#"
// 								>
// 									Login
// 								</a>
// 							</li>
// 						</ul>
// 					</li>
// 				</ul>
// 			</nav>
// 		</header>
// 	);
// };

// export default Navbar;

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import Dropdown from "bootstrap/js/dist/dropdown";

/* <!--plugins--> */
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/metisMenu.min.css";
import "../assets/plugins/metismenu/mm-vertical.css";
import "../assets/plugins/simplebar/css/simplebar.css";
/* <!--main css--> */
import "../assets/css/bootstrap-extended.css";
import "../sass/main.css";
import "../sass/dark-theme.css";
import "../sass/blue-theme.css";
import "../sass/semi-dark.css";
import "../sass/bordered-theme.css";
import "../sass/responsive.css";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

const initials = (name = "User") =>
	name
		.split(" ")
		.map((w) => w[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();

const Navbar = () => {
	// ref for the avatar toggle button so we can manually attach Bootstrap dropdown JS
	const toggleRef = useRef(null);

	// ensure dropdown JS is active even in React's dynamic updates
	useEffect(() => {
		if (toggleRef.current) {
			// eslint-disable-next-line no-new
			new Dropdown(toggleRef.current);
		}
	}, []);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { accessToken, user } = useSelector((s) => s.auth);

	const handleLogout = () => {
		dispatch(logout());
		navigate("/signin", { replace: true });
	};

	const avatar = user?.photo || null;

	return (
		<header className="top-header shadow-sm bg-white">
			<nav className="navbar navbar-expand-lg px-3 py-2 align-items-center justify-content-between">
				<div className="d-flex align-items-center gap-3">
					<button
						className="btn btn-outline-primary d-lg-none"
						type="button"
						data-bs-toggle="offcanvas"
					>
						<i className="bi bi-list"></i>
					</button>
				</div>

				<form className="d-none d-lg-block w-50 mx-auto">
					<input
						type="search"
						className="form-control rounded-pill px-4"
						placeholder="Search tasks, apps, users..."
						aria-label="Search"
					/>
				</form>

				<ul className="navbar-nav d-flex align-items-center gap-3">
					<li className="nav-item">
						<a className="nav-link position-relative" href="#">
							<i className="bi bi-bell fs-5"></i>
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								3
							</span>
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle d-flex align-items-center"
							ref={toggleRef}
							href="#"
							id="userDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							{avatar ? (
								<img
									src={avatar}
									alt="User Avatar"
									width="40"
									height="40"
									className="rounded-circle border"
								/>
							) : (
								<div
									className="rounded-circle border bg-primary text-white d-flex align-items-center justify-content-center"
									style={{ width: 40, height: 40 }}
								>
									{initials(
										user?.first_name ||
											user?.username ||
											"User"
									)}
								</div>
							)}
						</a>
						<ul
							className="dropdown-menu dropdown-menu-end"
							aria-labelledby="userDropdown"
						>
							{accessToken ? (
								<>
									<li>
										<Link
											className="dropdown-item"
											to="/profile"
										>
											Profile
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to="/settings"
										>
											Settings
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to="/dashboard"
										>
											Dashboard
										</Link>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<button
											className="dropdown-item text-danger"
											onClick={handleLogout}
										>
											Logout
										</button>
									</li>
								</>
							) : (
								<li>
									<Link
										className="dropdown-item text-primary"
										to="/signin"
									>
										Sign In
									</Link>
								</li>
							)}
						</ul>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
