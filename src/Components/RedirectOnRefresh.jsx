import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const RedirectOnRefresh = () => {
  const navigate = useNavigate();
const location = useLocation();

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation");
    if (navType.length > 0 && navType[0].type === "reload") {
      // re-navigate to the same page
      localStorage.getItem("token");
      navigate(location.pathname, { replace: true });
    }
  }, []);

  return null;
};

export default RedirectOnRefresh;
