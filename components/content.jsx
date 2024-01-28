import "./content.css";
import Home from "./home";

function Content({ pageIndex, setIndex }) {
  if (pageIndex === 0) {
    return (
      <div className="contentbody">
        <Home></Home>
      </div>
    );
  } else if (pageIndex === 1) {
    return (
      <div className="contentbody">
        <p className="contenttext">test1</p>
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
