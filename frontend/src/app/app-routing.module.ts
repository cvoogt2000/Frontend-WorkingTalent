import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'catalogus', component: CatalogComponent},
  { path: 'boek/:id', component: ProductDetailsComponent},
  { path: 'home', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideHttpClient(withFetch()), provideRouter(routes), provideClientHydration()]
})
export class AppRoutingModule { }