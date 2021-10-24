import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { TokenService } from "./token.service";

const OAUTH_CLIENT = "fee7be08888b1e9b9e14365d460e6fdb";
const OAUTH_SECRET =
  "15b997ea791d430a3bc829cb19e96771d044fc1c68417613e69c542bb1694f48";
const API_URL = "https://myanimelist.net/v1/oauth2/authorize";
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(OAUTH_CLIENT + ":" + OAUTH_SECRET),
  }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  redirectUrl = "http://localhost/oauth";

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

  private static log(message: string): any {
    console.log(message);
  }

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set("response_type", "code")
      .set("client_id", OAUTH_CLIENT)
      .set(
        "code_challenge",
        "NklUDX_CzS8qrMGWaDzgKs6VqrinuVFHa0xnpWPDy7_fggtM6kAar4jnTwOgzK7nPYfE9n60rsY4fhDExWzr5bf7sEvMMmSXcT2hWkCstFGIJKoaimoq5GvAEQD8NZ8g"
      );

    return this.http.post<any>(API_URL, body, HTTP_OPTIONS).pipe(
      tap((res) => {
        this.tokenService.saveToken(res.access_token);
        this.tokenService.saveRefreshToken(res.refresh_token);
      }),
      catchError(AuthService.handleError)
    );
  }

  refreshToken(refreshData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set("refresh_token", refreshData.refresh_token)
      .set("grant_type", "refresh_token");
    return this.http.post<any>(API_URL, body, HTTP_OPTIONS).pipe(
      tap((res) => {
        this.tokenService.saveToken(res.access_token);
        this.tokenService.saveRefreshToken(res.refresh_token);
      }),
      catchError(AuthService.handleError)
    );
  }

  logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(API_URL + "oauth/signup", data).pipe(
      tap((_) => AuthService.log("register")),
      catchError(AuthService.handleError)
    );
  }

  secured(): Observable<any> {
    return this.http
      .get<any>(API_URL + "secret")
      .pipe(catchError(AuthService.handleError));
  }
}
