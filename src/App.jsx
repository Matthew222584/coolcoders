import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../components/navbar";
import Content from "../components/content";
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [pageIndex, setIndex] = useState(0);

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
      <Content pageIndex={pageIndex} setIndex={setIndex}></Content>
    </>
  );
}

export default App;
