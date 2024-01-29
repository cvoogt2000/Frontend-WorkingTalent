import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  // public isLoginPage: boolean = false;

  // constructor (){
  //   this.isLoginPage = window.location.pathname == '/login';

  //   const token = localStorage.getItem('key');
  //       if (token === null && window.location.pathname != '/login') {
  //           window.location.replace("/login");
  //       }
  // }
  
}
