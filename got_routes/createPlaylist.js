require("dotenv").config();

const userId = process.env.USERID;
const accessToken = process.env.ACCESSTOKEN;

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";
const ENDPOINT = `${SPOTIFY_API_BASE_URL}/users/${userId}/playlists`;

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

const body = {
  name: "Essa foi feita com GOT",
  description: "Feita no VS code e GOT",
  public: false,
};

import("got")
  .then((got) => {
    return got.default.post(ENDPOINT, {
      headers,
      json: body,
    });
  })
  .then((response) => {
    console.log(response.body);
  })
  .catch((error) => {
    console.error(error.response ? error.response.body : error.message);
  });
