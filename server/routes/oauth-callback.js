const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("../config");

router.get("/", (req, res) => {
  request(
    // POST request to /token endpoint
    {
      method: "POST",
      uri: `https://myanimelist.net/v1/oauth2/token`,
      form: {
        code: req.query.code,
        code_verifier: config.codeChallenge,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(config.clientID + ":" + config.clientSecret).toString(
            "base64"
          ),
      },
      json: true,
    },

    // callback
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        req.session.id = body.access_token;
        config.token = body.access_token;
        res.redirect(`http://localhost:${config.clientPort}`);
      } else {
        console.log("error");
      }
    }
  );
});

module.exports = router;
