import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Required for Bootstrap components

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Plugins
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/metisMenu.min.css";
import "../assets/plugins/metismenu/mm-vertical.css";
import "../assets/plugins/simplebar/css/simplebar.css";

// Bootstrap layout
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-extended.css";

// Your themes
import "../sass/main.scss"; // ✅ light theme wrapped in [data-bs-theme="light"]
import "../sass/dark-theme.css"; // ✅ dark theme with [data-bs-theme="dark"]

// Optional
import "../sass/responsive.css";


// import "../sass/main.scss";

const ThemeBtn = () => {const [selectedTheme, setSelectedTheme] = useState("light");

	const handleThemeChange = (theme) => {
		setSelectedTheme(theme);

		const html = document.documentElement;
		html.setAttribute("data-bs-theme", theme);

		localStorage.setItem("theme", theme);
	};
	  
	

	// Load saved theme on page load
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "light";
		handleThemeChange(savedTheme);
	}, []);
	
	
const themes = [
	{ id: "LightTheme", label: "Light", icon: "light_mode", theme: "light" },
	{ id: "DarkTheme", label: "Dark", icon: "dark_mode", theme: "dark" },
];

	return (
		<>
			<div
				className="offcanvas offcanvas-end"
				data-bs-scroll="true"
				tabIndex="-1"
				id="staticBackdrop"
			>
				<div className="offcanvas-header border-bottom h-70">
					<div>
						<h5 className="mb-0">Theme Customizer</h5>
						<p className="mb-0">Customize your theme</p>
					</div>
					<a
						href="#"
						className="primaery-menu-close"
						data-bs-dismiss="offcanvas"
					>
						<i className="material-icons-outlined">close</i>
					</a>
				</div>

				<div className="offcanvas-body">
					<p>Theme variation</p>
					<div className="row g-3">
						{themes.map(({ id, label, icon, theme }) => (
							<div key={id} className="col-12 col-xl-6">
								<input
									type="radio"
									className="btn-check"
									name="theme-options"
									id={id}
									checked={selectedTheme === theme}
									onChange={() => handleThemeChange(theme)}
								/>
								<label
									className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
									htmlFor={id}
								>
									<span className="material-icons-outlined">
										{icon}
									</span>
									<span>{label}</span>
								</label>
							</div>
						))}
					</div>
				</div>
			</div>

			<button
				className="btn btn-grd btn-grd-primary position-fixed bottom-0 end-0 m-3 d-flex align-items-center gap-2"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#staticBackdrop"
			>
				<i className="material-icons-outlined">tune</i>Customize
			</button>
		</>
	);
};

export default ThemeBtn;
