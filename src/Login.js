import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import previous from "../src/images/previous.png";
import ArtistModal from "./components/main_content/ArtistModal";
import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  Scopes,
} from "./constants";
import { AppContext, defaultState } from "./utils/appContext";
import SpotifyWebApi from "spotify-web-api-js";

function Login() {
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [isArtistModalOpen, setIsArtistModalOpen] = useState();
  const node = useRef(null);
  const { setUser, user } = useContext(AppContext);

  const s = new SpotifyWebApi();

  const handleOutsideClick = (e) => {
    if (
      node.current &&
      !node.current.contains(e.target) &&
      e.target.parentNode.id !== "artist_modal"
    ) {
      setIsArtistModalOpen(false);
    }
  };

  useEffect(() => {
    s.setAccessToken(token);
    setUser({ ...user, spotifyInstance: s });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    if (token) {
      setToken(token);
      fetchProfile(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProfile = async (token) => {
    try {
      const result = await axios.get("https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser({
        ...user,
        name: result.data.display_name,
        image: result.data.images[0],
        spotifyInstance: s,
      });
    } catch (error) {
      alert(error?.response?.data?.error?.message ?? error);
    }
  };

  const logout = () => {
    setToken("");
    setUser(defaultState.user);
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
    setIsArtistModalOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header" ref={node}>
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
          <h1>Login to search for your favorite artist</h1>
        )}
        {!token ? (
          <a
            id="login"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${Scopes}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true`}
          >
            Login to Spotify
          </a>
        ) : (
          <button className="logout_btn" onClick={logout}>
            Logout
          </button>
        )}
        {isArtistModalOpen && <ArtistModal artists={artists} />}
        <script src="https://sdk.scdn.co/spotify-player.js"></script>
      </header>
    </div>
  );
}

export default Login;
