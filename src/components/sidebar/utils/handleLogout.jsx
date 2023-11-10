import { useNavigate } from "react-router-dom";

export function handleLogout() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let pageStatus = JSON.parse(localStorage.getItem("pageStatus"));

  if (currentUser) {
    const userIndex = userData.findIndex(
      (user) =>
        user.email === currentUser.email && user.password === currentUser.password
    );

    if (userIndex !== -1) {
      userData[userIndex].loginStatus = false;
      pageStatus = false;

      localStorage.removeItem("currentUser");
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("pageStatus", JSON.stringify(pageStatus));
      console.log("redirecting to login");

      navigate("/login");
    }
  }
}