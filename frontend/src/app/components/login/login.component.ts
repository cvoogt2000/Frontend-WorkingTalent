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
    this.userService.login(this.loginForm.value.email!, this.loginForm.value.password!)
            .subscribe({
                next: (data) => {
                    localStorage.setItem("key", data.key);
                    window.location.replace('/homepage');
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
