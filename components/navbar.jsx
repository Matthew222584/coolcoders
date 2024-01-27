import "./navbar.css";
import logoImage from "../src/assets/spotify-2-logo-png-transparent.png";
function Navbar({ loggedIn }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg finalnav">
        <a class="navbar-brand" href="/home">
          <img class="navbarimg" src={logoImage}></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link  navtext" href="/home">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link navtext" href="/playlist">
                Playlist
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link navtext" href="/stats">
                Stats
              </a>
            </li>
            {loggedIn && (
              <li class="nav-item">
                <a class="nav-link navtext" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
