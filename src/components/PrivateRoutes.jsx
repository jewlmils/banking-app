import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const PrivateRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const user = userData.find(
        (user) =>
          user.email === currentUser.email &&
          user.password === currentUser.password
      );

      if (!user || !user.loginStatus) {
        // Navigate to login if the user is not found or not logged in
        navigate("/login");
      }
    }
  }, []); // Empty dependency array ensures this effect runs only once


  return <Outlet />;
};

export default PrivateRoutes;
