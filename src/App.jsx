import { useState } from "react";
import { Authenticate } from "./components/Authenticate";
import "./App.css";
import { Login } from "./components/Login.jsx";
export const userRole = "user";
export const login = true;


function App() {
  return <Authenticate/>
}

export default App;
