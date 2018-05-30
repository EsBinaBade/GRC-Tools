import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/user.model';
import { UserService } from '../../../shared/user.service';
import { Http, Headers } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router'; 

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],

    providers: [UserService]
})
export class SignupComponent implements OnInit {
    user: User;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    constructor(private userService: UserService, private router:Router) { }

    ngOnInit() {
        this.resetForm();
    }

    resetForm(form?: NgForm) {
        if (form != null)
            form.reset();
        this.user = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        }
    }

    OnSubmit(form: NgForm) {
        this.userService.registerUser(form.value)
            .subscribe((data: any) => {
                debugger;
                this.router.navigate(['/success']);
                //if (data.Succeeded == true) {
                //    this.resetForm(form);
                //    this.router.navigate(['/success']);
                //    //this.toastr.success("User Registration Successfull");
                //}
            });
    }

    
}
