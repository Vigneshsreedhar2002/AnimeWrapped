import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";


@Injectable()
export class UserDataService {
  private SERVER_URL = "http://localhost:3000/";
  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    console.log(this.http.get(this.SERVER_URL + "users"));
    return this.http.get(this.SERVER_URL + "users");
  }
}
