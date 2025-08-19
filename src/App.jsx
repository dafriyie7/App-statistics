import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard1 from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserAnalyticsCard from "./pages/UserAnalyticsCard";
import BeneficiariesManagement from "./pages/BeneficiariesManagement";
import DeviceManagement from "./pages/DeviceManagement";
// import EditBeneficiary from "./pages/EditBeneficiary";
// import EditDevice from "./pages/EditDevice";
import ResetPassword from "./pages/ResetPassword";
import UserManagement from "./pages/UserManagement";
// import EditUser from "./pages/EditUser";
// import AddBeneficiary from "./pages/AddBeneficiary";
// import AddUser from "./pages/AddUser";
import DeviceDetails from "./pages/DeviceDetails";
// import AddDevice from "./pages/AddDevice";
import AppsUsage from "./pages/AppsUsage";
import AppDetails from "./pages/AppDetails";
import RequireAuth from "./routes/RequireAuth";
import BeneficiaryDetails from "./components/BeneficiaryDetails";



function App() {
	return (
		<Router>
			<Routes>
				{/* Public Routes (No Layout) */}
				<Route path="/signin" element={<SignIn />} />
				<Route path="/register" element={<SignUp />} />
				<Route path="/reset-password" element={<ResetPassword />} />

				{/* Protected Routes (require auth) */}
				{/* <Route element={<RequireAuth />}> */}
					<Route path="/" element={<Layout />}>
						<Route index element={<Dashboard1 />} />
						<Route path="dashboard" element={<Dashboard1 />} />
						<Route path="user" element={<UserAnalyticsCard />} />
						<Route
							path="beneficiaries"
							element={<BeneficiariesManagement />}
						/>
						<Route
							path="beneficiaries/users"
							element={<UserManagement />}
						/>
						<Route
							path="beneficiaries/device-management"
							element={<DeviceManagement />}
						/>
						<Route path="users" element={<UserManagement />} />
						<Route
							path="device-management"
							element={<DeviceManagement />}
						/>
						<Route path="beneficiaries/:id" element={<BeneficiaryDetails />} />
						{/* <Route
							path="/beneficiaries/:id/edit"
							element={<EditBeneficiary />}
						/>
						<Route path="/users/:id/edit" element={<EditUser />} />
						<Route
							path="devices/:id/edit"
							element={<EditDevice />}
						/> */}
						{/* <Route
							path="/beneficiaries/new"
							element={<AddBeneficiary />}
						/> */}
						{/* <Route path="/users/new" element={<AddUser />} /> */}
						<Route path="devices/:id" element={<DeviceDetails />} />
						{/* <Route path="devices/new" element={<AddDevice />} /> */}
						<Route path="apps" element={<AppsUsage />} />
						<Route path="app" element={<AppDetails />} />
						<Route path="apps/:id" element={<AppDetails />} />
					</Route>
				{/* </Route> */}
			</Routes>
		</Router>
	);
}

export default App;
