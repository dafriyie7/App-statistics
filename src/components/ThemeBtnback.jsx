import { useTheme } from "../context/ThemeContext";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// 🌈 GLOBAL STYLE IMPORTS – keep these once, here or in `main.jsx`
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/metisMenu.min.css";
import "../assets/plugins/metismenu/mm-vertical.css";
import "../assets/plugins/simplebar/css/simplebar.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-extended.css";

import "../sass/main.scss"; // light
import "../sass/dark-theme.css"; // dark
import "../sass/blue-theme.css"; // .blue-theme
import "../sass/semi-dark.css"; // .semi-dark
import "../sass/bordered-theme.css"; // .bordered-theme
import "../sass/responsive.css";

const THEMES = [
	{ id: "LightTheme", label: "Light", icon: "light_mode", theme: "light" },
	{ id: "DarkTheme", label: "Dark", icon: "dark_mode", theme: "dark" },
	{ id: "BlueTheme", label: "Blue", icon: "water_drop", theme: "blue" },
	{
		id: "SemiDark",
		label: "Semi-Dark",
		icon: "contrast",
		theme: "semi-dark",
	},
	{ id: "Bordered", label: "Bordered", icon: "grid_on", theme: "bordered" },
];

export default function ThemeBtn() {
	const { theme, setTheme } = useTheme();

	return (
		<>
			{/* --- Off-canvas customizer --- */}
			<div
				id="themeCustomizer"
				className="offcanvas offcanvas-end"
				data-bs-scroll="true"
				tabIndex="-1"
			>
				<div className="offcanvas-header border-bottom h-70">
					<div>
						<h5 className="mb-0">Theme Customizer</h5>
						<p className="mb-0">Choose your look &amp; feel</p>
					</div>
					<button
						className="primaery-menu-close btn p-0 border-0 bg-transparent"
						data-bs-dismiss="offcanvas"
					>
						<i className="material-icons-outlined">close</i>
					</button>
				</div>

				<div className="offcanvas-body">
					<p className="fw-semibold">Theme variation</p>
					<div className="row g-3">
						{THEMES.map(({ id, label, icon, theme: value }) => (
							<div key={id} className="col-12 col-xl-6">
								<input
									type="radio"
									id={id}
									className="btn-check"
									name="theme-options"
									checked={theme === value}
									onChange={() => setTheme(value)}
								/>
								<label
									htmlFor={id}
									className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
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

			{/* --- Floating toggle button --- */}
			<button
				type="button"
				className="btn btn-grd btn-grd-primary position-fixed bottom-0 end-0 m-3 d-flex align-items-center gap-2"
				data-bs-toggle="offcanvas"
				data-bs-target="#themeCustomizer"
			>
				<i className="material-icons-outlined">tune</i>Customize
			</button>
		</>
	);
}
