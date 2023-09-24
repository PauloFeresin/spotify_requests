const superagent = require("superagent");
require("dotenv").config();

const userId = process.env.USERID;
const accessToken = process.env.ACCESSTOKEN;
playlist_id = "6bKiR2RPqZ9VQ5wT6hE3E8";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";
const ENDPOINT = `${SPOTIFY_API_BASE_URL}/playlists/${playlist_id}`;

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

const body = {
  name: "Músicas da banda",
  public: false,
  collaborative: false,
  description: "Playlist com as músicas da banda",
};

superagent
  .put(ENDPOINT)
  .set(headers)
  .send(body)
  .then((response) => {
    console.log(response.body);
  })
  .catch((error) => {
    console.error(error);
  });
