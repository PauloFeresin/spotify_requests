const superagent = require("superagent");
require("dotenv").config();

const userId = process.env.USERID;
const accessToken = process.env.ACCESSTOKEN;
playlist_id = "1EXQQO1HD7Wi9NTVIyVExD";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";
const ENDPOINT = `${SPOTIFY_API_BASE_URL}/users/${userId}/playlists/${playlist_id}/tracks`;

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

uri = "spotify:track:0aASUtDb1N96NJDwmWj5Gf";

body = {
  uris: [uri],
  position: 0,
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
