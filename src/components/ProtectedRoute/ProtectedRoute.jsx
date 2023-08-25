import { Navigate } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const ProtectedRoute = ({ element: Component, ...props }) => {
    const currentUserContext = useContext(CurrentUserContext);
    return currentUserContext.isLogin ? (
        <Component {...props} />
    ) : (
        <Navigate to='/' />
    );
};

export default ProtectedRoute;
