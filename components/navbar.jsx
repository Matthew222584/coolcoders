import "./navbar.css";
import logoImage from "../src/assets/spotify-2-logo-png-transparent.png";
function Navbar({ loggedIn, setLoggedIn, setIndex }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg finalnav">
        <a
          class="navbar-brand"
          href="/home"
          onClick={() => {
            setIndex(0);
          }}
        >
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
              <a
                class="nav-link  navtext"
                // href="/home"
                onClick={() => {
                  setIndex(0);
                }}
              >
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link navtext"
                // href="/playlist"
                onClick={() => {
                  setIndex(1);
                  loginFunc();
                }}
              >
                Playlist
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link navtext"
                // href="/stats"
                onClick={() => {
                  setIndex(2);
                }}
              >
                Stats
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

async function loginFunc() {
  if (!code) {
    redirectToAuthCodeFlow(clientId);
  } else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
  }
}

const clientId = "0acc442e06354f569180db6ba97f888d"; // Replace with your client ID
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

export async function redirectToAuthCodeFlow(clientId) {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "http://localhost:5173/callback");
  params.append("scope", "user-read-private user-read-email");
  params.append("code_challenge_method", "S256");
  params.append("codechallenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, "-")
    .replace(/\//g, "")
    .replace(/=+$/, "");
}

export async function getAccessToken(clientId, code) {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:5173/callback");
  params.append("code_verifier", verifier);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const { access_token } = await result.json();
  return access_token;
}

export default Navbar;
