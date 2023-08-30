const axios = require("axios");
const express = require("express");

const client_id = "fe1606a563a44be1bb3947811ad02f3d";
const clientSecret = "680fee92c1784c86b0f58e1e4a58b5af";

const apiUrl = "https://api.spotify.com/v1";
const userId = "12149008434";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";

var redirect_uri = "http://localhost:8888/callback";

var app = express();

var scope = [
  "playlist - modify - public",
  "playlist - read - private",
  "playlist - modify - private",
];

app.get("/login", function (req, res) {
  var state = generateRandomString(16);
  var scope = [
    "playlist - modify - public",
    "playlist - read - private",
    "playlist - modify - private",
  ];
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

console.log();
