import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* CSS imports here (unchanged) … */

const themes = [
	{ id: "LightTheme", label: "Light", icon: "light_mode", theme: "light" },
	{ id: "DarkTheme", label: "Dark", icon: "dark_mode", theme: "dark" },
	{ id: "BlueTheme", label: "Blue", icon: "color_lens", theme: "blue-theme" },
	{
		id: "SemiDarkTheme",
		label: "Semi Dark",
		icon: "brightness_4",
		theme: "semi-dark",
	},
];

const ThemeBtn = () => {
	/* Lazy init: runs once, synchronises DOM attribute immediately */
	const [selectedTheme, setSelectedTheme] = useState(() => {
		const saved = localStorage.getItem("theme") || "light";
		document.documentElement.setAttribute("data-bs-theme", saved);
		return saved;
	});

	const applyTheme = (theme) => {
		setSelectedTheme(theme);
		document.documentElement.setAttribute("data-bs-theme", theme);
		localStorage.setItem("theme", theme);
	};

	return (
		<>
			{/* Off‑canvas (unchanged) */}
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
						aria-label="Close"
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

			{/* Floating button */}
			<button
				className="btn btn-grd btn-grd-primary position-fixed bottom-0 end-0 m-3 d-flex align-items-center gap-2"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#staticBackdrop"
			>
				<i className="material-icons-outlined">tune</i>
				Theme
			</button>
		</>
	);
};

export default ThemeBtn;
