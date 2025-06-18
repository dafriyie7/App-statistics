import "bootstrap/dist/css/bootstrap.min.css";
/* Plugins and main styles (keep as needed) */
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/metisMenu.min.css";
import "../assets/plugins/metismenu/mm-vertical.css";
import "../assets/plugins/simplebar/css/simplebar.css";

import "../assets/css/bootstrap-extended.css";
import "../sass/main.css";
import "../sass/dark-theme.css";
import "../sass/blue-theme.css";
import "../sass/semi-dark.css";
import "../sass/bordered-theme.css";
import "../sass/responsive.css";

const activities = [
	{
		id: 1,
		icon: "timeline",
		title: "Login from new device",
		subtitle: "Accra, Ghana",
		time: "Just now",
	},
	{
		id: 2,
		icon: "bug_report",
		title: "Crash report submitted",
		subtitle: "v1.0.5-beta",
		time: "5m ago",
	},
	{
		id: 3,
		icon: "update",
		title: "App updated",
		subtitle: "v1.0.6",
		time: "20m ago",
	},
	{
		id: 4,
		icon: "emoji_events",
		title: "Milestone unlocked",
		subtitle: "User reached 1k sessions",
		time: "1h ago",
	},
	{
		id: 5,
		icon: "group_add",
		title: "New user registered",
		subtitle: "john.doe@example.com",
		time: "2h ago",
	},
	{
		id: 6,
		icon: "lock_open",
		title: "Password reset",
		subtitle: "Requested by user",
		time: "4h ago",
	},
	{
		id: 7,
		icon: "download",
		title: "App downloaded",
		subtitle: "Android - Ghana",
		time: "7h ago",
	},
	{
		id: 8,
		icon: "star",
		title: "User feedback",
		subtitle: "Rated 4.5 stars",
		time: "12h ago",
	},
];

const ActivityDrawer = () => {
	return (
		<div
			className="offcanvas offcanvas-end"
			tabIndex="-1"
			id="offcanvasCart"
		>
			<div className="offcanvas-header border-bottom h-70">
				<h5 className="mb-0" id="offcanvasRightLabel">
					Recent Activity
				</h5>
				<a
					href="#"
					className="primaery-menu-close"
					data-bs-dismiss="offcanvas"
				>
					<i className="material-icons-outlined">close</i>
				</a>
			</div>

			<div className="offcanvas-body p-0">
				<div className="order-list">
					{activities.map(({ id, icon, title, subtitle, time }) => (
						<div
							key={id}
							className="order-item d-flex align-items-center gap-3 p-3 border-bottom"
						>
							<div className="order-img">
								<div
									className="bg-light rounded-3 d-flex align-items-center justify-content-center"
									style={{ width: 75, height: 75 }}
								>
									<span className="material-icons-outlined fs-2">
										{icon}
									</span>
								</div>
							</div>
							<div className="order-info flex-grow-1">
								<h6 className="mb-1">{title}</h6>
								<p className="mb-0 text-muted small">
									{subtitle}
								</p>
							</div>
							<p className="text-muted mb-0 small">{time}</p>
						</div>
					))}
				</div>
			</div>

			<div className="offcanvas-footer h-70 p-3 border-top">
				<div className="d-grid">
					<button
						type="button"
						className="btn btn-grd btn-grd-primary"
						data-bs-dismiss="offcanvas"
					>
						View Full Log
					</button>
				</div>
			</div>
		</div>
	);
};

export default ActivityDrawer;
