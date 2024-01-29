import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  public isLoginPage: boolean = false;

  constructor ( @Inject(PLATFORM_ID) private platformId: object ){
    if (isPlatformBrowser(this.platformId)) {
      this.isLoginPage = window.location.pathname == '/login';

      const token = localStorage.getItem("WT_TOKEN");
        if (token === null && window.location.pathname != '/login') {
            window.location.replace("/login");
        }
    }
  }
  
}
