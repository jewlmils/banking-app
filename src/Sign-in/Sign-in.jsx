import React, { useRef, useState } from "react";
import "../Sign-in/Sign-in.css";
import Content from "../Components/Content";

export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showHome, setShowHome] = useState(false);

  const handleSignIn = () => {
    const inputEmail = emailRef.current.value;
    const inputPassword = passwordRef.current.value;

    if (inputEmail === "admin@gmail.com" && inputPassword === "pass") {
      // if valid, masesave sa local storage
      //   localStorage.setItem("email", inputEmail);
      //   localStorage.setItem("password", inputPassword);
      //   localStorage.setItem("signIn", inputEmail);
      setShowHome(true);
    } else {
      alert("Invalid email or password");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSignIn();
    }
  };

  return (
    <div>
      {showHome ? (
        <Content />
      ) : (
        <div className="split-screen">
          <div className="left">
            <div className="signin-container">
              <div className="welcome">
                <h1>Welcome Back!</h1>
                <p>Fueling Your Financial Future</p>
              </div>
              <div className="detail">
                <input type="email" ref={emailRef} placeholder="Email" />
              </div>
              <div className="detail">
                <input
                  type="password"
                  ref={passwordRef}
                  placeholder="Password"
                />
              </div>
              <button onClick={handleSignIn}>Log In</button>
            </div>
          </div>
          <div className="right"></div>
        </div>
      )}
    </div>
  );
}
