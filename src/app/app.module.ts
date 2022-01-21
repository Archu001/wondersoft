import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { LoanComponent } from './loan/loan.component';
import { EduComponent } from './loan/edu/edu.component';
import { GoldComponent } from './loan/gold/gold.component';
import { CarComponent } from './loan/car/car.component';
import { DirdemoComponent } from './dirdemo/dirdemo.component';
import { CalcComponent } from './calc/calc.component';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';
import { AshaComponent } from './asha/asha.component';
import { PunithComponent } from './punith/punith.component';
import { PaymentComponent } from './payment/payment.component';
import { BalanceComponent } from './balance/balance.component';
import { NewaccComponent } from './newacc/newacc.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubPipe } from './cub.pipe';
import { LfhooksComponent } from './lfhooks/lfhooks.component';
import { TDFComponent } from './tdf/tdf.component';
import { RDFComponent } from './rdf/rdf.component';
import { TemformsComponent } from './temforms/temforms.component';




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
    LoanComponent,
    EduComponent,
    GoldComponent,
    CarComponent,
    DirdemoComponent,
    CalcComponent,
    S1Component,
    S2Component,
    AshaComponent,
    PunithComponent,
    PaymentComponent,
    BalanceComponent,
    NewaccComponent,
    PipedemoComponent,
    SqrPipe,
    CubPipe,
    LfhooksComponent,
    TDFComponent,
    RDFComponent,
    TemformsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
