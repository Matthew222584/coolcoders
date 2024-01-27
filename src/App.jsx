import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../components/navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <Navbar loggedIn={loggedIn}></Navbar>
    </>
  );
}

export default App;
