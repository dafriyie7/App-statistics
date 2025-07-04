import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Core styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Plugin styles
import "./assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "./assets/plugins/metismenu/metisMenu.min.css";
import "./assets/plugins/metismenu/mm-vertical.css";
import "./assets/plugins/simplebar/css/simplebar.css";

// App styles
import "./assets/css/bootstrap-extended.css";
import "./sass/main.css";
import "./sass/blue-theme.css";
import "./sass/semi-dark.css";
import "./sass/bordered-theme.css";
import "./sass/responsive.css";
import "./sass/dark-theme.css";

// Fonts (load in public/index.html for best performance)


// import "./light-fix.css";



import "./sass/main.scss";

import App from './App.jsx'

createRoot(document.getElementById("root")).render(
	<StrictMode>
			<App />
	</StrictMode>
);