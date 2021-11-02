var generateCodeChallenge = function (length) {
  var text = "";
  var possible =
    "NklUDX_CzS8qrMGWaDzgKs6VqrinuVFHa0xnpWPDy7_fggtM6kAar4jnTwOgzK7nPYfE9n60rsY4fhDExWzr5bf7sEvMMmSXcT2hWkCstFGIJKoaimoq5GvAEQD8NZ8g";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const code_challenge = generateCodeChallenge(128);

module.exports = {
  // ports
  clientPort: 4200,
  serverPort: 3000,

  // api keys
  clientID: "fee7be08888b1e9b9e14365d460e6fdb",
  clientSecret:
    "15b997ea791d430a3bc829cb19e96771d044fc1c68417613e69c542bb1694f48",
  codeChallenge: code_challenge,
  token: "",
  apiURL: "https://myanimelist.net/v1/oauth2/authorize",
  redirectURI: "http://localhost:4200",
  stateKey: "mal_auth_state",
};
