import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OrderOverviewAdminComponent } from './components/order-overview-admin/order-overview-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from '../app/interceptor/TokenInterceptor';
import { OrderOverviewTraineeComponent } from './components/order-overview-trainee/order-overview-trainee.component';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    ProductDetailsComponent,
    LoginComponent,
    HomepageComponent,
    OrderOverviewAdminComponent,
    OrderOverviewTraineeComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
