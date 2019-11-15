import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class AuthenticationService {
  current:string;
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    let formData: FormData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    return this.http.post<any>(`http://localhost:8080/login`, formData).pipe(
      map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.current=email;
        }

        return user;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }
}
