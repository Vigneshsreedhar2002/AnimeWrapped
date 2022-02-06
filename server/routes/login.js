const express = require("express");
const router = express.Router();
const config = require("../config");
const request = require("request");

router.get("/", (req, res) => {
  console.log("get");
  res.redirect(
    `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${config.clientID}&code_challenge=${config.codeChallenge}&state=${config.stateKey}&redirect_uri=${config.redirectURI}`
  );
});

module.exports = router;
