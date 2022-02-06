const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("../config");

router.get("/", (req, res) => {
  console.log(req.query.code);
  console.log(req.query.state);
  request(
    // POST request to /token endpoint
    {
      method: "POST",
      uri: `https://myanimelist.net/v1/oauth2/token?`,
      form: {
        client_id: config.clientID,
        client_secret: config.clientSecret,
        code: req.query.code,
        code_verifier: config.codeChallenge,
        redirect_uri: config.redirectURI,
        grant_type: "authorization_code",
      },
      json: true,
    },

    // callback
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        config.access_token = body.access_token;
        config.refresh_token = body.refresh_token;
        console.log(config.access_token);
        console.log(config.refresh_token);
        res.redirect(`http://localhost:${config.clientPort}`);
      } else {
        console.log("error");
        console.log(response.statusCode);
      }
    }
  );
});

module.exports = router;
