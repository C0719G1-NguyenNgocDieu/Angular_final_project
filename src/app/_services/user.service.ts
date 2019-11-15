import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class UserService {
    constructor(private http: HttpClient,
                private authenticationService:AuthenticationService) { }

    getMember(){
        return this.http.get<User>(`http://localhost:8080/api/${this.authenticationService.current}`)
    }
    getAll() {
        return this.http.get<User[]>(`http://localhost:8080/api`);
    }

    getById(id: number) {
        return this.http.get<User>(`http://localhost:8080/api/` + id);
    }

    register(user: User) {
        return this.http.post(`http://localhost:8080/api/add`, user);
    }

    update(user: User) {
        return this.http.put(`http://localhost:8080/api/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`http://localhost:8080/api/` + id);
    }
}
