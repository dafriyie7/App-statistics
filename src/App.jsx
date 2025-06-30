import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard1 from "./pages/Dashboard";
import Details from "./pages/Details";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserAnalyticsCard from "./pages/UserAnalyticsCard";
import BeneficiariesManagement from "./pages/BeneficiariesManagement";
import DeviceManagement from "./pages/DeviceManagement";
import EditBeneficiary from "./pages/EditBeneficiary";
import EditDevice from "./pages/EditDevice";
import ResetPassword from "./pages/ResetPassword";

function App() {
	return (
		<Router>
			<Routes>
				{/* Public Routes (No Layout) */}
				<Route path="/signin" element={<SignIn />} />
				<Route path="/register" element={<SignUp />} />
				<Route path="/reset-password" element={<ResetPassword />} />

				{/* Protected Routes (With Layout) */}
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard1 />} />
					<Route path="dashboard" element={<Dashboard1 />} />
					<Route path="details" element={<Details />} />
					<Route path="user" element={<UserAnalyticsCard />} />
					<Route path="analytics" element={<Details />} />
					<Route path="beneficiaries" element={<BeneficiariesManagement />} />
					<Route
						path="device-management"
						element={<DeviceManagement />}
					/>
					<Route
						path="/beneficiaries/:id/edit"
						element={<EditBeneficiary />}
					/>
					<Route path="devices/:id/edit" element={<EditDevice />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
