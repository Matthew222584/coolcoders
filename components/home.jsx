import "./home.css";
function Home({ setIndex }) {
  return (
    <span>
      <p className="titleText spotify-text">
        <b>Spotify MyList</b>
      </p>
      <p className="spotify-text descriptionText">
        Discover music you've never seen!
      </p>
      <table>
        <tr>
          <td className="stepItem">
            <img src="../src/assets/logo2.png"></img>
            <p className="spotify-text stepText-modified">
              <b>1.</b>
            </p>
            <p className="spotify-text stepText"> Log in to Spotify</p>
          </td>
          <td className="stepItem">
            <img src="../src/assets/logo3.png"></img>
            <p className="spotify-text stepText-modified">
              <b>2.</b>
            </p>
            <p className="spotify-text stepText">
              {" "}
              Choose up to five music genres
            </p>
          </td>
          <td className="stepItem">
            <img src="../src/assets/logo4.png"></img>
            <p className="spotify-text stepText-modified">
              <b>3.</b>
            </p>
            <p className="spotify-text stepText"> Get your curated playlist</p>
          </td>
          <td className="stepItem">
            <img src="../src/assets/logo5.png"></img>

            <p className="spotify-text stepText-modified">
              <b>4.</b>
            </p>
            <p className="spotify-text stepText">
              {" "}
              Choose your playlist cover and title
            </p>
          </td>
        </tr>
      </table>
      <div className="devTitleBox">
        <button className="playlistBtn" onClick={setIndex}>
          <p className="spotify-text playlistBtnText">
            <b>Create my playlist!</b>
          </p>
        </button>
      </div>
      <div>
        <p className="spotify-text devs devsTitle">
          <b>Developers</b>
        </p>
      </div>
      <table>
        <tr>
          <td className="devItems">
            <table className="table-modified">
              <tr>
                <td>
                  <img className="bioImg" src="../src/assets/Bryan.jpg"></img>
                </td>
                <td>
                  <p classname="spotify-text devText">
                    <b>Bryan Tran</b>
                  </p>
                  <p classname="spotify-text bioText">
                    Michigan State University
                  </p>
                </td>
              </tr>
            </table>
          </td>
          <td className="devItems">
            <table className="table-modified">
              <tr>
                <td>
                  <img className="bioImg" src="../src/assets/Ben.jpg"></img>
                </td>
                <td>
                  <p classname="spotify-text devText">
                    <b>Benjamin Crimmins</b>
                  </p>
                  <p classname="spotify-text bioText">
                    Michigan State University
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td className="devItems">
            <table className="table-modified">
              <tr>
                <td>
                  {" "}
                  <img className="bioImg" src="../src/assets/Mat.jpg"></img>
                </td>
                <td>
                  <p classname="spotify-text devText">
                    <b>Matthew Inda</b>
                  </p>
                  <p classname="spotify-text bioText">University of Michigan</p>
                </td>
              </tr>
            </table>
          </td>
          <td className="devItems">
            <table className="table-modified">
              <tr>
                <td>
                  <img className="bioImg" src="../src/assets/Thu.jpg"></img>
                </td>
                <td>
                  <p classname="spotify-text devText">
                    <b>Thu Doan</b>
                  </p>
                  <p classname="spotify-text bioText">
                    Michigan State University
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </span>
  );
}

export default Home;
