const superagent = require("superagent");
require("dotenv").config();

const userId = process.env.USERID;
const accessToken = process.env.ACCESSTOKEN;

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";
const ENDPOINT = `${SPOTIFY_API_BASE_URL}/users/${userId}/playlists`;

const headers = {
  Authorization: `Bearer ${accessToken}`,
};

const body = {
  name: "Playlist da banda",
  description: "Feita no VS code",
  public: false,
};

// Make the POST request using Superagent
superagent
  .post(ENDPOINT)
  .set(headers) // Set the Authorization header
  .send(body) // Include the data in the request body
  .then((response) => {
    console.log(response.body);
  })
  .catch((error) => {
    console.error(error);
  });
