import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

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
        return <><Outlet/></>
      }
      else{
        return <Navigate to='/login'/>
      }
    }
  return <Navigate to="/login" />;
};

export default PrivateRoutes;
