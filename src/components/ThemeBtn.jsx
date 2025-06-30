import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* Plugin & CSS Imports */
import "../assets/css/pace.min.css";
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/metisMenu.min.css";
import "../assets/plugins/metismenu/mm-vertical.css";
import "../assets/plugins/simplebar/css/simplebar.css";

import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-extended.css";

/* Theme CSS files */
import "../sass/main.css"; // light theme
import "../sass/dark-theme.css"; // dark theme
import "../sass/blue-theme.css"; // blue theme (data-bs-theme="blue-theme")
import "../sass/semi-dark.css";
import "../sass/bordered-theme.css";
import "../sass/responsive.css";

const themes = [
	{ id: "LightTheme", label: "Light", icon: "light_mode", theme: "light" },
	{ id: "DarkTheme", label: "Dark", icon: "dark_mode", theme: "dark" },
	{ id: "BlueTheme", label: "Blue", icon: "color_lens", theme: "blue-theme" },
	{
		id: "SemiDarkTheme",
		label: "Semi Dark",
		icon: "brightness_4",
		theme: "semi-dark",
	},
	{
		id: "BorderedTheme",
		label: "Bordered",
		icon: "border_all",
		theme: "bordered",
	},
];

const ThemeBtn = () => {
	const [selectedTheme, setSelectedTheme] = useState("light");

	const applyTheme = (theme) => {
		setSelectedTheme(theme);
		document.documentElement.setAttribute("data-bs-theme", theme);
		localStorage.setItem("theme", theme);
	};

	useEffect(() => {
		const saved = localStorage.getItem("theme") || "light";
		applyTheme(saved);
	}, []);

	return (
		<>
			{/* Theme Offcanvas Panel */}
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
					<button
						className="primaery-menu-close btn"
						data-bs-dismiss="offcanvas"
					>
						<i className="material-icons-outlined">close</i>
					</button>
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
									onChange={() => applyTheme(theme)}
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

			{/* Floating Customize Button */}
			<button
				className="btn btn-grd btn-grd-primary position-fixed bottom-0 end-0 m-3 d-flex align-items-center gap-2"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#staticBackdrop"
			>
				<i className="material-icons-outlined">tune</i>
				Customize
			</button>
		</>
	);
};

export default ThemeBtn;
