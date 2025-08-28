import Login from "../Modal/AddModal.jsx";
import { isAuthenticated } from "../utils/auth.js";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
const [showLogin, setShowLogin] = useState(!isAuthenticated());
const navigate = useNavigate();

  if (!isAuthenticated()) {
    return (
      <>
      <Login isOpen={showLogin} onClose={() => {setShowLogin(false); navigate("/");}} />
      </>
    );
    }
  return children;
};

export default ProtectedRoutes;