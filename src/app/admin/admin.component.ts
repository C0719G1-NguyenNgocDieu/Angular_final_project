import {Component, OnInit} from '@angular/core';
import {User} from "../_models";
import {AuthenticationService, UserService} from "../_services";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    apiUser: User;
    users: User[];

    constructor(private userService: UserService) {
        this.userService.getMember().subscribe(next => {
            this.apiUser = next;
            console.log(this.apiUser)
        });
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id
                   :
                   number
    ) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers();
        });
    }

    loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}
