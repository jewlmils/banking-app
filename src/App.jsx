import React,{ useEffect } from "react"
import { Authenticate } from "./components/Authenticate";
import { userData} from "./Data.jsx"
import "./App.css";

function App() {
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, []);

  return <Authenticate />;
}

export default App;
