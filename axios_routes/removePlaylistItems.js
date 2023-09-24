const axios = require("axios");
require("dotenv").config();

accessToken = process.env.ACCESSTOKEN;

playlistId = "0x5tL27EGlx61CjbkCtZMP";
tracksToRemove = "spotify:track:13DyHQMExxmS51MD9C3OLn";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";
const ENDPOINT = `${SPOTIFY_API_BASE_URL}/playlists/${playlistId}/tracks`;

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

body = {
  tracks: [
    {
      uri: tracksToRemove,
    },
  ],
};

//Precisamos alterar o request para o formato abaixo.
//tipicamente, o DELETE não leva um body no request.
//No caso da API do spotify é necessário ter o body e a API aceita, por isso não temos problema

axios({
  method: "delete",
  url: ENDPOINT,
  headers: headers,
  data: body,
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
