const axios = require("axios");
require("dotenv").config();

accessToken = process.env.ACCESSTOKEN;

playlistId = "0x5tL27EGlx61CjbkCtZMP"; // ID da playlist criada nos testes

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";
const ENDPOINT = `${SPOTIFY_API_BASE_URL}/playlists/${playlistId}/tracks`;

position = 0; // Input itens no indice determinado, ou no final se não definido
uri = "spotify:track:1wBP9Rb9AXHrMbt2cEBTSy"; // URIs a serem adicionados, separados por virgula

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

body = {
  uris: [uri],
  position,
};

axios
  .post(ENDPOINT, body, { headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });
