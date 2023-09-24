const axios = require("axios");
require("dotenv").config();

accessToken = process.env.ACCESSTOKEN;
playlistId = "0x5tL27EGlx61CjbkCtZMP";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";
const ENDPOINT = `${SPOTIFY_API_BASE_URL}/playlists/${playlistId}`;

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

body = {
  name: "Alterando o nome da playlist",
  public: false,
  description: "Essa descrição é nova",
};

axios
  .put(ENDPOINT, body, { headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });
