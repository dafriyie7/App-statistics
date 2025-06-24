import "bootstrap/dist/css/bootstrap.min.css";
/* <!--plugins--> */
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/metisMenu.min.css";
import "../assets/plugins/metismenu/mm-vertical.css";
import "../assets/plugins/simplebar/css/simplebar.css";
/* <!--main css--> */
import "../assets/css/bootstrap-extended.css";
// import "../sass/main.css";
import "../sass/dark-theme.css";
import "../sass/blue-theme.css";
import "../sass/semi-dark.css";
import "../sass/bordered-theme.css";
import "../sass/responsive.css";

import "../light-fix.css";

/* data */
import sidemenuData from "./sidemenuData";

const Content = () => {
	const renderMenuItems = (menu) => {
		return menu.map((item, index) => {
			if (item.children && item.children.length > 0) {
				return (
					<li key={index}>
						<a href="javascript:;" className="has-arrow">
							<div className="parent-icon">
								<i className="material-icons-outlined">
									{item.icon}
								</i>
							</div>
							<div className="menu-title">{item.title}</div>
						</a>
						<ul>
							{item.children.map((child, childIndex) => (
								<li key={childIndex}>
									<a href={child.link}>
										<i className="material-icons-outlined">
											{child.icon}
										</i>
										{child.title}
									</a>
								</li>
							))}
						</ul>
					</li>
				);
			} else {
				return (
					<li key={index}>
						<a href={item.link}>
							<div className="parent-icon">
								<i className="material-icons-outlined">
									{item.icon}
								</i>
							</div>
							<div className="menu-title">{item.title}</div>
						</a>
					</li>
				);
			}
		});
	};

	return (
		<aside className="sidebar-wrapper" data-simplebar="true">
			<div className="sidebar-header">
				<div className="logo-icon">
					<img
						src="../assets/images/logo-icon.png"
						className="logo-img"
						alt=""
					/>
				</div>
				<div className="logo-name flex-grow-1">
					<h5 className="mb-0">AppTracker</h5>
				</div>
				<div className="sidebar-close">
					<span className="material-icons-outlined">close</span>
				</div>
			</div>
			<div className="sidebar-nav">
				<ul className="metismenu" id="sidenav">
					{renderMenuItems(sidemenuData)}
				</ul>
			</div>
		</aside>
	);
};

export default Content;
