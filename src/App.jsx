import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard1 from "./pages/Dashboard1";
import Details from "./pages/Details";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserAnalyticsCard from "./pages/UserAnalyticsCard";

function App() {
	return (
		<Router>
			<Routes>
				{/* Public Routes (No Layout) */}
				<Route path="/signin" element={<SignIn />} />
				<Route path="/register" element={<SignUp />} />

				{/* Protected Routes (With Layout) */}
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard1 />} />
					<Route path="dashboard" element={<Dashboard1 />} />
					<Route path="details" element={<Details />} />
					<Route path="user" element={<UserAnalyticsCard />} />
					<Route path="dashboard/analytics" element={<Details />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
