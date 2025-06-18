import "bootstrap/dist/css/bootstrap.min.css";

/* Plugins */
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/metisMenu.min.css";
import "../assets/plugins/metismenu/mm-vertical.css";
import "../assets/plugins/simplebar/css/simplebar.css";

/* Main styles */
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-extended.css";
import "../sass/main.css";
import "../sass/dark-theme.css";
import "../sass/blue-theme.css";
import "../sass/semi-dark.css";
import "../sass/bordered-theme.css";
import "../sass/responsive.css";

const Breadcrumb = ({ title = "Dashboard", section = "App Tracker" }) => {
	return (
		<div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
			<div className="breadcrumb-title pe-3">{title}</div>
			<div className="ps-3">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb mb-0 p-0">
						<li className="breadcrumb-item">
							<a href="#">
								<i className="bx bx-home-alt"></i>
							</a>
						</li>
						<li
							className="breadcrumb-item active"
							aria-current="page"
						>
							{section}
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
						<span className="visually-hidden">Toggle Dropdown</span>
					</button>
					<div className="dropdown-menu dropdown-menu-end">
						<a className="dropdown-item" href="#">
							User Settings
						</a>
						<a className="dropdown-item" href="#">
							App Preferences
						</a>
						<a className="dropdown-item" href="#">
							Theme Options
						</a>
						<div className="dropdown-divider"></div>
						<a className="dropdown-item" href="#">
							Logout
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Breadcrumb;
