import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertService, UserService} from "../_services";
import {first} from "rxjs/operators";
import {User} from "../_models";

@Component({
    selector: 'app-edit-amin',
    templateUrl: './edit-admin.component.html',
    styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    // user: User;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) {
        // this.userService.getMember().subscribe(next=>{
        //     this.user=next;
        //     // this.registerForm.patchValue(this.user);
        //     console.log(this.user);
        // })
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            address: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            role: {
                id: 1
            }
        });
        // this.userService.getMember().subscribe(next=>{
        //     this.user=next;
        //     // this.registerForm.patchValue(this.user);
        //     console.log(this.user);
        // })
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.update(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Edit successful', true);
                    this.router.navigate(['/admin']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
