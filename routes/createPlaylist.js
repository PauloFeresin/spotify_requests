const axios = require("axios");
require("dotenv").config();

const userId = process.env.USERID;
//  access token
const accessToken = process.env.ACCESSTOKEN;

// Spotify API endpoints
const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";
const ENDPOINT = `${SPOTIFY_API_BASE_URL}/users/${userId}/playlists`;

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

const body = {
  name: "Playlist de códigos",
  description: "Feita no VS code",
  public: false,
};

//Fazemos o request aqui
axios
  .post(ENDPOINT, body, { headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
