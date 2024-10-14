import { useEffect } from "react";
import { getToken } from "../../../utils/localStorage";
import axios from "axios";
import useUserStore from "../../store/useUserStore";
import { Navigate } from "react-router-dom";
import InitialLoadingIndicator from "./InitialLoadingIndicator";
const ProtectedRoute = ({ element: Element }) => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const setIsAuthenticated = useUserStore((state) => state.setIsAuthenticated);
  const setSessionToken = useUserStore((state) => state.setSessionToken);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = getToken();
        if (!token) {
          setIsAuthenticated(false);
          return;
        }
        const response = await axios.post(
          "http://localhost:3000/user/auth",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data.user);
        setSessionToken(token);
        setIsAuthenticated(true);
      } catch (error) {
        console.log("token error", error);
        setIsAuthenticated(false);
      }
    };
    if (!isAuthenticated) {
      verifyToken();
    }
  }, []);
  if (isAuthenticated === null) {
    return <InitialLoadingIndicator />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Element />;
};

export default ProtectedRoute;
