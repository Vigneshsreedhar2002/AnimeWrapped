const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("../config");

router.get("/", (req, res) => {
  // token in session -> get user data and send it back to the Angular app
  if (config.access_token) {
    request(
      {
        method: "GET",
        uri: `https://api.myanimelist.net/v2/users/@me`,
        headers: {
          Authorization: "Bearer " + config.access_token,
        },
      },

      // callback
      (error, response, body) => {
        console.log(JSON.parse(body));

        // // valid token -> get more user data and send it back to the Angular app
        // request(
        //   // GET request to /registration endpoint
        //   {
        //     method: "GET",
        //     uri: `https://api.myanimelist.net/v0.20/users/@me?fields=name`,
        //     json: true,
        //     headers: {
        //       Authorization: "Bearer " + config.access_token,
        //     },
        //   },

        //   // callback
        //   (error, response, body) => {
        //     res.send({
        //       ...userInfoResponse,
        //       ...body, // body is results from the registration endpoint:w
        //     });
        //   }
        // );
      }
    );
  }

  // no token -> send nothing
  else {
    res.send({});
  }
});

module.exports = router;
