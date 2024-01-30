import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../components/navbar";
import Content from "../components/content";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pageIndex, setIndex] = useState(0);
  

  const handleNavClick = (index) => {
    setIndex(index);
  };

  return (
    <>
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setIndex={handleNavClick}
      ></Navbar>
      <Content pageIndex={pageIndex} setIndex={setIndex}></Content>
    </>
  );
}

export default App;
