import BackgroundSelect from "./backgroundcarosel";
import "./content.css";
import Home from "./home";
import Home from "./home";
import { useState } from "react";

function Content({ pageIndex, setIndex }) {
  const handleButtonClick = () => {
    // Example usage of setIndex
    setIndex(1); // or any other value you want to set
  };
  if (pageIndex === 0) {
    return (
      <div className="contentbody">
        <Home setIndex={handleButtonClick}></Home>
      </div>
    );
  } else if (pageIndex === 1) {
    return (
      <div>
        <div className="contentbody">
          <h1>My List</h1>
          <p className="contenttext">Create your most wanted playlists now!</p>
          <button type="button">Create MyList</button>

          <BackgroundSelect
            pageIndex={pageIndex}
            setIndex={setIndex}
          ></BackgroundSelect>
        </div>
      </div>
    );
  } else if (pageIndex === 2) {
    return (
      <div className="contentbody">
        <p className="contenttext">test2</p>
      </div>
    );
  }
}

export default Content;
