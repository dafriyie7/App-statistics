//Layout.jsx
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="">
			<Navbar />
			<div className="">
				<Sidebar />
				<main className="">
					<Outlet />
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
