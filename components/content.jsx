import BackgroundSelect from "./backgroundcarosel";
import "./content.css";
import Home from "./home";
import { useState } from "react";



function Content({ pageIndex, setIndex }) {


  if (pageIndex === 0) {
    return (
      <div className="contentbody">
        <Home></Home>
      </div>
    );
  } else if (pageIndex === 1) {
    return (

        <div>
          <div className="contentbody">
            <h1 class="white">My List</h1>
            <p className="contenttext">Create your most wanted playlists now!</p>
            

            <BackgroundSelect pageIndex={pageIndex} setIndex={setIndex}></BackgroundSelect>
            <button type="button">Create MyList</button>
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
