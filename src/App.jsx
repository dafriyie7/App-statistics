import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard1 from "./pages/Dashboard1";
import Details from "./pages/Details";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import LoginPage from "./pages/SignIn";
import RegisterPage from "./pages/SignUp";
function App() {
	return (
		<Router>
			<Routes>
				{/* Public Routes (No Layout) */}
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="register" element={<RegisterPage />} />


				{/* Protected Routes (With Layout) */}
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard1 />} />
					<Route path="dashboard" element={<Dashboard1 />} />
					<Route path="details" element={<Details />} />
					<Route path="users" element={<Users />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
