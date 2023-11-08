import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = () => {
  console.log("private Routes");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    console.log("currentUser Validated");
    const userData = JSON.parse(localStorage.getItem("userData"));
    const user = userData.find(
      (user) =>
        user.email === currentUser.email &&
        user.password === currentUser.password
    );

    if (user.loginStatus) {
      console.log("redirecting to dashboard");
      if (user.isAdmin) {
        return null; // Return null to let the route rendering in App.jsx handle navigation
      } else {
        return null; // Return null to let the route rendering in App.jsx handle navigation
      }
    }
  }

  console.log("redirecting to login");
  return <Navigate to="/login" />;
};

export default PrivateRoutes;
