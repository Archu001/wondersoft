import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GalaryComponent } from './galary/galary.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { DevelopmentComponent } from './development/development.component';
import { TestingComponent } from './testing/testing.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { ProductsComponent } from './products/products.component';
import { PagenotComponent } from './pagenot/pagenot.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GalaryComponent,
    RegisterComponent,
    ServiceComponent,
    DevelopmentComponent,
    TestingComponent,
    DeploymentComponent,
    ProductsComponent,
    PagenotComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
