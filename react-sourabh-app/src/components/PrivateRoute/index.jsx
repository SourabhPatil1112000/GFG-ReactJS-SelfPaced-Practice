import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context"; // Fixed path

export const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? children : <Navigate to="/login" replace />;
};