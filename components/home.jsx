import "./home.css";
function Home() {
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
    </span>
  );
}

export default Home;
