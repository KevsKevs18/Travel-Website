import LoginModal from "../Modal/LoginModal.jsx";
import { isAuthenticated } from "../utils/auth.js";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
const [showLogin, setShowLogin] = useState(!isAuthenticated());
const navigate = useNavigate();

const modalClose = ()=> {

navigate("/");
};

  if (!isAuthenticated()) {
    return (
      <>
      <LoginModal isOpen={showLogin} onClose={() => {setShowLogin(false);}} />
      </>
    );
    }
  return children;
};

export default ProtectedRoutes;