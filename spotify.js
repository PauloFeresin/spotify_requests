const clientId = "fe1606a563a44be1bb3947811ad02f3d";
const clientSecret = "680fee92c1784c86b0f58e1e4a58b5af";

const apiUrl = "https://api.spotify.com/v1";
const userId = "12149008434";

const axios = require("axios");

// Spotify API endpoints
const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";
const ENDPOINT = `${SPOTIFY_API_BASE_URL}/browse/new-releases`;

const accessToken =
  "BQA0ML5BTTUOGrS9UoAUqWFRNBcsnWlYtnIBz7fRWKBTPZF2cQd7N5i0J8yXGadqK42PP2Oo2u4f26JUdJbR4-LIy-Xy598qUt6vKr3vVf7idPo6_t3o6BDzEcqK-5LEXKT_KQMhugAgh0tzDxqoVsG3UFryReb4OxrKzkY-k6mtQttT3WwvMcvxOcTPdobKslqhDLXZRe32OtFAB7noi19XjrWshUbqfwHo-_rEz9cDZOfzUXfEQ2UpNZ8";
//  access token
const headers = {
  Authorization: `Bearer ${accessToken}`,
  limit: 1,
};

//id da playlist teste
const id = "12149008434";

// const body = {
//   uris: [`spotify:track:${"0D2A4Rid7gnlcwlspLTkx0"}`],
//   position: 0,
// };

const body = {
  limit: 2,
};

console.log(body);
console.log("0D2A4Rid7gnlcwlspLTkx0");

//Fazemos o request aqui
axios
  .get(ENDPOINT, { headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
