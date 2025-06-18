import "bootstrap/dist/css/bootstrap.min.css";

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

const Navbar = () => {
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
					<a className="navbar-brand fw-bold text-primary" href="/">
						AppTracker
					</a>
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
							href="#"
							id="userDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<img
								src="../assets/images/avatars/01.png"
								alt="User Avatar"
								width="40"
								height="40"
								className="rounded-circle border"
							/>
						</a>
						<ul
							className="dropdown-menu dropdown-menu-end"
							aria-labelledby="userDropdown"
						>
							<li>
								<a className="dropdown-item" href="#">
									Profile
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Settings
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Dashboard
								</a>
							</li>
							<li>
								<hr className="dropdown-divider" />
							</li>
							<li>
								<a
									className="dropdown-item text-danger"
									href="#"
								>
									Login
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
