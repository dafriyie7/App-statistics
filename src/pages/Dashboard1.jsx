import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* <!--plugins--> */
import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
import "../assets/plugins/metismenu/metisMenu.min.css";
import "../assets/plugins/metismenu/mm-vertical.css";
import "../assets/plugins/simplebar/css/simplebar.css";
/* <!--bootstrap css--> */
import "../assets/css/bootstrap.min.css";
/* <!--main css--> */
import "../assets/css/bootstrap-extended.css";
// import "../sass/main.css";
import "../sass/dark-theme.css";
import "../sass/blue-theme.css";
import "../sass/semi-dark.css";
import "../sass/bordered-theme.css";
import "../sass/responsive.css";

import "../light-fix.css";

import Breadcrumb from "../components/Breadcrumb";
import RectCard from "../components/RectCard";
import OrderStatDoeNot from "../components/OrderStatDoeNot";
import BigSquares from "../components/BigSquares";
import Bottom from "../components/Bottom";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import ThemeBtn from "../components/ThemeBtn";
import SmallSquares from "../components/SmallSquares";
import DRectCard from "../components/DRectCard";
import BigRect from "../components/BigRect";

import LineChart from "../components/Chartjs/LineChart"

const Dashboard1j = () => {
	return (
		<>
			{/* <!--start main wrapper--> */}
			<main className="main-wrapper">
				<div className="main-content">
					<Breadcrumb />
					<div className="row">
						<RectCard />
						<SmallSquares chart={<LineChart />} />
						<SmallSquares />
						<SmallSquares chart={< LineChart />} />
						<SmallSquares />
					</div>
					<div className="row">
						<OrderStatDoeNot />
						<DRectCard />
					</div>
					<div className="row">
						<BigSquares />
						<BigSquares />
						<BigSquares />
					</div>
					<div className="row">
						<BigRect />
						<Bottom />
					</div>
				</div>
			</main>
			{/* <!--end main wrapper--> */}

			{/* <!--start overlay--> */}
			<div className="overlay btn-toggle"></div>
			{/* <!--end overlay--> */}
			<Cart />
			{/* <!--start switcher--> */}
			<ThemeBtn />
		</>
	);
};

export default Dashboard1j;
