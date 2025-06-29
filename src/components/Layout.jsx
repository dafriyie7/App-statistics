import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";

const Layout = () => {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />

			<div className="flex flex-1 overflow-hidden">
				<Sidebar />

				<main className="main-wrapper">
					<div className="main-content">
							<Outlet />
						<div className="row">
						</div>
					</div>
				</main>
			</div>

			<Footer />
			<ThemeBtn />
		</div>
	);
};

export default Layout;
