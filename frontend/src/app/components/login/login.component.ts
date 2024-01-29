import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorMessage: String = "";

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  submitLogin(): void {
    this.userService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .subscribe({
                next: (data) => {
                  if (data.success) {
                    localStorage.setItem("WT_TOKEN", data.token);
                    localStorage.setItem("WT_NAME", data.name);
                    localStorage.setItem("WT_ADMIN", data.admin ? "true" : "false");
                    localStorage.setItem("WT_USERID", data.id);
                    window.location.replace('/besteloverzicht');
                  } else {
                    //localStorage.clear();
                    alert("Login is niet gelukt");
                  }
                },
                error: (error) => {
                    if (error.error.message) {
                        this.errorMessage = error.error.message;
                    } else {

                        this.errorMessage = error.error;
                    }
                    this.loginForm.patchValue({ password: ''});
                }
            }
        );
  }

  ngOnInit(): void {

  }
}
