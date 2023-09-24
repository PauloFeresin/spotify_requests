const superagent = require("superagent");
require("dotenv").config();

const userId = process.env.USERID;
const accessToken = process.env.ACCESSTOKEN;
playlist_id = "6bKiR2RPqZ9VQ5wT6hE3E8";

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

superagent
  .post(ENDPOINT)
  .set(headers)
  .send(body)
  .then((response) => {
    console.log(response.body);
  })
  .catch((error) => {
    console.error(error);
  });
