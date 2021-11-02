import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Config } from "@ionic/core";

@Injectable()
export class UserDataService {
  private SERVER_URL = "http://localhost:3000/user";
  constructor(private http: HttpClient) {}

  getUserName(): string {
    return JSON.stringify(this.http.get<Config>(this.SERVER_URL));
  }
}
