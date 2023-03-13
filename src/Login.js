import { useEffect, useState } from "react";
import axios from "axios";
import previous from "../src/images/previous.png";
import ArtistModal from "./components/main_content/ArtistModal";

function Login() {
  const CLIENT_ID = "b39c9c2f4fa346a69e4cdbcafefd5185";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [isArtistModalOpen, setIsArtistModalOpen] = useState();

  // const getToken = () => {
  //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
  //     let token = urlParams.get('access_token');
  // }

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a
            id="login"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button className="logout_btn" onClick={logout}>
            Logout
          </button>
        )}
        {token ? (
          <form onSubmit={searchArtists}>
            <input
              type="search"
              onChange={(e) => setSearchKey(e.target.value)}
              placeholder="search"
            />
            <button type={"submit"}>Search</button>
          </form>
        ) : (
          <h1>
            {" "}
            <img src={previous} alt="" /> Login to search for your favorite
            artist
          </h1>
        )}
        <ArtistModal artists={artists} />
      </header>
    </div>
  );
}

export default Login;
