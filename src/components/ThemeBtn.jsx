import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../assets/css/pace.min.css";

/* <!--plugins--> */
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/metisMenu.min.css";
import "../assets/plugins/metismenu/mm-vertical.css";
import "../assets/plugins/simplebar/css/simplebar.css";
/* <!--bootstrap css--> */
import "../assets/css/bootstrap.min.css";
/* <!--main css--> */
import "../assets/css/bootstrap-extended.css";
import "../sass/main.css";
import "../sass/dark-theme.css";
import "../sass/blue-theme.css";
import "../sass/semi-dark.css";
import "../sass/bordered-theme.css";
import "../sass/responsive.css";

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
		{
			id: "LightTheme",
			label: "Light",
			icon: "light_mode",
			theme: "light",
		},
		{ id: "DarkTheme", label: "Dark", icon: "dark_mode", theme: "dark" },
		{
			id: "BlueTheme",
			label: "Blue",
			icon: "color_lens",
			theme: "blue-theme",
		}, // fix this
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
