// user-create.component.ts
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
firstname: any;
lastname: any;
admin: any;

  constructor(private userService: UserService) {}

  createUser(firstname: string, lastname: string, email: string, password: string, admin: boolean): void {
    // Call the user service to create a new user
      this.userService.createUser(firstname, lastname, email).subscribe({
        // Handle success
        next: (data) => {
          console.log('Gebruiker is aangemaakt', data);
        },
        error: (error) => {
        // Handle error
        console.log('Gebruiker is niet aangemaakt', error);
      });
  }
}
