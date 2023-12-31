// app.js

const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv").config();
const fs = require("fs");

const app = express();
const port = 3000;

// Função para salvar os auth codes em um .env
function saveAuthCodes(accessToken, refreshToken) {
  const data = {
    ACCESSTOKEN: accessToken,
    REFRESHTOKEN: refreshToken,
  };

  const jsonData = JSON.stringify(data);

  fs.writeFile(".env", jsonData, (err) => {
    if (err) {
      console.log("Error saving auth codes to file:", err);
    } else {
      console.log("Codes saved");
    }
  });
}

// Rotas

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/login", (req, res) => {
  const client_id = process.env.CLIENTID;
  const redirect_uri = "http://localhost:3000/callback";
  const scopes =
    "playlist-modify-public playlist-read-private playlist-modify-private"; // Scopes autorizados

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scopes}`;

  res.redirect(spotifyAuthUrl);
});

app.get("/callback", async (req, res) => {
  const { code } = req.query;
  const redirect_uri = "http://localhost:3000/callback"; 
  const client_id = process.env.CLIENTID;
  const client_secret = process.env.CLIENTSECRET;

  // Prepara o parametro para enviar no request
  const authData = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: redirect_uri,
    client_id: client_id,
    client_secret: client_secret,
  };

  try {
    // POST request para receber o token
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      null,
      {
        params: authData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, refresh_token } = response.data;
    saveAuthCodes(access_token, refresh_token);

    // Redirecionamento simples para informar o usuario
    res.send("Authentication successful! You can now use the access token.");
  } catch (error) {
    console.error("Error exchanging code for access token:", error);

    res.status(500).send("Authentication failed. Please try again.");
  }
});
