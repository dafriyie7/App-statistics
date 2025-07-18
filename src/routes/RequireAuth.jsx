import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RequireAuth() {
	const token = useSelector((s) => s.auth.accessToken);
	const location = useLocation();

	if (!token) {
		return <Navigate to="/signin" state={{ from: location }} replace />;
	}

	return <Outlet />;
}
