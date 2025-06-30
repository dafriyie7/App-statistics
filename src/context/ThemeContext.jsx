import { createContext, useContext, useLayoutEffect, useState } from "react";

const BODY_THEMES = ["blue", "semi-dark", "bordered"];
const BODY_CLASSES = BODY_THEMES.map((t) => `${t}-theme`);
const DEFAULT_THEME = localStorage.getItem("theme") || "light";

const ThemeContext = createContext({
	theme: DEFAULT_THEME,
	setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(DEFAULT_THEME);

	useLayoutEffect(() => {
		const root = document.documentElement;
		const body = document.body;

		// Fix: Only set "light" or "dark" for Bootstrap’s native theming
		const bsTheme =
			theme === "dark" || theme === "semi-dark" ? "dark" : "light";
		root.setAttribute("data-bs-theme", bsTheme);

		// Custom themes via body class
		body.classList.remove(...BODY_CLASSES);
		if (BODY_THEMES.includes(theme)) {
			body.classList.add(`${theme}-theme`);
		}

		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
