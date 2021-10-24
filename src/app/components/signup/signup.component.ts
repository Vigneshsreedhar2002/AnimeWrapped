import { Component, OnInit } from "@angular/core";

// import { ErrorStateMatcher } from "@angular/material/core";
// import {
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   FormGroupDirective,
//   NgForm,
//   Validators,
// } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/auth.service";
// import { MALClient } from '@chez14/mal-api-lite';

// const malClient = new MALClient({
//   clientId: "fee7be08888b1e9b9e14365d460e6fdb",
//   clientSecret:
//     "15b997ea791d430a3bc829cb19e96771d044fc1c68417613e69c542bb1694f48",
// });

// const { url, codeChallenge } = malClient.getOAuthURL();

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  constructor() {}

  ngOnInit() {}

  login() {}
}
