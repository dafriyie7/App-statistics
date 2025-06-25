import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";

/* <!--plugins--> */
import "./assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "./assets/plugins/metismenu/metisMenu.min.css";
import "./assets/plugins/metismenu/mm-vertical.css";
import "./assets/plugins/simplebar/css/simplebar.css";
/* <!--bootstrap css--> */
import "./assets/css/bootstrap.min.css";
/* <!--main css--> */
import "./assets/css/bootstrap-extended.css";
// import "./sass/main.css";
import "./sass/dark-theme.css";
import "./sass/blue-theme.css";
import "./sass/semi-dark.css";
import "./sass/bordered-theme.css";
import "./sass/responsive.css";

import "./light-fix.css";



import "./sass/main.scss";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)